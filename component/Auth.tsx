import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput, Text } from 'react-native-paper'
import { UserDetailsType } from '@/types/userTypes';
import axios from 'axios';
import { BASE_URL, userDetails } from '@/util/misc';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@/features/userSlice';
import { useRouter } from 'expo-router';
import { RootState } from '@/store/store';

export default function Auth() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [user, setUser] = useState<UserDetailsType>(userDetails)
    const router = useRouter()
    const dispatch = useDispatch()

    const handleLoginPress = async () => {
        if (isRegistering) {
            setIsRegistering(false)
            setUser(userDetails)
            return;
        }

        const res = await axios.post(`${BASE_URL}/user/login`, { username: user.username, password: user.password })
        const data = res.data
        if (data) {
            dispatch(addUser(data))
            router.push("/")
        }
    }

    const handleRegisterPress = async () => {
        if (!isRegistering) {
            setIsRegistering(true)
            setUser(userDetails)
            return;
        }
        const res = await axios.post(`${BASE_URL}/user/create`, user)
        const data = res.data
        if (data) {
            setIsRegistering(false)
            setUser(userDetails)
        }
    }

    const onChangeUserDetails = (text: string, type: string) => {
        switch (type) {
            case "username":
                setUser(prev => ({ ...prev, username: text }))
                break;
            case "password":
                setUser(prev => ({ ...prev, password: text }))
                break;
            case "email":
                setUser(prev => ({ ...prev, email: text }))
                break;
            case "name":
                setUser(prev => ({ ...prev, name: text }))
                break;
            case "phoneNumber":
                setUser(prev => ({ ...prev, phone_number: text }))
                break;
            default:
                user

        }

    }


    return (
        <View style={{ borderWidth: 2, borderColor: "black", padding: 50, gap: 10, margin: 10 }}>
            <View>
                <Text variant="labelLarge">Username</Text>
                <TextInput mode='outlined' style={{ backgroundColor: "none" }} onChangeText={(text: string) => onChangeUserDetails(text, "username")} value={user.username} />
            </View>
            <View>
                <Text variant="labelLarge">Password</Text>
                <TextInput mode='outlined' style={{ backgroundColor: "none" }} onChangeText={(text: string) => onChangeUserDetails(text, "password")} value={user.password} />
            </View>
            {isRegistering && <>
                <View>
                    <Text variant="labelLarge">Name</Text>
                    <TextInput mode='outlined' style={{ backgroundColor: "none" }} onChangeText={(text: string) => onChangeUserDetails(text, "name")} value={user.name} />
                </View>
                <View>
                    <Text variant="labelLarge">Email</Text>
                    <TextInput mode='outlined' style={{ backgroundColor: "none" }} onChangeText={(text: string) => onChangeUserDetails(text, "email")} value={user.email} />
                </View>
                <View>
                    <Text variant="labelLarge">Phone Number</Text>
                    <TextInput mode='outlined' style={{ backgroundColor: "none" }} onChangeText={(text: string) => onChangeUserDetails(text, "phoneNumber")} value={user.phone_number} />
                </View>
            </>}
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Button onPress={handleLoginPress}>
                    {isRegistering ? "Go To Login" : "Login"}
                </Button>
                <Button onPress={handleRegisterPress}>
                    {isRegistering ? "Register" : "Sign Up"}
                </Button>
            </View>
        </View>
    )
}