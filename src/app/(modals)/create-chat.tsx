import { ChatCreateList } from "@modules/chat";
import { View } from "react-native";
export default function CreateChatModal() {
    return (<View style={{ flex: 1 }}>
			<ChatCreateList />
		</View>);
}
