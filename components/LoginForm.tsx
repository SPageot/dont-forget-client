import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { buttonStyles } from '@/styles/button';
import { router } from 'expo-router';
import UserInput from './UserInput';
import FormContainer from './FormContainer';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <FormContainer
      onLeftButtonPress={() => router.push('/register')}
      leftButtonText="Go to Register"
      onRightButtonPress={() => console.log('LOGIN LOGIC')}
      rightButtonText="Login"
    >
      <UserInput
        inputName="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <UserInput
        secureTextEntry={true}
        autoComplete="password"
        autoCapitalize="none"
        inputName="Password"
        textType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
    </FormContainer>
  );
};

export default LoginForm;
