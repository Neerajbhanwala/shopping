import React, { useState } from "react";
import "../Styles/SignIn.css";
import Header from "../Pages/Header";
import Swal from "sweetalert2";

function SignIn() {
  const [phone, setPhone] = useState(true);
  const [signUp, setSignUp] = useState(true);
  const [number, setNumber] = useState();

  const [name, setRegisterName] = useState();
  const [username, setRegisterUserName] = useState();
  const [mobile, setRegisterMobile] = useState();
  const [password, setRegisterPassword] = useState();

  const phoneHandle = () => {
    setPhone(false);
    window.scrollTo(0, 0);
  };

  const signupHandle = () => {
    setSignUp(false);
    window.scrollTo(0, 0);
  };

  
  async function registerHandle() {
    let registerItem = {
      name,
      mobile,
      username,
      password,
    };
    console.log(registerItem);
  
    try {
      let result = await fetch("http://localhost:8081/api/register", {
        method: "POST",
        body: JSON.stringify(registerItem),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
  
      if (result.ok) {
        const response = await result.json();
        console.log("result", response);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registered Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error("Error registering user:", result.statusText);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Mobile / Email already exists',
        })
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

  }

  return (
    <>  
      <Header />
      <div className=" d-flex align-items-center flex-column bg-white">
        <img
          src="https://logolook.net/wp-content/uploads/2021/06/Amazon-Logo.png"
          alt=""
          width="8%"
        />
        {signUp ? (
          <>
            <div className="border w-25 border-dark rounded p-3 d-flex m-3 flex-column">
              <h3 style={{ fontWeight: "350" }}>Sign in</h3>
              {phone ? (
                <>
                  <b> Enter mobile phone number or email </b>
                  <input
                    type="text"
                    className="signInInput"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />

                  <button
                    onClick={phoneHandle}
                    className="signInpageBTN rounded"
                  >
                    Continue
                  </button>

                  <p>
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                  </p>
                  <a href="#fff">Need help</a>
                </>
              ) : (
                <>
                  <label>
                    {" "}
                    {number}{" "}
                    <span
                      style={{ cursor: "pointer", color: "rgb(19, 164, 232)" }}
                      onClick={() => setPhone(true)}
                    >
                      change
                    </span>
                  </label>
                  <b>Password </b>
                  <input type="password" className="signInInput" />
                  <div className="m-2">
                    <input type="checkbox" />
                    &nbsp; <label> Keep me sign in</label>
                  </div>
                  <button
                    onClick={phoneHandle}
                    className="signInpageBTN rounded"
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>

            {phone ? (
              <>
                <div>
                  <sup>_________________________</sup> New to Amazon?{" "}
                  <sup>_________________________</sup>
                </div>
                <br />
                <button
                  onClick={signupHandle}
                  className=" rounded w-25 p-1 signInInput"
                >
                  Create your Amazon Account
                </button>
              </>
            ) : null}
          </>
        ) : (
          <>
            <div className="border w-25 border-dark rounded p-3 d-flex m-3 flex-column">
              <h3 style={{ fontWeight: "350" }}>Create Account</h3>

              <b> Your name </b>
              <input type="text" className="signInInput" value={name} onChange={(e) => setRegisterName (e.target.value)} />

              <b> Mobile number </b>
              <input type="text" className="signInInput" value={mobile} onChange={(e) => setRegisterMobile (e.target.value)} />

              <b> Email (Optional) </b>
              <input type="text" className="signInInput" value={username} onChange={(e) => setRegisterUserName (e.target.value)}  />

              <b> Password </b>
              <input
                type="text"
                className="signInInput"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setRegisterPassword (e.target.value)} 
              />

              <small>
                To verify your number, we will send you a text message with a
                temporary code. Message and data rates may apply.
              </small>

              <br />

              <button onClick={registerHandle} className="signInpageBTN rounded">
                Continue
              </button>

              <hr />

              <p>
                Already have an Account.{" "}
                <span
                  style={{ cursor: "pointer", color: "rgb(19, 164, 232)" }}
                  onClick={() => setSignUp(true)}
                >
                  {" "}
                  Sign in
                </span>
              </p>
            </div>
          </>
        )}

        <br />

        <div
          className="w-100 d-flex align-items-center flex-column"
          style={{
            borderTop: "3px solid",
            borderImage:
              " linear-gradient(to right, transparent,  #000, transparent) 1 ",
          }}
        >
          <br />
          <div>
            <span>condition of use</span>
            <span className="m-5">Privacy Notice</span>
            <span>Help</span>
          </div>
          <br />
          <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
          <br />
        </div>
      </div>
    </>
  );
}

export default SignIn;
