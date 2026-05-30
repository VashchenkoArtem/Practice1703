import { Header, Icons, Images, Input } from "@shared/ui";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./header.styles";
import { COLORS } from "@shared/constants";
import { useRouter } from "expo-router";
export function HeaderChats() {
    const router = useRouter();
    return (<Header title="Chats" headerLeft={<View>
					<Images.LogoImage style={styles.logo}/>
				</View>} headerRight={<TouchableOpacity onPress={() => {
                router.push("/create-chat");
            }}>
					<Icons.PlusIcon width={40} height={40} fill={COLORS.black}/>
				</TouchableOpacity>} headerBottom={<View style={styles.inputBlock}>
					<Input placeholder="Search" containerStyles={styles.inputContainer} style={styles.input} autoCorrect={false} autoComplete={"off"} iconLeft={<Icons.SearchIcon width={24} height={24} fill={COLORS.black}/>}/>
				</View>}/>);
}
