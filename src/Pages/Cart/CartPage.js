import React, { useContext, useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../ContextApi/CartProvider";
import Header from "../Header";
import Footer from "../Footer";

import moment from "moment";
import Swal from "sweetalert2";
import { backdropClasses } from "@mui/material";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const date = new Date();
  const futureDate = moment(date).add(5, "days").format("DD-MM-YYYY");
  const { cart, setCart } = useContext(CartContext);

  const clearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire("Deleted!", "Your Cart has been cleared.", "success");
      }
    });
  };

  console.log("cart : ", cart);

  useEffect(() => {
    if (cart) {
      setTotalPrice(
        cart.reduce((acc, item) => acc + item.salePrice * item.quantity, 0)
      );
      setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
    }
  }, [cart]);

  return (
    <>
      <Header />

      {cart && cart.length > 0 ? (
        <div className=" d-flex justify-content-center w-100  p-4">
          <div
            className=" d-flex justify-content-center w-100 "
            style={{ overflow: "hidden" }}
          >
            <div
              className=" d-flex align-items-center p-3 text-dark bg-white flex-direction-column w-100 me-4"
              style={{ flexDirection: "column" }}
            >
              <div
                className=" w-100 d-flex border-bottom justify-content-center "
                style={{ height: "50px" }}
              >
                <h3 className="w-100">Shopping Cart</h3>
                <hr />
                <hr />
                {/* <h5 className="w-25 text-center">{quantity} Items</h5> */}
              </div>

              {/* one product start here */}

              {cart.map((item, index) => {
                console.log("item : ", item?.quantity);
                return (
                  <div className=" w-100" key={index}>
                    <CartItem
                      title={item?.title}
                      price={`${item?.salePrice}`}
                      image={item?.artImage}
                      id={item?.id}
                      description={item?.description}
                      quantity={item?.quantity}
                    />
                  </div>
                );
              })}

              <br />
              {/* one product end here */}
              <br />
{/* 
              <button
                className="btn w-100 btn-danger btn-lg"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button> */}

            </div>


{/* right div */}


            <div
              className="  d-flex p-4  w-25"
              style={{ backgroundColor: "#fff", height:'500px', flexDirection: "column" }}
            >

              <p style={{ fontSize: "14px", color: "green" }}>
                <img
                  src="data:image/png;base64,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"
                  alt="sd"
                  width="20px"
                />
                Your order is eligible for FREE Delivery. Select this option at
                checkout. Details.
              </p>

              <h6 style={{ fontSize: "19px" }}>
                Subtotal ({quantity} Items): ₹4,486.00
              </h6>
              <div>
                <input type="checkbox" /> This order contains a gift.
              </div>
              <br />

              <NavLink to="/shipping">
                <button
                  className="btn w-100 btn-lg"
                  style={{ fontWeight: "bold", backgroundColor: "#f49d2d" }}
                >
                  {" "}
                  Proceed to Buy{" "}
                </button>
              </NavLink>

              {/* <div class="d-flex w-100 justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">${totalPrice}</p>
                    </div>

                    <div class="d-flex w-100 justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">$20.00</p>
                    </div>

                    <div class="d-flex w-100 justify-content-between">
                      <p class="mb-2">Total (Incl. taxes)</p>
                      <p class="mb-2">${totalPrice+20}</p>
                    </div>
                    <br />
                    */}

              <div
                className=" w-100 d-flex pt-5 align-items-center"
                style={{ height: "auto" }}
              >
                <div class="card-body">
                  <h5>
                    <strong>Expected shipping delivery</strong>
                  </h5>
                  <p class="mb-0">
                    {moment(date).format("DD-MM-YYYY")} - {futureDate}{" "}
                    <sup> ( 5 days )</sup>{" "}
                  </p>
                  <br />
                  <h6>We Accept</h6>
                  <img
                    class="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    class="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    class="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    class="me-2"
                    width="45px"
                    src="https://img.freepik.com/free-icon/paypal_318-674245.jpg"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <img
            src="https://skoozo.com/assets/img/empty-cart.png"
            className="ps-5"
            width="850"
            alt=""
          />
          <div className="btn w-25 btn-lg" style={{background:'#fdb960'}}>
            <Link className="text-dark" to="/products">
              <h5>
                <i class="fa fa-angle-double-left" aria-hidden="true"></i> Back
                to Shop
              </h5>
            </Link>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default CartPage;
