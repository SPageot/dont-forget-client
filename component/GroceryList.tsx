import { FlatList, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, List, Text } from 'react-native-paper';
import { GroceryItem } from '@/types/ListTypes';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function GroceryList({ groceryList, handleSubtractQuantity, handleAddQuantity }: { groceryList: GroceryItem[], handleSubtractQuantity: (name: string) => void, handleAddQuantity: (name: string) => void }) {
  return (
    <FlatList
      data={groceryList}
      renderItem={({ item }) =>
        <Button mode="outlined">
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', padding: 5, gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
              <AntDesign name="minus-circle" size={24} color="black" onPress={() => handleSubtractQuantity(item.name)} />
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.quantity}</Text>
              <AntDesign name="plus-circle" size={24} color="black" onPress={() => handleAddQuantity(item.name)} />
            </View>
          </View>
        </Button>}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ gap: 15 }}
    />
  )
}