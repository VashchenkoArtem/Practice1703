import { Message } from "@modules/chat/model";
interface SendMessagePayload {
    type: "text" | "image";
    mediaUrl?: string;
    text?: string;
    chatId: number;
}
interface JoinChatPayload {
    chatId: number;
}
interface LeaveChatPayload {
    chatId: number;
}
type JoinChatCallback = (response: {
    status: "ok";
} | {
    status: "error";
    message?: string;
}) => void;
export interface ClientEvents {
    sendMessage: (data: SendMessagePayload) => void;
    joinChat: (data: JoinChatPayload, ack: JoinChatCallback) => void;
    leaveChat(data: LeaveChatPayload): void;
}
export interface ServerEvents {
    newChatMessage: (data: Message) => void;
}
