import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function GradientBackground({
  children,
  style,
}: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={["#bbf7d0", "#86efac", "#4ade80"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

