import { View, Text, Modal, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '@/styles/modalStyle'
import { Button } from 'react-native-paper'
import axios from 'axios'
import { GroceryListProps } from '@/types/ListTypes'
import { BASE_URL } from '@/util/misc'

const ViewGroceryListModal = ({ visible, handleCloseClick, handleModifyClick, userId }: { visible: boolean, handleCloseClick: () => void, handleModifyClick: (item: GroceryListProps) => Promise<void>, userId: string }) => {
    const [groceryList, setGroceryList] = useState<any[]>([])

    const fetchUserGroceryList = async () => {
        const res = await axios.get(`${BASE_URL}/lists/${userId}`)
        setGroceryList(res.data)
    }
    useEffect(() => {
        fetchUserGroceryList()
    }, [])

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={handleCloseClick}
        >
            <View style={styles.overlay}>
                <View style={styles.viewModal}>
                    <Text style={{ fontSize: 20, fontWeight: 500, }}>Grocery List</Text>
                    {groceryList.length > 0 ? <FlatList
                        data={groceryList}
                        renderItem={({ item }) => {
                            return <Button onPress={() => handleModifyClick(item)} mode='outlined'><Text>{item.title}</Text></Button>
                        }}
                        contentContainerStyle={{ padding: 10 }}
                    /> : <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 24, fontWeight: 200, fontStyle: "italic" }}>No List</Text></View>}
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                        <Button mode="outlined" onPress={handleCloseClick}>
                            <Text>Close</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ViewGroceryListModal