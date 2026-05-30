import { CursorPaginatedResponse } from "@shared/types";
import { Chat, ChatParticipantsInfo, LastMessage, Message, } from "../model/types";
export type ChatWithParticipantInfoResponse = Chat & {
    lastMessage: LastMessage | null;
} & {
    participants: [
        ChatParticipantsInfo
    ];
};
export interface CreateChatPayload {
    contactUserId: number;
}
export type PaginatedMessagesResponse = {
    data: Message[];
    meta: CursorPaginatedResponse;
};
export interface MessagesPayload {
    chatId: number;
    cursor?: number | null;
    limit?: number;
}
