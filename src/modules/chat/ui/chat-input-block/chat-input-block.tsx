import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View } from "react-native";
import { Icons, Input } from "@shared/ui";
import { COLORS } from "@shared/constants";
import { styles } from "./chat-input-block.styles";

export function ChatInputBlock() {
    return (<SafeAreaView edges={["bottom"]} style={[styles.container]}>
			<TouchableOpacity>
				<Icons.AttachIcon width={30} height={30} fill={COLORS.black}/>
			</TouchableOpacity>
			<View style={{ flex: 1 }}>
				<Input placeholder="Type in you message..." containerStyles={styles.inputContainer} style={styles.input} multiline autoCapitalize={"sentences"}/>
			</View>
			<TouchableOpacity>
				<Icons.SendIcon width={30} height={30} fill={COLORS.black}/>
			</TouchableOpacity>
		</SafeAreaView>);
}
