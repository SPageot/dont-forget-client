import { Button, FlatList, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '@/styles/background'
import { LinearGradient } from 'expo-linear-gradient'
import UserInput from '@/components/UserInput'
import axios from 'axios'
import { BASE_API } from '@/util/baseApi'
import ItemContainer from '@/components/ItemContainer'

export default function Recipes() {
    const [chatInput, setChatInput] = useState("")
    const [recipeList, setRecipeList] = useState<any>([])

    const handleGetReceipePress=  async() => {
        const cleanChatInput = chatInput.trim()
        if(cleanChatInput){
        const res = await axios.post(`${BASE_API}/recipe/`,{
            chatInput
        })

        if(res.data){
            setRecipeList(res.data.map((item:any) => item.ingredient))
        }
    }
    }

  return (
    <LinearGradient
      colors={['#f5f7a1', '#ffd194', '#ff9a8b']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
    <SafeAreaView>
        <View style={{flexDirection:"row", justifyContent:"center"}}>
            <UserInput placeholder='What recipe are you looking for' value={chatInput} onChangeText={(text) => setChatInput(text)}/>
            <Button title='Get' onPress={handleGetReceipePress}/>
        </View>
     <FlatList
        style={{ marginBottom: 30 }}
        data={recipeList}
        renderItem={({ item }) => (
          <ItemContainer
            listItem={item}
            onAddToListPress={() => console.log(item) }
          />
        )}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
    </LinearGradient>
  )
}