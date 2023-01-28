import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import productListSlice from "./productsList/productListSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    productList: productListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
