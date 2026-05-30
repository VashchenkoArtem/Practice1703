import { UserContextProvider } from '@modules/auth/context';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { baseApi } from '@shared/api';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <ApiProvider api={baseApi}>
                <UserContextProvider>
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='index'/>
                        <Stack.Screen name='(auth)'/>
                        <Stack.Screen name='(tabs)'/>
                        <Stack.Screen name='chat'/>
                        <Stack.Screen name='(modals)' options={{ presentation: "modal" }}/>
                    </Stack>
                </UserContextProvider>
            </ApiProvider>
        </SafeAreaProvider>
    );
}
