import React from "react";
import { Redirect } from "expo-router";
import { useUserContext } from "@modules/auth/context/user";
export default function Index() {
    const { isAuthenticated } = useUserContext();
    return (<Redirect href={isAuthenticated ? "/chats" : "/login"}/>);
}
