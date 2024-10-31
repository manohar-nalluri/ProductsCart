import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import wishListReducer from "../features/wishlist/wishListSlice";
export const makeStore=()=>
  configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer,
      auth: authReducer,
      wishlist:wishListReducer
    },
  })

