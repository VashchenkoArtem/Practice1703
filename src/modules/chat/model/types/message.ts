export interface Message {
    id: number;
    type: "text" | "media";
    text: string | null;
    mediaUrl: string | null;
    chatAsLastMessageId: number;
    createdAt: Date;
    updatedAt: Date;
    senderId: number;
    chatId: number;
}
