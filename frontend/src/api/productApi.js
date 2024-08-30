import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kohls.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "2abda6f99bmsh5f0218ccd9ded87p1de10djsn6d91164b6bf5"
      );
      headers.set("x-rapidapi-host", "kohls.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (seoURL) =>
        `/products/list?limit=24&offset=1${seoURL ? `&seoURL=${seoURL}` : ""}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
