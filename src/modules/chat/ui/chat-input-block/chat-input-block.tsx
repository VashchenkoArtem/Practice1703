import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View } from "react-native";
import { Icons, Input } from "@shared/ui";
import { COLORS } from "@shared/constants";
import { styles } from "./chat-input-block.styles";
import { useState } from "react";
import { socket } from "@shared/api";
import { useLocalSearchParams } from "expo-router";
import { pickImage } from "@shared/tools";
import { useCreateMessageWithImageMutation } from "@modules/chat/api";

export function ChatInputBlock() {
	const [message, setMessage] = useState<string>("")
	const { chatId } = useLocalSearchParams<{
		chatId: string;
	}>();
	const [ createMessageWithImage ] = useCreateMessageWithImageMutation()
	const handlePickImage = async () => {
		const result = await pickImage({
			mediaTypes: ["images"],
			quality: 0.8,
		});

		if ("status" in result) {
			return;
		}

		if (result.canceled) {
			return;
		}

		const image = result.assets[0];

		const res = await createMessageWithImage({
			req: {
				mediaUrl: image.uri,
				type: "media"
			},
			params: {
				chatId: Number(chatId)
			}

		}).unwrap()
			socket.emit("sendMessage", {
				type: "media",
				text: res.text,
				mediaUrl: res.mediaUrl,
				chatId: res.chatId
			});

	};
    return (<SafeAreaView edges={["bottom"]} style={[styles.container]}>
			<TouchableOpacity onPress={handlePickImage}>
				<Icons.AttachIcon width={30} height={30} fill={COLORS.black}/>
			</TouchableOpacity>
			<View style={{ flex: 1 }} >
				<Input 
					value={message}
					placeholder="Type in you message..." 
					containerStyles={styles.inputContainer} 
					style={styles.input} 
					multiline autoCapitalize={"sentences"}				
					onChangeText={setMessage} 
				/>
			</View>
			<TouchableOpacity 
				onPress={() => {
					socket.emit(
						"sendMessage", 
						{
							type: 'text',
							text: message,
							mediaUrl: null,
							chatId: Number(chatId)
						}
					)
				}}	 
			>
				<Icons.SendIcon width={30} height={30} fill={COLORS.black}/>
			</TouchableOpacity>
		</SafeAreaView>);
}
