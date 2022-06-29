import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../Service/orderService";
import { getOrderProduct } from "../../api/orderProduct";
export const orderProduct = createAsyncThunk(
  "order/getOrderProduct",
  async () => {
    if (auth.isAuthenticated()) {
      const token = auth.getToken();
      const user = await getOrderProduct({ token });

      return { token, user };
    }
    return { token: null, user: null };
  }
);
// export const orderProduct = createAsyncThunk(
//   "order/getOrderProduct",
//   async (pages) => {
//     const result = await serviceCallApi(`http://khanh.tokyo/api/order`, "GET");
//     return result;
//   }
// );
const initialState = {
  data: [],
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [orderProduct.pending]: startLoading,
    [orderProduct.fulfilled]: (state, { payload }) => {
      const data = payload;
      //   // console.log('data produc',{payload});
      Object.assign(state, {
        // loading: false,
        data: data.data,
      });
      state.data = payload;
      console.log({ payload });
    },
    [orderProduct.rejected]: receiveError,
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

export const selectOrder = (state) => state.orders;

export const orderReducer = orderSlice.reducer;
