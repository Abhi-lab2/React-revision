import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import { HomePage } from "../Pages/HomePage";
import Login from "../Pages/Login";
import { Orders } from "../Pages/Orders";
import { Product } from "../Pages/Product";
import { Products } from "../Pages/Products";
import AuthWrapper from "./AuthWrapper";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/cart" element={<AuthWrapper><Cart /></AuthWrapper>  }></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
