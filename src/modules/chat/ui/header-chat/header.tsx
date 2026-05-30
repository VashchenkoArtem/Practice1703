import { COLORS, IMAGE_URL } from "@shared/constants";
import { Header, Icons } from "@shared/ui";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";
import { Image } from "expo-image";
import { styles } from "./header.styles";
export function HeaderChat() {
    const router = useRouter();
    const { localName, avatar } = useLocalSearchParams<{
        id: string;
        localName: string;
        avatar: string;
    }>();
    return (<Header headerBottom={<View style={styles.header}>
					<TouchableOpacity style={styles.backBlock} onPress={() => {
                if (router.canGoBack()) {
                    router.back();
                }
            }}>
						<Icons.BackIcon width={24} height={24} fill={COLORS.brownPrimary}/>
						<Text style={styles.backText}>Back</Text>
					</TouchableOpacity>
					<View style={styles.userInfoBlock}>
						<Text style={styles.userName}>{localName}</Text>
					</View>
					<Image source={IMAGE_URL + avatar} contentFit="cover" style={styles.avatar}/>
				</View>}/>);
}
