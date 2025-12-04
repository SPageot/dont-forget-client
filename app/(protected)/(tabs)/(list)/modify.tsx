import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '@/styles/background';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { BASE_API } from '@/util/baseApi';
import { useStore } from '@/store/store';
import ItemContainer from '@/components/ItemContainer';
import { ListProps } from '@/types/list';

export default function ModifyList() {
  const [list, setList] = useState<string[] | []>([]);
  const user = useStore((state: any) => state.user);

  useEffect(() => {
    const fetchList = async () => {
      const res = await axios.get(`${BASE_API}/lists/${user._id}`);
      if (res.data) {
        setList(res.data.map((item: ListProps) => item.title));
      }
    };

    fetchList();
  }, []);

  return (
    <LinearGradient
      colors={['#f5f7a1', '#ffd194', '#ff9a8b']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ItemContainer
              listItem={item}
              onRemovePress={() =>
                setList((prev) =>
                  prev.filter((removeItem) => removeItem != item)
                )
              }
            />
          )}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
