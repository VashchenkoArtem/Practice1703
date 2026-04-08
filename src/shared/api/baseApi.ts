import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BaseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://192.168.0.105:3000/api"}),
    endpoints: () => ({})
})