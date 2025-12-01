import { buttonStyles } from '@/styles/button';
import { router } from 'expo-router';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Dont 4Get
      </Text>
      <View style={buttonStyles.buttonContainer}>
        <TouchableOpacity
          style={buttonStyles.button}
          onPress={() => router.push('/login')}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonStyles.button}
          onPress={() => router.push('/register')}
        >
          <Text style={{ color: 'white' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
