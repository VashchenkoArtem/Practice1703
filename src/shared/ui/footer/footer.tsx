import { Link } from "expo-router";
import { View, Text } from "react-native";

export function Footer(){
    return (
        <View>
            <Link href = "/(tabs)/settings">
                <Text>Налаштування</Text>
            </Link>
        </View>
    )
}