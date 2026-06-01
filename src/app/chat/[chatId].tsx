import { ChatInputBlock, MessagesBlock } from "@modules/chat";
import { socket } from "@shared/api";
import { COLORS } from "@shared/constants";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
export default function Chat() {
    const { chatId } = useLocalSearchParams<{
        chatId: string;
    }>();
	useEffect(() => {
		socket.emit("joinChat", { chatId: Number(chatId) }, (res) => {});

		return () => {
			socket.emit("leaveChat", {chatId:Number(chatId)})
		}
	},[])
    return (<View style={{ flex: 1, backgroundColor: COLORS.white }}>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={100}>
				<MessagesBlock />
				<ChatInputBlock />
			</KeyboardAvoidingView>
		</View>);
}
