import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import { base_url } from "../utils/base-url";

export const productDetailApi = createApi({
  reducerPath: "productDetailApi",
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
    getProductDetail: builder.query({
      query: (webID) => `/products/detail?webID=${webID}`,
    }),
  }),
});

export const { useGetProductDetailQuery } = productDetailApi;
