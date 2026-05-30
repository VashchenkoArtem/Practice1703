import { View, Text } from "react-native";
import { HeaderProps } from "./header.types";
import { styles } from "./header.styles";
import { SafeAreaView } from "react-native-safe-area-context";
export function Header(props: HeaderProps) {
    const { headerBottom, headerLeft, headerRight, title } = props;
    return (<SafeAreaView style={styles.container} edges={["top"]}>
			<View style={styles.headerTop}>
				
				{headerLeft && <View>{headerLeft}</View>}
				{title && <Text style={styles.title}>{title}</Text>}
				{headerRight && <View>{headerRight}</View>}
			</View>
			{headerBottom && <View>{headerBottom}</View>}
		</SafeAreaView>);
}
