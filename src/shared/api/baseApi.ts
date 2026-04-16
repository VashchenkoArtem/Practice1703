import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import AsyncStorage  from '@react-native-async-storage/async-storage'

export const BaseApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://192.168.0.104:3000/api",
		prepareHeaders: async (headers) => {
			const token = await AsyncStorage.getItem("token");

			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
		},
	}),
	endpoints: () => ({}),
});