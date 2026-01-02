import { Stack, Tabs } from "expo-router";
import GradientBackground from "@/component/GradientBackground";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
    </Tabs>
  )
}
