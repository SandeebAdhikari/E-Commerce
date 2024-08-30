import { configureStore, createReducer } from "@reduxjs/toolkit";
import { autoCompleteApi } from "../api/autoComplete";
import { categoryApi } from "../api/categoryApi";
import { productApi } from "../api/productApi";
import { productDetailApi } from "../api/productDetailApi";
import { productSearchApi } from "../api/productSearchBarcode";
import { qnasListApi } from "../api/qnasList";
import { reviewListApi } from "../api/reviewList";
import { storeListApi } from "../api/storeList";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [autoCompleteApi.reducerPath]: autoCompleteApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    [productSearchApi.reducerPath]: productSearchApi.reducer,
    [qnasListApi.reducerPath]: qnasListApi.reducer,
    [reviewListApi.reducerPath]: reviewListApi.reducer,
    [storeListApi.reducerPath]: storeListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      autoCompleteApi.middleware,
      categoryApi.middleware,
      productApi.middleware,
      productDetailApi.middleware,
      productSearchApi.middleware,
      qnasListApi.middleware,
      reviewListApi.middleware,
      storeListApi.middleware
    ),
});

setupListeners(store.dispatch);
