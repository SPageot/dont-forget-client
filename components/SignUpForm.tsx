import { View, Text } from 'react-native';
import React, { useState } from 'react';
import FormContainer from './FormContainer';
import { router } from 'expo-router';
import UserInput from './UserInput';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');

  return (
    <FormContainer
      onLeftButtonPress={() => router.push('/login')}
      leftButtonText="Go to Login"
      onRightButtonPress={() => console.log('LOGIN LOGIC')}
      rightButtonText="Sign Up"
    >
      <UserInput
        inputName="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName}
      />
      <UserInput
        inputName="Email Address"
        textType="emailAddress"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <UserInput
        inputName="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
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

export default SignUpForm;
