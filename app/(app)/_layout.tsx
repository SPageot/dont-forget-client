import { RootState } from "@/store/store";
import { Redirect, Slot, Tabs } from "expo-router";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
    const user = useSelector((state: RootState) => state.users)
    if (!user._id) {
        return <Redirect href="/login" />;
    }

    return <Tabs screenOptions={{
        headerShown: false
    }}>
        <Tabs.Screen name="index" options={{
            title: "Home", tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={size} />
            )
        }} />
    </Tabs>;
}