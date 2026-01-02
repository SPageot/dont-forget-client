import { View, Text, Modal, Pressable, TextInput } from 'react-native'
import React from 'react'
import { styles } from '@/styles/modalStyle'
import { Button } from 'react-native-paper'

const GroceryTitleModal = ({ visible, handleCloseClick, onChangeTitleText, titleText, handleSubmitClick }: { visible: boolean, handleCloseClick: () => void, onChangeTitleText: (text: string) => void, titleText: string, handleSubmitClick: () => void }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={handleCloseClick}
        >
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={{ fontSize: 20, fontWeight: 500, }}>Add Grocery List Title</Text>
                    <TextInput style={{ borderBottomWidth: 1, borderBottomColor: "black", marginTop: 30, marginBottom: 50, padding: 10 }} onChangeText={onChangeTitleText} value={titleText} />
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                        <Button mode="outlined" onPress={handleCloseClick}>
                            <Text>Close</Text>
                        </Button>
                        <Button mode="outlined" onPress={handleSubmitClick}>
                            <Text>Submit List</Text>
                        </Button>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default GroceryTitleModal