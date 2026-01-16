import { RootState } from "@/store/store";
import { Redirect, Slot } from "expo-router";
import { useSelector } from "react-redux";

export default function AppLayout() {
    const user = useSelector((state: RootState) => state.users)
    if (!user._id) {
        return <Redirect href="/login" />;
    }

    return <Slot />;
}