import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SERVER_URL } from "@shared/constants";
import { queryHeaders } from "./header";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URL}/api`,
        prepareHeaders: queryHeaders,
    }),
    endpoints: () => ({}),
    tagTypes: ["Contacts", "Chats"],
});
