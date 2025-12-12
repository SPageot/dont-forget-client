import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '@/styles/background';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { BASE_API } from '@/util/baseApi';
import { useStore } from '@/store/store';
import List from '@/components/List';
import { Toast } from 'toastify-react-native';
import ListTitleModal from '@/components/ListTitleModal';
import _ from "lodash"
import { useRouter } from 'expo-router';

export default function ModifyList() {
  const router = useRouter()
  const user = useStore((state: any) => state.user);
  const userList = useStore((state: any) => state.userList);
  const userListItem = useStore((state: any) => state.userListItem);
  const setUserList = useStore((state:any) => state.setUserList) 
  const [visible, setIsVisible] = useState(false); 
  const [listTitle,setListTitle] = useState(userListItem.title)
  const [listItem, setListItem] = useState("")

  const handleChange = (text:string) => {
    setListItem(text)
  }

  const onModal = () => {
    setIsVisible(!visible);
  };

  const addToList = () => {
    if (listItem) {
      if (userList.includes(listItem)) {
        Toast.error("Item already in List", "bottom");
        return;
      }
      setUserList([...userList, listItem]);
    }
  };

  const onRemoveListItemPress = (item: string) =>
    setUserList(
      userList.filter((removeItem: string) => removeItem != item)
    )
  
  
    const onUpdateList = async () => {
      if("_id" in userListItem){
      try {
        const res = await axios.put(`${BASE_API}/lists/${userListItem._id}`, {
          list: {
            userId: user._id,
            title: listTitle,
            listItems: userList,
          },
        });
  
        if (res.data) {
          setUserList([]);
          setIsVisible(false);
          setListTitle("")
          setListItem("")
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
    
if (_.isEmpty(userListItem) && _.isEmpty(userList)){
    router.push("/modify")
    return;
}
  return (
    <>
    <LinearGradient
      colors={['#f5f7a1', '#ffd194', '#ff9a8b']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={{flex:1}}>
        <List handleListItemChange={handleChange} listItem={listItem} list={userList} onAddToList={addToList} onRemoveListItemPress={onRemoveListItemPress} onModal={onModal}  />
      </SafeAreaView>
    </LinearGradient>
    <ListTitleModal visible={visible} listTitle={listTitle} onRequestClose={() => setIsVisible(!visible)} onChangeTitleText={(text) => setListTitle(text)} onCancelPress={() => setIsVisible(!visible)} onSubmitList={onUpdateList} />
    </>
  );
}


