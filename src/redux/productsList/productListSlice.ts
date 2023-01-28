import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../@types/types";

export interface ProductCard {
  id: number;
  amount: number;
  product: Product;
}

const initialState: ProductCard[] = [];

export const productsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    addProduct: (state: ProductCard[], action: PayloadAction<ProductCard>) => {
      const productAux = state.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (productAux) {
        productAux.amount += 1;
      } else {
        state.push(action.payload);
      }
    },
    removeProduct: (
      state: ProductCard[],
      action: PayloadAction<ProductCard>
    ) => {
      state.splice(state.indexOf(action.payload), 1);
    },

    incrementAmount: (
      state: ProductCard[],
      action: PayloadAction<ProductCard>
    ) => {
      const productAux = state.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (productAux) {
        productAux.amount += 1;
      }
    },
    decrementAmount: (
      state: ProductCard[],
      action: PayloadAction<ProductCard>
    ) => {
      const productAux = state.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (productAux) {
        productAux.amount -= 1;
      }
    },
  },
});

export const { addProduct, removeProduct, incrementAmount, decrementAmount } =
  productsListSlice.actions;
export default productsListSlice.reducer;
