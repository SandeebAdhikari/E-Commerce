import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../utils/base-url"; // Adjust the path as needed

export const storeListApi = createApi({
  reducerPath: "storeListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${base_url}`,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", import.meta.env.VITE_RAPIDAPI_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStores: builder.query({
      query: ({ latitude, longitude, radius }) =>
        `/stores/list?latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
    }),
  }),
});

export const { useGetStoresQuery } = storeListApi;
