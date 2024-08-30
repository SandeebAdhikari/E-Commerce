import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../utils/base-url"; // Adjust the path as needed

export const qnasListApi = createApi({
  reducerPath: "qnasListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${base_url}`,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", import.meta.env.VITE_RAPIDAPI_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getQnAs: builder.query({
      query: (productId) =>
        `/qnas/list?Limit=6&Offset=0&ProductId=${productId}&Sort=SubmissionTime%3Adesc`,
    }),
  }),
});

export const { useGetQnAsQuery } = qnasListApi;
