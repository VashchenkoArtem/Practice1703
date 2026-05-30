import { ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View, } from "react-native";
import { Contact } from "@modules/contact/model";
import { Image } from "expo-image";
import { IMAGE_URL } from "@shared/constants";
import { styles } from "./chat-create-list.styles";
import { useContactsQuery } from "@modules/chat/@x";
import { useCreateChatMutation } from "@modules/chat/api";
import { useRouter } from "expo-router";
function ChatCreateItem({ item }: {
    item: Contact;
}) {
    const [createChat] = useCreateChatMutation();
    const router = useRouter();
    return (<TouchableOpacity onPress={async () => {
            try {
                await createChat({
                    contactUserId: item.contactUserId,
                }).unwrap();
                router.dismiss();
            }
            catch (error) {
                console.log(error);
                let message = "Unhandled error. Try again";
                if (error &&
                    typeof error === "object" &&
                    "status" in error) {
                    switch (error.status) {
                        case 409:
                            message =
                                "Chat with this person already exists!";
                            break;
                        case 500:
                            message = "Server error. Try again later";
                            break;
                    }
                }
                Alert.alert(message);
            }
        }}>
			<View style={styles.contactItem}>
				<Image contentFit={"cover"} source={IMAGE_URL + item.avatar} style={styles.avatar} placeholder={require("@assets/images/default-user.png")} placeholderContentFit="cover"/>
				<Text style={styles.localName}>
					{item.contactName} {item.contactSurname}
				</Text>
			</View>
		</TouchableOpacity>);
}
export function ChatCreateList() {
    const { data, isLoading, error } = useContactsQuery();
    if (isLoading)
        return (<View style={styles.loading}>
				<ActivityIndicator size={100}/>
			</View>);
    if (error) {
        console.log(error);
        return <Text>Error occured. Try again later</Text>;
    }
    return (<FlatList keyExtractor={(item) => String(item.id)} data={data} renderItem={({ item }) => <ChatCreateItem item={item}/>} contentContainerStyle={styles.container}/>);
}
