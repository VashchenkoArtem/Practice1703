import { Contact } from "../model";
export type GetAllContactsResponse = Contact[];
export interface GetContactWithUserPayload {
    id: number;
}
export type GetContactWithUserResponse = Contact & {
    username: string;
};
export type CreateContactResponse = Contact;
export interface CreateContactPayload {
    name: string;
    surname: string;
    avatar: string;
    contactUserId: number;
}
