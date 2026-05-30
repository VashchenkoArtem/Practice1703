import { Chat } from "./chat";
import { LastMessage } from "./last-message";
export interface ChatParticipantsInfo {
    id: number;
    userId: number;
    chatId: number;
    user: ChatUserInfo & {
        contactOf: [
            {
                id: number;
                avatar: string;
                contactName: string;
                contactSurname?: string;
                addedAt: Date;
            }
        ] | [
        ];
    };
}
export interface ChatUserInfo {
    name: string;
    id: number;
    surname: string;
    avatar: string;
}
export type ChatWithContactInfo = Chat & {
    lastMessage: LastMessage | null;
} & (({
    participant: ChatUserInfo & {
        contactOf: {
            id: number;
            avatar: string;
            contactName: string;
            contactSurname?: string;
            addedAt: Date;
        };
    };
} & {
    isInContact: true;
}) | ({
    participant: ChatUserInfo;
} & {
    isInContact: false;
}));
