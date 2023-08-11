import React from "react";
import "../Styles/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  function scrollTop() {
    window.scroll(0, 0);
  }
  return (
    <>
      <div className="footer-main-login-main d-flex justify-content-center align-items-center">
        <div className="border-muted border h-50 w-100 d-flex justify-content-center align-items-center flex-column">
          <p>See personalized recommendations</p>
        <NavLink>  <button className="login-footer-page">sign in</button></NavLink>
          <p>New Customers? Start here.</p>
        </div>
      </div>

      <button
        className="w-100 d-flex justify-content-center align-items-center text-white"
        style={{ height: "50px", background: "#37475a" }}
        onClick={scrollTop}
      >
        Back to top
      </button>
      <div className=" w-100 main-footer d-flex justify-content-center align-items-center text-white">
        <table>
          <tr style={{ fontWeight: "bold", color: "#fff", fontSize: "25px" }}>
            <td>Get to know us</td>
            <td>Connect with us</td>
            <td>Make money with us</td>
            <td>Let us help you</td>
          </tr>

          <tr>
            <td>About us</td>
            <td>Facebook</td>
            <td>Sell on Amazon</td>
            <td>Covid-19 and Amazon</td>
          </tr>

          <tr>
            <td>Careers</td>
            <td>Twitter</td>
            <td>Sell under Amazon Accelerator</td>
            <td>Your Account</td>
          </tr>

          <tr>
            <td>Press Releases</td>
            <td>Instagram</td>
            <td>Protect & Build Your Brand</td>
            <td>Returns Center</td>
          </tr>

          <tr>
            <td>Amazon Science</td>
            <td></td>
            <td>Amazon Global Selling</td>
            <td>100% Purchase Protection</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Become an Affiliate</td>
            <td>Amazon App Download</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Fulfilment By Amazon</td>
            <td>help</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Advertise your products</td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Amazon on Merchants</td>
            <td></td>
          </tr>
        </table>
      </div>

      <div
        className="d-flex justify-content-center align-items-center text-white p-5"
        style={{ backgroundColor: "#232f3e", borderTop: "1px solid grey" }}
      >
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          width="10%"
        />
      </div>
    </>
  );
}

export default Footer;
