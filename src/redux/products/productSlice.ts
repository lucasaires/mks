import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../@types/types";
import { api } from "../../service/api";

interface ProductResponse {
  products: Product[];
  count: number;
}

//action

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (data, thunkApi) => {
    try {
      const response = await api.get<ProductResponse>("/products/", {
        params: { page: 1, rows: 8, sortBy: "id", orderBy: "ASC" },
      });
      return response.data.products;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface ProductsState {
  loading: boolean;
  error: null | string;
  data: null | Product[];
}

//slice
const initialState = {
  loading: false,
  error: null,
  data: null,
} as ProductsState;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
        state.data = [];
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
