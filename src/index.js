import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

import DetailProduct from "./pages/Detail/DetailProduct";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "react-use-cart";
import InforUser from "./pages/InforUser/InforUser";
import CheckOut from "./pages/CheckOut/CheckOut";
import Thank from "./pages/Thank/Thank";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Order from "./pages/purchaseOrder/Order";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CartProvider>
      <React.StrictMode>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/InforUser" element={<InforUser />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Thank" element={<Thank />} />
            <Route path="/product/:id" element={<DetailProduct />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </CartProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
