import { ActivityIndicator, FlatList, Text, View, Image } from "react-native";
import { styles } from "./messages-block.styles";
import { useGetMessagesQuery } from "@modules/chat/api";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useUserContext } from "@modules/auth";
import { IMAGE_URL } from "@shared/constants";
function Message({ text, isMyMessage, image }: {
    image: string | null;
    text: string;
    isMyMessage: boolean;
}) {
    return (<View style={[
            styles.messageContainer,
            isMyMessage ? styles.myMessage : styles.otherMessage,
        ]}>
			<Text style={styles.message}>{text}</Text>
            { image && (
                <Image
                    source={{
                        uri: IMAGE_URL + image
                    }}
                    width={300}
                    height={350}
                />
            )}
		</View>);
}
export function MessagesBlock() {
    const { user } = useUserContext();
    const { chatId } = useLocalSearchParams<{
        chatId: string;
    }>();
    const [cursor, setCursor] = useState<number | null>(null);
    const { data, isLoading, isFetching } = useGetMessagesQuery({
        chatId: Number(chatId),
        cursor,
    }, {
        refetchOnFocus: true,
    });
    if (isLoading)
        return (<View style={styles.loading}>
				<ActivityIndicator size={100}/>
			</View>);
    const messages = data?.data ?? [];
    if (messages.length === 0) {
        return (<View style={styles.noMessagesContainer}>
				<View style={styles.noMessagesBlock}>
					<Text numberOfLines={3} style={styles.noMessagesText}>
						Start chatttng by sending first message!
					</Text>
				</View>
			</View>);
    }
    const handleLoadMore = () => {
        if (!isFetching && data?.meta.hasMore && data.meta.nextCursor) {
            setCursor(data.meta.nextCursor);
        }
    };
    return (<FlatList data={messages} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => (<Message text={item.text || "No text"} isMyMessage={item.senderId === user?.id} image = {item.mediaUrl}/>)} contentContainerStyle={styles.list} inverted onEndReached={handleLoadMore} onEndReachedThreshold={0.1}/>);
}
