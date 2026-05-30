import { baseApi } from "@shared/api";
import { ChatWithParticipantInfoResponse, CreateChatPayload, } from "./api.types";
import { Chat, ChatWithContactInfo } from "../model";
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
        }),
    }),
});
export const { useChatsWithParticipantInfoQuery, useCreateChatMutation } = chatApi;
