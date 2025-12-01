import SignUpForm from '@/components/SignUpForm';
import { buttonStyles } from '@/styles/button';
import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Register() {
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
        SIGN UP
      </Text>
      <SignUpForm />
    </SafeAreaView>
  );
}
