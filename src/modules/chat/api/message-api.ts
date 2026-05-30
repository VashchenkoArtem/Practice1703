import { baseApi, socket } from "@shared/api";
import { MessagesPayload, PaginatedMessagesResponse } from "./api.types";
import { Message } from "../model";
const messageApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMessages: build.query<PaginatedMessagesResponse, MessagesPayload>({
            query: ({ chatId, cursor, limit = 20 }) => {
                const params = new URLSearchParams({ limit: String(limit) });
                if (cursor) {
                    params.set("cursor", String(cursor));
                }
                return {
                    url: `/messages/chat/${chatId}?${params.toString()}`,
                };
            },
            async onCacheEntryAdded({ chatId }, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                await cacheDataLoaded;
                const handleNewMessage = (newMessage: Message) => {
                    if (newMessage.chatId === chatId) {
                        updateCachedData((draft) => {
                            draft.data.unshift(newMessage);
                        });
                    }
                };
                socket.on("newChatMessage", handleNewMessage);
                await cacheEntryRemoved;
                socket.off("newChatMessage", handleNewMessage);
            },
            serializeQueryArgs: ({ queryArgs }) => {
                return queryArgs.chatId;
            },
            merge: (currentCache, newItems) => {
                const existingIds = new Set(currentCache.data.map((message) => message.id));
                const uniqueNewMessages = newItems.data.filter((message) => !existingIds.has(message.id));
                if (uniqueNewMessages.length > 0) {
                    currentCache.data.push(...uniqueNewMessages);
                }
                currentCache.meta = newItems.meta;
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg?.chatId !== previousArg?.chatId || currentArg?.cursor !== previousArg?.cursor;
            },
            keepUnusedDataFor: 0,
        }),
    }),
    overrideExisting: true,
});
export const { useGetMessagesQuery } = messageApi;
