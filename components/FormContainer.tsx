import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { buttonStyles } from '@/styles/button';
import { router } from 'expo-router';

const FormContainer = ({
  children,
  onLeftButtonPress,
  leftButtonText,
  onRightButtonPress,
  rightButtonText,
}: {
  children: React.ReactNode;
  onLeftButtonPress: () => void;
  leftButtonText: string;
  onRightButtonPress: () => void;
  rightButtonText: string;
}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      {children}
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={buttonStyles.button}
          onPress={onLeftButtonPress}
        >
          <Text style={{ color: 'white' }}>{leftButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonStyles.button}
          onPress={onRightButtonPress}
        >
          <Text style={{ color: 'white' }}>{rightButtonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormContainer;
