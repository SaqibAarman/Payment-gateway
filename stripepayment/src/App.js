import logo from "./logo.svg";
import "./App.css";
import Pay from "./Comp/Pay";
import Success from "./Comp/Success";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={<Pay />} />

        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* 
import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
const KEY =
  "pk_test_51LQmgpSA6Hfft5uMD9HOzkXDn27N3TwxNQMYLCFYrTyJsEsMeWzyjXXMOewDNFf6EEj9CeSPkHSDsSHmCOIzQARq00LVEabmRF";
const [product, setProduct] = useState({
    name: "React From FB",
    price: 10,
    productBy: "FaceBook",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:3001/api/checkout/pay`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((result) => {
        console.log(result, "RESULT");
        const { status } = result;
        console.log(status, "STATUS");
      })
      .catch((err) => {
        console.log(err);
      });
  };
    <>
      <div>
        <StripeCheckout
          stripeKey={KEY}
          token={makePayment}
          name="Buy React"
          amount={product.price * 100}
          shippingAddress
        >
          <button>Pay Now</button>
        </StripeCheckout>
      </div>
    </>
    
    */
