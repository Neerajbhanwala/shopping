import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Sale from "./Pages/Sale";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import ScrollTop from "./Pages/ScrollTop";
import SingleProduct from "./Pages/SingleProduct";
import CartPage from "./Pages/Cart/CartPage";
import CartProvider from './ContextApi/CartProvider';
import FormContextProvider from './ContextApi/ContextApi';
import Products from "./Pages/Products";
import Shipping from "./Pages/Shipping";

function App() {
  return (
    <>
        <CartProvider>
      <FormContextProvider> 
      <BrowserRouter>
      <ScrollTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/cart" element={ <CartPage /> }></Route>
          <Route path="/shipping" element={ <Shipping /> }></Route>
          <Route path="/singleproduct" element={  <SingleProduct/> } />
        </Routes>
      </BrowserRouter>
      </FormContextProvider>
    </CartProvider>
    </>
  );
}

export default App;
