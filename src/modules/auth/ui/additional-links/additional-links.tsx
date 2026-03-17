import { View, Text } from "react-native";
import { styles } from "./additional-links.styles";
import { Link } from "expo-router";

export function AdditionalLinks({
	text,
	linkText,
	linkTo
}: {
	text: string;
	linkText: string;
	linkTo: string
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<Link href={linkTo}>
				<Text style={styles.linkText}>{linkText}</Text>
			</Link>
		</View>
	);
}
