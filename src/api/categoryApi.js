import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../utils/base-url";

export const categoriesApi = createApi({
  reducerPath: "kohlsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${base_url}`,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", process.env.REACT_APP_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", process.env.REACT_APP_RAPIDAPI_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories/list",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
