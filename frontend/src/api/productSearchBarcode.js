import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../utils/base-url"; // Adjust the path as needed

export const productSearchApi = createApi({
  reducerPath: "productSearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${base_url}`,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", import.meta.env.VITE_RAPIDAPI_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchByBarcode: builder.query({
      query: (upc) => `/products/search-by-barcode?upc=${upc}`,
    }),
  }),
});

export const { useSearchByBarcodeQuery } = productSearchApi;
