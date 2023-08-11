import React, { useState } from "react";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import { GrFormClose } from "react-icons/gr";
import "../Styles/Shipping.css";
import Swal from "sweetalert2";

function Shipping() {
  const [detail, setDetail] = useState(true);
  const [showAddress, setShowAddress] = useState(false);
  const [country, setCountry] = useState();
  const [mobile, setMobile] = useState();
  const [name, setName] = useState();
  const [pin, setPin] = useState();
  const [landmark, setLandmark] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [addressView, setAddressView] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [paymentPlus, setPaymentPlus] = useState(false);
  const [orderConfirm, setOrderConfirm] = useState(false);

  function addressProceed() {
    setPaymentOption(true);
  }

  function getLocation() {
    fetch(
      "https://geolocation-db.com/json/a5f3c240-7310-11ed-8abc-5520d31fdee7"
    )
      .then((response) => response.json())
      .then((data) => setDetail(data));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Done",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  function addressHandle() {
    setAddressView(true);
    setShowAddress(false);
  }

  function confirmedOrder () {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Order Confirmed',
      showConfirmButton: false,
      timer: 1500
    })
    
  }

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const months = [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];

  return (
    <>
      <Header />
      {showPayment ? (
        <div className="main-popup-payment">
          <div className="mid-box-payment">
            <div className="header-payment d-flex align-items-center ps-4">
              <span>Enter card details</span>
              <span
                style={{
                  marginLeft: "60%",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() => setShowPayment(false)}
              >
                <GrFormClose />
              </span>
            </div>

            <div className="w-100 d-flex justify-content-center align-items-center p-3 flex-column">
              <div className="m-3">
                <label className="me-4"> Card Number: </label>
                <input type="text" />
              </div>

              <div className="m-3">
                <label className="me-5"> Card Name: </label>
                <input type="text" />
              </div>

              <div className="m-3">
                <label className="me-5"> CVV Number: </label>
                <input type="text" maxLength="3" />
              </div>

              <div className="m-3">
                <label className="me-5"> Expiry Date: </label>
                <select className="me-5 p-1">
                  <option selected disabled style={{ display: "none" }}>
                    Month
                  </option>
                  {days.map((number) => (
                    <option>{number}</option>
                  ))}
                </select>
                <select className="p-2">
                  <option selected disabled style={{ display: "none" }}>
                    Year
                  </option>
                  {months.map((numbers) => (
                    <option>{numbers}</option>
                  ))}
                </select>
              </div>
              <button
                className="rounded w-75 btn p-2 btn-md"
                style={{
                  background: "#ffd814",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showAddress
        ? detail && (
            <div className="main-popup-address">
              <div className="mid-box-address">
                <div className="header-address d-flex align-items-center ps-4">
                  <span>Enter a new delivery address</span>
                  <span
                    style={{
                      marginLeft: "60%",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowAddress(false)}
                  >
                    <GrFormClose />
                  </span>
                </div>

                <div className="d-flex header-body-address justify-content-center flex-column">
                  <h3>Add a new address.</h3>
                  <div
                    className="d-flex justify-content-around align-items-center w-100 rounded text-dark"
                    style={{ background: "skyblue", height: "70px" }}
                  >
                    <h6> Save time auto fill your current location.</h6>
                    <button
                      className=" p-2 font-weight-bold rounded-3"
                      style={{
                        background: "#fff",
                        border: "none",
                        outline: "none",
                        height: "35px",
                      }}
                      onClick={getLocation}
                    >
                      Autofill
                    </button>
                  </div>

                  <div className="d-flex w-100">
                    <div className="m-2 w-50">
                      <h6>Country</h6>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-100 p-1 rounded"
                      />
                    </div>

                    <div className="m-2 w-50">
                      <h6>Mobile number</h6>
                      <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-100 p-1 rounded"
                      />
                    </div>
                  </div>

                  <div className="m-2">
                    <h6>Full name (first & last name)</h6>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-100 p-1 rounded"
                    />
                  </div>

                  <div className="d-flex w-100">
                    <div className="m-2 w-50">
                      <h6>Pin Code</h6>
                      <input
                        type="text"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="w-100 p-1 rounded"
                        placeholder=" 6 digit [ 0-9 ] PIN CODE"
                      />
                    </div>

                    <div className="m-2 w-50">
                      <h6>Landmark</h6>
                      <input
                        type="text"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        className="w-100 p-1 rounded"
                        placeholder=" Eg. Near apollo hospital"
                      />
                    </div>
                  </div>

                  <div className="m-2">
                    <h6>
                      Flat, House no., Building, Company, Apartment, Area,
                      Street, Sector, Village
                    </h6>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-100 p-1 rounded"
                    />
                  </div>

                  <div className="d-flex w-100">
                    <div className="m-2 w-50">
                      <h6>Town/ City</h6>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-100 p-1 rounded"
                      />
                    </div>

                    <div className="m-2 w-50">
                      <h6>State</h6>
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-100 p-1 rounded"
                      />
                    </div>
                  </div>

                  <div>
                    <input type="checkbox" />
                    <strong> Make this my default address</strong>
                  </div>
                  <div className="m-3">
                    <button
                      className="rounded btn p-2 btn-md"
                      style={{
                        background: "#ffd814",
                      }}
                      onClick={addressHandle}
                    >
                      Use this address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        : null}
      <h2
        className=" d-flex justify-content-center align-items-center bg-secondary text-white rounded m-2"
        style={{ height: "70px" }}
      >
        Checkout
      </h2>
      <div
        className="bg-white d-flex justify-content-center r"
        style={{ padding: "10px 250px" }}
      >
        <div className=" w-100" style={{}}>
          <h4 className="text-danger">1. Select a Delivery Address</h4>
          <div className="border mb-5 border-secondary rounded-1 p-2">
            <h5>Your Address</h5>
            <hr />
            <div className=" p-2 rounded mb-2 d-flex flex-column ">
              {addressView ? (
                <>
                  <div
                    className=" p-2 rounded mb-2 d-flex  "
                    style={{ background: "#fcf5ee" }}
                  >
                    <input checked type="radio" name="a" className="me-3" />
                    <p>
                      <strong>{name}</strong> {address}, {landmark}, {city},{" "}
                      {state},{pin}, {country}, Phone number: {mobile}{" "}
                      <strong
                        className="text-info"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowAddress(true)}
                      >
                        change
                      </strong>
                    </p>
                  </div>
                  <button
                    className=" btn rounded border-0 w-25"
                    onClick={addressProceed}
                    style={{ background: "#fdb960", height: "40px" }}
                  >
                    Use this address
                  </button>
                </>
              ) : (
                <h6 className=" rounded p-3" style={{ background: "#fcf5ee" }}>
                  No Delivery Address found !
                </h6>
              )}
            </div>
            {!addressView ? (
              <span
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "green",
                }}
                onClick={() => setShowAddress(true)}
              >
                {" "}
                <strong style={{ fontSize: "33px", color: "grey" }}>
                  +
                </strong>{" "}
                Add a new address
              </span>
            ) : null}
          </div>

          {paymentOption ? (
            <>
              <h4 className="text-danger">2. Select a payment method</h4>

              <div className="border mb-5 border-secondary rounded-1 p-2">
                <h5>Payment method</h5>
                <hr />

                <div
                  className=" p-2 rounded mb-2 d-flex border "
                  style={{ background: "#fcf5ee", cursor: "pointer" }}
                >
                  <>
                    <input
                      type="radio"
                      onChange={() => setPaymentPlus(true)}
                      name="b"
                      className="me-3"
                    />
                    <div>
                      <h6>Credit Card or Debit Card</h6>
                      <span>
                        <img
                          src="https://freepngimg.com/save/25689-major-credit-card-logo-transparent-image/1000x239"
                          alt="f"
                          width="150px"
                        />
                        {paymentPlus ? (
                          <p
                            onClick={() => setShowPayment(true)}
                            className="text-info"
                          >
                            <strong style={{ fontSize: "33px", color: "grey" }}>
                              +
                            </strong>
                            Enter Card Details
                          </p>
                        ) : null}
                      </span>
                    </div>
                  </>
                </div>
                <div
                  className=" p-2 rounded mb-2 d-flex border "
                  style={{ background: "#fcf5ee", cursor: "pointer" }}
                >
                  <>
                    <input checked type="radio" name="b" className="me-3" />
                    <h6>Cash on Delivery / Pay on Delivery</h6>
                  </>
                </div>
                <button
                  className=" btn rounded border-0 w-50"
                  style={{ background: "#fdb960", height: "40px" }}
                  onClick={() => setOrderConfirm(true)}
                >
                  Use this payment method
                </button>
              </div>
            </>
          )
           : 
           null
           }



           
{
  orderConfirm?
<>
<h4 className="text-danger">3. Proceed to Order</h4>

<div className="border mb-5 border-secondary rounded-1 p-2">
  <h5>Order now</h5>
  <hr />
  <div
    className=" p-2 rounded mb-2 d-flex border "
    style={{ background: "#fcf5ee", cursor: "pointer" }}
  >
    <>
Click the button to proceed the order of Gucci Shirt 3XL size with white colour
    </>
  </div>
  <button
  onClick={confirmedOrder}
    className=" btn rounded border-0 w-25"
    style={{ background: "#fdb960", height: "40px" }}
  >
    confirm order
  </button>
</div>
</>
:
null
}


        </div>










        <div
          className="p-4 rounded d-flex justify-content-center mt-5 flex-column border border-secondary ms-5 w-50"
          style={{height:'450px', position:'sticky', top:'80px'}}
        >
          <button  className=" btn rounded border-0 w-50"
                  style={{ background: "#fdb960", margin:'auto', height: "40px" }}>Your Order</button>
                  <br />
          <p>
            Choose a payment method to continue checking out. You will still
            have a chance to review and edit your order before it is final.
          </p>
          <hr />
          <h5>Order Summary</h5>  
          <div className="d-flex justify-content-between">
            <span>Items:</span>
            <span>₹864.00</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Delivery:</span>
            <span>₹40.00</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>Tax & GST:</span>
            <span>₹115.00</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>Total:</span>
            <span>₹955.00</span>
          </div>
          
          <div className="d-flex justify-content-between">
            <span>Promotion applied:</span>
            <span>-₹30.00</span>
          </div>
          <hr />
          <div className="d-flex text-danger justify-content-between">
            <h5>Order Total:</h5>
            <h5>₹834.00</h5>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shipping;
