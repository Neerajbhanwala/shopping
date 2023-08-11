import React, { useContext, useEffect, useState } from "react";
import "../Styles/Header.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImSearch } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Location from "../Pages/Location";
import { NavLink } from "react-router-dom";

import { CartContext } from "../ContextApi/CartProvider";

function Header() {

  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
}, [cart]);

  const [location, setLocation] = useState(false);
  const [locationData, setLocationData] = useState("Select your Address");

  const getData = (data) => {
    console.log("Details coming from child", data);
    setLocationData(data);
    setLocation(false);
  };

  function closeButton() {
    setLocation(false);
  }

  return (
    <>
      {/* Location pop-up */}

      {location ? <Location close={closeButton} onSubmit={getData} /> : null}

      {/* main header start here */}

      <div className="bg-dark w-100 text-white header-main-container d-flex align-items-center ps-3">
        {/* logo */}
        <NavLink to="/">
          <div className=" h-100 header-logo d-flex align-items-center justify-content-center pt-3">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
              width="100%"
            />
          </div>
        </NavLink>

        {/* Location */}

        <div
          className=" h-75 header-location ps-3"
          style={{ overflow: "hidden" }}
          onClick={() => setLocation(true)}
        >
          <div
            className="ps-4"
            style={{ color: "rgb(181, 174, 174)", fontSize: "14px" }}
          >
            <i>Hello</i>
          </div>
          <b>
            {" "}
            <HiOutlineLocationMarker /> {locationData}
          </b>
        </div>

        {/* Categories */}
        <select className=" header-category">
          <option>All</option>
          <option>Baby</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Cars & Motorbikes</option>
          <option>Electronics</option>
          <option>Furniture</option>
        </select>

        {/* search bar */}
        <input
          type="text"
          placeholder="Search for your product"
          className="header-search-bar"
        />

        {/* search button */}
        <button className="header-search-button">
          <ImSearch />
        </button>

        {/* language */}
        <span className="p-1 ms-3 header-language">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/India_flag_icon.png/320px-India_flag_icon.png"
            alt="IND"
            width="25px"
          />{" "}
          <b>EN</b>
          <AiFillCaretDown />{" "}
        </span>

        {/* signin */}

        <NavLink to="/signIn">
          <div className=" h-75 header-account-list ps-3">
            <div style={{ color: "rgb(181, 174, 174)", fontSize: "14px" }}>
              <i>Hello, sign in </i>
            </div>
            <b className="text-white">
              Accounts & Lists <AiFillCaretDown />{" "}
            </b>
          </div>
        </NavLink>

        <div className=" h-75 header-return-orders">
          <div style={{ color: "rgb(181, 174, 174)", fontSize: "14px" }}>
            <i>Returns </i>
          </div>
          <b>
            & Orders <AiFillCaretDown />{" "}
          </b>
        </div>

        <NavLink to="/cart">
        <div className=" h-75 text-white header-return-orders">
        <FiShoppingCart style={{fontSize:'35px'}} />
        <span className='CartNumber'>{quantity}</span>
        </div>
        </NavLink>
        

      </div>

      {/* Header list start here */}

      <div className="header-list d-flex justify-content-between align-items-center">
        <ul>
          <li>
            <GiHamburgerMenu /> All
          </li>
          <li>Amazon mini TV</li>
          <li>Best Sellers </li>
          <li>Today's Deals </li>
          <li>Mobiles </li>
          <li>New Release </li>
          <li>Customer Service </li>
          <li>
            Prime <AiFillCaretDown />
          </li>
          <li>Electronics </li>
          <li>Gift Ideas </li>
          <NavLink to="/sale">
            <li>Taday's Sale </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Header;
