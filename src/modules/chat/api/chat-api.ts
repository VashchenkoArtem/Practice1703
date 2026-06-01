import { baseApi } from "@shared/api";
import { ChatWithImagePayload, ChatWithParticipantInfoResponse, CreateChatPayload, } from "./api.types";
import { Chat, ChatWithContactInfo, Message } from "../model";

const chatApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createChat: build.mutation<Chat, CreateChatPayload>({
            query: (body) => ({
                url: "/chats/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Chats"],
        }),
        chatsWithParticipantInfo: build.query<ChatWithContactInfo[], void>({
            query: () => ({
                url: "/chats/participants",
            }),
            providesTags: ["Chats"]
        }),
        createMessageWithImage: build.mutation<Message, ChatWithImagePayload>({
            query: (body) => {
                const formData = new FormData
                formData.append("image", {
                    uri: body.req.mediaUrl,
                    name: "image.jpg",
                    type: "image/jpeg",
                } as unknown as Blob)
                formData.append("type", body.req.type)
                return {
                    url: `/messages/chats/${body.params.chatId}`,
                    method: "POST",
                    body: formData
                }
            },
            invalidatesTags: ["Chats"]
        }),
    }),
    overrideExisting: true
});
export const { 
    useChatsWithParticipantInfoQuery, 
    useCreateChatMutation,
    useCreateMessageWithImageMutation
} = chatApi;
