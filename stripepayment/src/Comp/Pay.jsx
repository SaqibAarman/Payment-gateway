import React, { useState } from "react";
import axios from "axios";
//import StripeCheckout from "react-stripe-checkout";
/* const KEY =
  "pk_test_51LQmgpSA6Hfft5uMD9HOzkXDn27N3TwxNQMYLCFYrTyJsEsMeWzyjXXMOewDNFf6EEj9CeSPkHSDsSHmCOIzQARq00LVEabmRF"; */

const Pay = () => {
  /* const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makePaymentRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/checkout/payments",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    stripeToken && makePaymentRequest();
  }, [stripeToken]); */

  const [product, setProduct] = useState({
    name: "The React",
    author: "John",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-0B7uQ7bLtQjsA93Q5DxfeWbGGmIcuDgkZD13GLbCKePeDpp7_PhNnCZE67IT0Zsovg&usqp=CAU",
    price: 250,
  });

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:3001/api/checkout/pay";

      const { data } = await axios.post(orderUrl, { amount: product.price });

      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const initPayment = (data) => {
    const options = {
      key: process.env.KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: product.name,
      description: "TESTING THE PAY",
      image: "https://cdn.dribbble.com/users/2060702/screenshots/4373888/logo-color.png",
      order_id: data.id,

      handler: async (res) => {
        try {
          const verifyUrl = "http://localhost:3001/api/checkout/verify";
          const { data } = await axios.post(verifyUrl, res);
          console.log(data, "VERIFY");
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#11f578",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();

    
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          border: "2px solid black",
          borderRadius: "16px",
          padding: "16px 8px",
        }}
        onClick={handlePayment}
      >
        PAY NOW
      </button>
    </div>
  );
};

export default Pay;
/* <StripeCheckout
        ame="Three Comma Co."
        description="Big Data Stuff"
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
        billingAddress
        shippingAddress
        amount={200}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "2px solid black",
            borderRadius: "16px",
            padding: "16px 8px",
          }}
        >
          PAY NOW
        </button>
      </StripeCheckout> */
