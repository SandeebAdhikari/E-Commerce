import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../utils/base-url"; // Adjust the path as needed

export const storeListApi = createApi({
  reducerPath: "kohlsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", process.env.REACT_APP_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", process.env.REACT_APP_RAPIDAPI_HOST);
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
