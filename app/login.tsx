import LoginForm from '@/components/LoginForm';
import { buttonStyles } from '@/styles/button';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 400,
          color: 'white',
          alignSelf: 'flex-start',
          margin: 20,
        }}
      >
        LOG IN
      </Text>
      <LoginForm />
    </SafeAreaView>
  );
}
