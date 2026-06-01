import AsyncStorage from "@react-native-async-storage/async-storage";
import type { IUser } from "@shared/types/user.types";
import { useMeQuery } from "../api/userApi";
import React, { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { socket } from "@shared/api";
interface UserContextData {
    user: IUser | null;
    isAuthenticated: boolean;
    setToken: (value: string | null) => void;
    token: string | null;
}
const UserContext = createContext<UserContextData | null>(null);
export function useUserContext() {
    const ctx = useContext(UserContext);
    if (!ctx)
        throw new Error("UseUserContext must be used within UserContextProvider");
    return ctx;
}
export function UserContextProvider({ children }: {
    children: ReactNode;
}) {
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();
    const hasToken = token ? true : false;
    const { data, isSuccess, error } = useMeQuery(undefined, { skip: !hasToken });
    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem("token");
            if (!token)
                return;
            setToken(token);
        };
        getToken();
    }, []);

    useEffect(() => {
        if (!token) return;

        socket.auth = { token: `Bearer ${token}` };

        socket.disconnect();
        socket.connect();

        const onConnect = () => {
            console.log("user connected");
        };

        const onDisconnect = () => {
            console.log("user disconnected");
        };

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, [token]);
   
    useEffect(() => {
        if (!isSuccess)
            return;
        router.replace("/chats");
    }, [isSuccess, router]);
    useEffect(() => {
        if (!error)
            return;
        const clearAuth = async () => {
            if (!("status" in error))
                return;
            if (error.status !== 401)
                return;
            setToken(null);
            await AsyncStorage.removeItem("token");
            router.replace("/");
        };
        clearAuth();
    }, [error, router]);
    return (<UserContext value={{
            user: isSuccess ? data : null,
            isAuthenticated: isSuccess,
            setToken,
            token,
        }}>
            {children}
        </UserContext>);
}
