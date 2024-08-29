import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../utils/base-url"; // Adjust the path as needed

export const qnasListApi = createApi({
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
    getQnAs: builder.query({
      query: (productId) =>
        `/qnas/list?Limit=6&Offset=0&ProductId=${productId}&Sort=SubmissionTime%3Adesc`,
    }),
  }),
});

export const { useGetQnAsQuery } = qnasListApi;
