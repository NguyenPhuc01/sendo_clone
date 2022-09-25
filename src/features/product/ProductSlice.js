import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { products } from "../../Service/productService";
import serviceCallApi from "../../Service/serviceApi";

export const getListProduct = createAsyncThunk(
  "product/getAll",
  async (pages) => {
    const result = await serviceCallApi(
      `products`,
      "GET"
    );
    return result;
  }
);

const initialState = {
  loading: false,
  error: null,
  data: {},
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getListProduct.pending]: startLoading,
    [getListProduct.fulfilled]: (state, { payload }) => {
      const { data } = payload;
        // console.log('data produc',{payload});
      Object.assign(state, {
        // loading: false,
        data: data.data,
      });
    },
    [getListProduct.rejected]: receiveError,
  },
});
function startLoading(state) {
  Object.assign(state, {
    loading: true,
    error: null,
  });
}

function receiveError(state, action) {
  Object.assign(state, {
    loading: false,
    error: action.error,
  });
}

export const selectProduct = (state) => state.products;

export const productReducer = productSlice.reducer;
