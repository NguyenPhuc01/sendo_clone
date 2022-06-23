import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../api/useApi";
import { auth } from "../../Service/authService";
// import token from "surge/lib/middleware/token";
// import { products } from "../../Service/productService";
import serviceCallApi from "../../Service/serviceApi";
const infor = localStorage.getItem("userData");
const nameInfor = JSON.parse(infor);
export const checkAuth = createAsyncThunk("signing/checkAuth", async () => {
  if (auth.isAuthenticated()) {
    const token = auth.getToken();
    const user = await getCurrentUser({ token });
    return { token, user };
  }

  return { token: null, user: null };
});
export const checkOut = createAsyncThunk(
  "checkOut/check",
  async (orderProduct) => {
    const result = await serviceCallApi(
      "order",
      "POST",
      orderProduct,
      null,
      nameInfor.token
    );
    return result;
  }
);

const initialState = {
  //   loading: false,
  //   error: null,
  //   data: {},
  loggedInUser: null,

  token: null,
  user: null,
};
export const checkOutSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [checkAuth.fulfilled]: (state, { payload }) => {
      const { token = null, user = null } = payload;
      //   console.log("🚀 ~ file: CheckOutSlice.js ~ line 44 ~ payload", payload);

      Object.assign(state, {
        // loading: false,
        // error: null,
        // loggedIn: !!token,
        token,
        user,
      });
    },

    [checkOut.pending]: startLoading,
    [checkOut.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      console.log({ payload });
      //   Object.assign(state, {
      //     data: data.data,
      //   });
    },
    [checkOut.rejected]: receiveError,
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

export const selectCheckOut = (state) => state.checkOut;

export const checkOutReducer = checkOutSlice.reducer;
