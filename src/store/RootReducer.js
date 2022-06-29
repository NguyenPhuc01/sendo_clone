import { combineReducers } from "@reduxjs/toolkit";
import { checkOutReducer } from "../features/checkOut/CheckOutSlice";

import { loginReducer } from "../features/login/LoginFormSlice";
import { orderReducer } from "../features/order/OrderSlice";
import { productReducer } from "../features/product/ProductSlice";

const rootReducer = combineReducers({
  signin: loginReducer,
  products: productReducer,
  checkOut: checkOutReducer,
  orders: orderReducer,
});

export default rootReducer;
