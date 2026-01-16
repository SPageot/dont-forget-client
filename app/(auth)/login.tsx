import React from 'react'
import GradientBackground from '@/component/GradientBackground'
import { SafeAreaView } from 'react-native-safe-area-context'
import Auth from '@/component/Auth'

export default function Login() {
    return (
        <GradientBackground>
            <SafeAreaView style={{ justifyContent: "center", flex: 1 }}>
                <Auth />
            </SafeAreaView>
        </GradientBackground>
    )
}