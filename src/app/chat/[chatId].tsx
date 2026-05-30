import { ChatInputBlock, MessagesBlock } from "@modules/chat";
import { COLORS } from "@shared/constants";
import { useLocalSearchParams } from "expo-router";
import { KeyboardAvoidingView, Platform, View } from "react-native";
export default function Chat() {
    const { chatId } = useLocalSearchParams<{
        chatId: string;
    }>();
    return (<View style={{ flex: 1, backgroundColor: COLORS.white }}>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={100}>
				<MessagesBlock />
				<ChatInputBlock />
			</KeyboardAvoidingView>
		</View>);
}
