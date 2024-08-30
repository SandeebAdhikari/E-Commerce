import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToWishlist: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeItemFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    moveToCart: (state, action) => {
      // Logic to move item to cart will be handled in the component
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist, moveToCart } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
