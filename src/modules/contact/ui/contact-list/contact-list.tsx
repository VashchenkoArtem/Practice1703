import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, } from "react-native";
import { Contact } from "@modules/contact/model";
import { styles } from "./contact-list.styles";
import { Image } from "expo-image";
import { IMAGE_URL } from "@shared/constants";
import { useContactsQuery } from "@modules/contact/api";
import { useState } from "react";
export function ContactItem({ item }: {
    item: Contact;
}) {
    return (<TouchableOpacity onPress={() => {
            console.log("Touched");
        }}>
			<View style={styles.contactItem}>
				<Image contentFit={"cover"} source={IMAGE_URL + item.avatar} style={styles.avatar} placeholder={require("@assets/images/default-user.png")} placeholderContentFit="cover"/>
				<Text style={styles.localName}>
					{item.contactName} {item.contactSurname}
				</Text>
			</View>
		</TouchableOpacity>);
}
export function ContactList() {
    const { data, isLoading, error, refetch } = useContactsQuery();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    if (isLoading)
        return (<View style={styles.loading}>
				<ActivityIndicator size={100}/>
			</View>);
    if (error) {
        console.log(error);
        return <Text>Error occured. Try again later</Text>;
    }
    return (<FlatList keyExtractor={(item) => String(item.id)} onRefresh={async () => {
            setRefreshing(true);
            const result = await refetch();
            setRefreshing(false);
        }} refreshing={refreshing} data={data} renderItem={({ item }) => <ContactItem item={item}/>} contentContainerStyle={styles.container}/>);
}
