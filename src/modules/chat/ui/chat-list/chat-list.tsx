import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Text, TouchableOpacity, } from "react-native";
import { IMAGE_URL } from "@shared/constants";
import { Image } from "expo-image";
import { styles } from "./chat-list.styles";
import { useChatsWithParticipantInfoQuery } from "@modules/chat/api";
import { ChatWithContactInfo } from "@modules/chat/model";
import { useRouter } from "expo-router";
import { useUserContext } from "@modules/auth";
import { socket } from "@shared/api";
function ChatItem({ item, isMyLastMessage, }: {
    item: ChatWithContactInfo;
    isMyLastMessage: boolean;
}) {
    const router = useRouter();
    console.log(item)
    const name = item.isInContact
        ? [item.participant.contactOf.contactName, item.participant.contactOf.contactSurname]
            .filter(Boolean)
            .join(" ")
        : `${item.participant.name} ${item.participant.surname}`;

    const avatar = item.isInContact
        ? item.participant.contactOf.avatar
        : item.participant.avatar;
    const lastMessage = item.lastMessage
        ? `${isMyLastMessage ? "You" : name}: ${item.lastMessage.type === "text" ? item.lastMessage.text : "Image"}`
        : "No messages yet";
    const participantId = item.isInContact
        ? item.participant.id
        : item.participant.id;
    return (<TouchableOpacity onPress={() => {
            router.push({
                pathname: "/chat/[chatId]",
                params: {
                    chatId: String(item.id),
                    localName: name,
                    avatar: avatar,
                    id: participantId,
                },
            });
        }}>
			<View style={styles.contactItem}>
				<Image contentFit={"cover"} source={IMAGE_URL + avatar} style={styles.avatar} placeholder={require("@assets/images/default-user.png")} placeholderContentFit="cover"/>
				<View style={{ flex: 1 }}>
					<Text style={styles.localName}>
						{name}
					</Text>
					<Text style={styles.lastMessage}>
						{lastMessage.length > 30
            ? lastMessage.slice(0, 30) + "..."
            : lastMessage}
					</Text>
				</View>
			</View>
		</TouchableOpacity>);
}
export function ChatList() {
    const { user } = useUserContext();
    const { data, isLoading, error, refetch } = useChatsWithParticipantInfoQuery(undefined, {
        pollingInterval: 5000,
        skipPollingIfUnfocused: true,
    });
    const [refreshing, setRefreshing] = useState<boolean>(false);
    useEffect(() => {
        const handler = () => {
            console.log("asdasdasd")
            refetch();
        };

        socket.on("newChatMessage", handler);

        return () => {
            socket.off("newChatMessage", handler);
        };
    }, [refetch]);
    if (isLoading)
        return (<View style={styles.loading}>
				<ActivityIndicator size={100}/>
			</View>);
    if (error) {
        console.log(error);
        return <Text>Error occured. Try again later</Text>;
    }
    return (<FlatList 
        keyExtractor={(item) => String(item.id)} 
        onRefresh={async () => {
            setRefreshing(true);
            const result = await refetch();
            setRefreshing(false);
        }} 
        refreshing={refreshing} 
        data={data} 
        renderItem={({ item }) => {
            return (<ChatItem item={item} isMyLastMessage={user?.id === item.lastMessage?.senderId}/>);
        }} contentContainerStyle={styles.container}/>);
}
