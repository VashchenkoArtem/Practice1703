import { baseApi } from "@shared/api";
import { CreateContactPayload, CreateContactResponse, GetAllContactsResponse, GetContactWithUserPayload, GetContactWithUserResponse, } from "./api.types";
const contactApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        contacts: build.query<GetAllContactsResponse, void>({
            query: () => ({
                url: "/contacts/",
            }),
            providesTags: ["Contacts"],
        }),
        contactWithUser: build.query<GetContactWithUserResponse, GetContactWithUserPayload>({
            query: ({ id }) => ({
                url: `/contacts/${id}`,
            }),
        }),
        createContact: build.mutation<CreateContactResponse, CreateContactPayload>({
            query: (body) => {
                const formData = new FormData();
                if (body.avatar.includes("file")) {
                    formData.append("avatar", {
                        uri: body.avatar,
                        name: `photo_${Date.now()}.jpg`,
                        type: "image/jpeg",
                    } as any);
                }
                else {
                    formData.append("avatar", body.avatar);
                }
                formData.append("contactId", String(body.contactUserId));
                formData.append("contactName", body.name);
                formData.append("contactSurname", body.surname);
                return {
                    url: "/contacts/",
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: ["Contacts"],
        }),
    }),
});
export const { useCreateContactMutation, useContactWithUserQuery, useContactsQuery, } = contactApi;
