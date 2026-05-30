import { ContactList } from "@modules/contact";
import { View } from "react-native";
export default function Contacts() {
    return (<View style={{ flex: 1 }}>
			<ContactList />
		</View>);
}
