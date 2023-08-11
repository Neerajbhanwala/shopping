import React, { useState } from "react";
import "../Styles/Location.css";
import { GrFormClose } from "react-icons/gr";

function Location(props) {
  const [detail, setDetail] = useState("Gurugram, 122001");

  function getLocation() {
    fetch(
      "https://geolocation-db.com/json/a5f3c240-7310-11ed-8abc-5520d31fdee7"
    )
      .then((response) => response.json())
      .then((data) => setDetail(data));
    props.onSubmit(detail);
  }
  return (
    <div className="main-popup">
      <div className="mid-box">
        <div className="header d-flex align-items-center ps-4">
          <span>Choose your location</span>
          <span
            style={{ marginLeft: "40%", fontSize: "30px", cursor: "pointer" }}
            onClick={props.close}
          >
            <GrFormClose />
          </span>
        </div>
        <div className="d-flex header-body justify-content-center align-items-center flex-column">
          <p>
            Select a delivery location to see product availability and delivery
            options.
          </p>
          <button
            className="w-100 font-weight-bold rounded-3 mb-2"
            style={{
              background: "#ffd814",
              border: "none",
              outline: "none",
              height: "35px",
            }}
            onClick={getLocation}
          >
            Click to get your current location
          </button>
          <p>
            <sup>_____________________</sup> Or Enter your location{" "}
            <sup>_____________________</sup>
          </p>
          <div>
            <input
              type="text"
              className="me-1 rounded border border-dark ps-2"
              style={{ width: "220px", height: "35px" }}
            />
            <button
              className="border border-muted bg-muted shadow-sm rounded"
              style={{ width: "105px", height: "35px" }}
            >
              Apply
            </button>
          </div>
          ___________________________ or ___________________________
          <select
            className="w-100 bg-muted shadow-sm border border-muted"
            style={{ height: "30px" }}
          >
            <option selected disabled hidden>
              Deliver outside India
            </option>
            <option>Bangladesh</option>
            <option>Shri Lanka</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Location;
