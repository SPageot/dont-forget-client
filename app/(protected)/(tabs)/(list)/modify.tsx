import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '@/styles/background';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { BASE_API } from '@/util/baseApi';
import { useStore } from '@/store/store';
import ItemContainer from '@/components/ItemContainer';
import { ListProps } from '@/types/list';
import { Toast } from 'toastify-react-native';
import ListTitleModal from '@/components/ListTitleModal';
import { useRouter } from 'expo-router';

export default function ModifyList() {
  const router = useRouter()
  const [list, setList] = useState<{id:string, title:string}[] | []>([]);
  const [listTitle, setListTitle] = useState("");
  const [visible, setIsVisible] = useState(false);
  const user = useStore((state: any) => state.user);
  const userList = useStore((state: any) => state.userList);
  const userListItem = useStore((state: any) => state.userListItem);
  const setUserList = useStore((state:any) => state.setUserList)
  const setUserListItem = useStore((state:any) => state.setUserListItem)  

  useEffect(() => {
    const fetchList = async () => {
      const res = await axios.get(`${BASE_API}/lists/${user._id}`);
      if (res.data) {
        setList(res.data.map((item:ListProps) => ({id:item._id, title:item.title})));
      }
    };
    fetchList();
  }, []);

 
  const getItem = async(listId:string) => {
    const res = await axios.get(`${BASE_API}/lists/userList/${listId}`)
    setUserListItem(res.data)
    setUserList(res.data.listItems)
    router.push("/listItems")
  }

    const onUpdateList = async () => {
      if("_id" in userListItem){
      try {
        const res = await axios.put(`${BASE_API}/lists/${userListItem._id}`, {
          list: {
            userId: user._id,
            title: userListItem.title,
            listItems: userList,
          },
        });
  
        if (res.data) {
          setUserList([]);
          setIsVisible(false);
          setListTitle("");
          Toast.success("List Successfully Updated");
        }else{
          throw new Error("Error getting data from server, Please try again!")
        }
      } catch (err) {
        if(err instanceof Error){
        Toast.error(err.message)
        }
        console.error(err)
      }
    }
    };

    const onDeleteItem = async(id:any ) => {
      const res = await axios.delete(`${BASE_API}/lists/${id}`)
      if(res.data){
      router.push("/modify")
      }
    }

  return (
    <>
    <LinearGradient
      colors={['#f5f7a1', '#ffd194', '#ff9a8b']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView>
        <FlatList
          data={list}
          renderItem={({ item }:{item: {id:string, title:string}}) => (
              <ItemContainer
              listItem={item.title}
              onModifyPress={() => getItem(item.id)}
              onRemovePress={() => onDeleteItem(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </LinearGradient>
    <ListTitleModal visible={visible} listTitle={listTitle} onRequestClose={() => setIsVisible(!visible)} onChangeTitleText={(text) => setListTitle(text)} onCancelPress={() => setIsVisible(!visible)} onSubmitList={onUpdateList} />
    </>
  );
}
