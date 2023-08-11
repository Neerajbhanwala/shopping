import React from "react";
import "../Styles/Home.css";
import Carousel from "react-bootstrap/Carousel";
import { BiSolidChevronsLeft } from "react-icons/bi";
import { BiSolidChevronsRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Header from "../Pages/Header";

function Home() {
  function scroll() {
    var left = document.querySelector(".scrolling-wrapper ");
    left.scrollBy(1400, 0);
  }

  function scrollr() {
    var right = document.querySelector(".scrolling-wrapper ");
    right.scrollBy(-1400, 0);
  }

  // 2nd scrolling

  function scrollTwo() {
    var leftTwo = document.querySelector(".scrolling-two ");
    leftTwo.scrollBy(1400, 0);
  }

  function scrollrTwo() {
    var rightTwo = document.querySelector(".scrolling-two ");
    rightTwo.scrollBy(-1400, 0);
  }

  // 3rd scrolling

  function scrollThree() {
    var leftThree = document.querySelector(".scrolling-Three ");
    leftThree.scrollBy(1400, 0);
  }

  function scrollrThree() {
    var rightThree = document.querySelector(".scrolling-Three ");
    rightThree.scrollBy(-1400, 0);
  }

  // 4th scrolling

  function scrollFour() {
    var leftFour = document.querySelector(".scrolling-Four ");
    leftFour.scrollBy(1400, 0);
  }

  function scrollrFour() {
    var rightFour = document.querySelector(".scrolling-Four ");
    rightFour.scrollBy(-1400, 0);
  }

  // 5th scrolling

  function scrollFive() {
    var leftFive = document.querySelector(".scrolling-Five ");
    leftFive.scrollBy(1400, 0);
  }

  function scrollrFive() {
    var rightFive = document.querySelector(".scrolling-Five ");
    rightFive.scrollBy(-1400, 0);
  }

  // 6th scrolling

  function scrollSix() {
    var leftSix = document.querySelector(".scrolling-Six ");
    leftSix.scrollBy(1400, 0);
  }

  function scrollrSix() {
    var rightSix = document.querySelector(".scrolling-Six ");
    rightSix.scrollBy(-1400, 0);
  }

  // 7th scrolling

  function scrollSeven() {
    var leftSeven = document.querySelector(".scrolling-Seven ");
    leftSeven.scrollBy(1400, 0);
  }

  function scrollrSeven() {
    var rightSeven = document.querySelector(".scrolling-Seven ");
    rightSeven.scrollBy(-1400, 0);
  }

  return (
    <>
    <Header/>
      {/* // Carousal start */}
      <div className="carousal">
        <Carousel data-bs-theme="dark">

        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/postARTmocks/D85283799_Tall_Hero_3000x1200._CB597707034_.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Half_CA/PC_hero/3000x1200_HalfCA_V1._CB598892965_.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/AugART/Acq/PEAdayof/PC_Hero_3000x1200_ft._CB599318118_.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/julyatf23/unrec/yes/WA_ETH_3000._CB598905142_.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/BAU/june/hnk/3000x1200._CB603852206_.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/ATF/Unrec/OneCard/Jewellery/Jewl_3000._CB600652941_.jpg"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/saba/july23/5300-Amazon-Kitchen---My-first-kitchen-purchase-heros_3000X1200_HDFC_YES._CB600690896_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/TBS/GW/PC-3q._CB600691989_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/TBS/GW/The-beauty-sale-Hero-PCrrr._CB600648675_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* // carousal ends here */}

      {/* four pack div first */}
      <div className="main-product-first">
        <div className="main-single-box">
          <h4>Appliances for your home | Up to 55% off</h4>

      
          <div className="image-part-main">

          <NavLink to="/products">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Air Conditioners</figcaption>
            </div>
            </NavLink>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Refrigerators</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>MicroWaves</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Washing Machines</figcaption>
            </div>
          </div>

          <a href="#dfd">See more</a>
        </div>

        {/* ////// */}

        <div className="main-single-box">
          <h4>Starting ₹99 | All your home improvement needs</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Spin, Wipes & more</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Bathroom Accessories</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Hammers & Screwdrivers</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Extension, Plugs & more</figcaption>
            </div>
          </div>

          <a href="#dffd">Explore more</a>
        </div>

        {/* /////////// */}

        <div className="main-single-box">
          <h4>Bluetooth Calling Smartwatch starts at ₹1,999</h4>

          <div className="image-part-main">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
              alt="dfd"
              width="100%"
            />
          </div>

          <a href="#dfd">Explore more</a>
        </div>

        {/* //////// */}

        <div className="main-single-box" style={{ background: "transparent" }}>
          <div className="bg-white p-3">
            <h4>Sign in for your best experience</h4>
            <NavLink to="signIn">
              <button
                style={{
                  width:'88%',
                  background: "#ffd814",
                  margin:'0px',
                  border: "none",
                  outline: "none",
                  borderRadius: "10px",
                  height: "30px",
                }}
              >
                Sign in securely
              </button>
            </NavLink>
          </div>
          <div className=" mt-3 p-3">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/HipHopIndia/Desktop_CC/GOVO_updated/DeskCC-379x304_Hip-Hop-India_V2-nora._SY304_CB600434490_.jpg"
              alt="df"
              width="100%"
            />
          </div>
        </div>

        {/* /////  bottom line */}

        <div className="main-single-box">
          <h4>Up to 70% off | Clearance store</h4>

          <div className="image-part-main">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
              alt="sd"
              width="100%"
            />
          </div>

          <a href="#dfd">Explore more</a>
        </div>

        {/* /////// */}

        <div className="main-single-box">
          <h4>Starting ₹99 | Baby essentials & toys</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/in_cpb_btf_pc_qc_186x116_toys_1._SY116_CB600590661_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Starting ₹129 | Games </figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/in_cpb_btf_pc_qc_186x116_toys_3._SY116_CB600590661_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Starting ₹129 | soft Toys</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/in_cpb_btf_pc_qc_186x116_toys_2._SY116_CB600590661_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Up to 70% off | Diapers</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/in_cpb_btf_pc_qc_186x116_toys_4._SY116_CB600475144_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Up to 70% off | toys</figcaption>
            </div>
          </div>

          <a href="#dfd">Explore more</a>
        </div>

        {/* ////// */}

        <div className="main-single-box">
          <h4>Up to 60% off | Styles for men</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Men's Clothing </figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>footwear</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Watches</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Bags & Luggage</figcaption>
            </div>
          </div>

          <a href="#dfd">Explore more</a>
        </div>

        {/* ///// */}

        <div className="main-single-box">
          <h4>Up to 60% off | Styles for women</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Women's Clothing </figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>footwear + Handbags</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Watches</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Fashion jewellery</figcaption>
            </div>
          </div>

          <a href="#dfd">Explore more</a>
        </div>
      </div>

      {/* //// */}

      <div style={{ marginTop: "550px" }}></div>

      {/* Horizontal scrolling first */}
      <div className="p-3 bg-white m-3">
        <span className="p-2" style={{ fontSize: "22px", fontWeight: "bold" }}>
          Today's Deals
        </span>
        <a href="#df">See more</a>
        <div class="scrolling-wrapper  ">
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/31XCRJqeTjL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 80% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    Compact Earbuds from Urbn @ 999…
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/31G-ftiDlPL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 73% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    Branded Suitcase, Backpacks & Duffl…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81TBkVDGeGL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 45% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    Men's Footwear: Bata, Hush Puppies a..
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/413gXukxurL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 12% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    Tecno Spark 10 5G, 8GB RAM, 256GB…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/31i8GB3mD2L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 37% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    WaterScience best deals Bath Faucets…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            {" "}
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41B1qN1qfAL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 55% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    Telescopic & Step Ladders from Prime...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            {" "}
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81VQYbV0-wL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 37% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    Women's Footwear: Bata, Hush Puppie…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            {" "}
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 95% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    Best offers on PC and Electronic acces…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            {" "}
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/31Ri-FAMBUL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 40% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    pple Airpods starting Rs. 12499...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41gMugnZ6lL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
                <div className="side-scrolling-detail-part">
                  <span
                    className="bg-danger ps-2 p-1 pe-2 text-white"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Up to 82% off
                  </span>
                  <span
                    className="text-danger ps-1"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Deal of the day
                  </span>
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    aily Objects wireless and moreDaily Objects wireless and
                    more…
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="scrolling-btn-right btnToggle" onClick={scroll}>
            <BiSolidChevronsRight />
          </button>
          <button className="scrolling-btn-left btnToggle" onClick={scrollr}>
            <BiSolidChevronsLeft />
          </button>
        </div>
      </div>

      {/* horizontal div second */}
      <div className="p-3 bg-white m-3">
        <span className="p-2" style={{ fontSize: "22px", fontWeight: "bold" }}>
          Frequently repurchased in Home
        </span>
        <a href="#df">See more</a>
        <div class="scrolling-wrapper scrolling-two  ">
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81qmhsAkmYL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81M5hq90kNS._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81DGkVqIlDL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81XeYUizhbL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61mdPtC0iIL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71WaTP2QS8L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/91Sl+I74ypL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81BEjPTJGtL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51vw-wdV-eL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/8106zYzdc8L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/819iyjgrCrL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41MAlBiJ0dL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81D0hYtdRyS._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <button className="scrolling-btn-right btnToggle" onClick={scrollTwo}>
            <BiSolidChevronsRight />
          </button>
          <button className="scrolling-btn-left btnToggle" onClick={scrollrTwo}>
            <BiSolidChevronsLeft />
          </button>
        </div>
      </div>

      {/* horizontal div third */}
      <div className="p-3 bg-white m-3">
        <span className="p-2" style={{ fontSize: "22px", fontWeight: "bold" }}>
          Frequently repurchased in Home
        </span>
        <a href="#df">See more</a>
        <div class="scrolling-wrapper scrolling-Three  ">
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/31jSfjq9GJL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51pQeFfwiCL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71eFDoRqVvL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51SwNn7xWAL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61KtXVslwDL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/31a8OFFrgtL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51JcK+UvhQL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41-DGGm544L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51exXg1WfwL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51ziDAHvs1S._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/31ObzpB9RML._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41te0QSxqpL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <button
            className="scrolling-btn-right btnToggle"
            onClick={scrollThree}
          >
            <BiSolidChevronsRight />
          </button>
          <button
            className="scrolling-btn-left btnToggle"
            onClick={scrollrThree}
          >
            <BiSolidChevronsLeft />
          </button>
        </div>
      </div>

      {/* four pack div second */}

      <div className="main-product-second mb-5">
        <div className="main-single-box">
          <h4>Amazon Fresh | Great prices | Fruits & vegetables</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/June23/T14/FNV/PC1/WEEK4/1._SY116_CB601940942_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Fruits</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/June23/T14/FNV/PC1/WEEK4/2._SY116_CB601940942_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Vegitables</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/gw/fv/PC1/july23/FV_PC_03._SY116_CB601796139_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Season Special</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/gw/fv/PC1/july23/FV_PC_04._SY116_CB601796139_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Premium & Exotic</figcaption>
            </div>
          </div>

          <a href="#dfd">See more</a>
        </div>

        {/* ////// */}

        <div className="main-single-box">
          <h4>Electronics devices for home office</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Smartwatches & trackers</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Tablets</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Laptops</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Monitors</figcaption>
            </div>
          </div>

          <a href="#dffd">Explore more</a>
        </div>

        {/* /////////// */}

        <div className="main-single-box">
          <h4>Bestsellers in Women's Indian Clothing</h4>

          <div className="image-part-main pt-5">
            <div style={{ float: "left", margin: "10px" }}>
              <figure>
                <img
                  src="https://m.media-amazon.com/images/I/61q-JREtrAL._AC_SY170_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
            </div>

            <div style={{ float: "left", margin: "10px" }}>
              <figure>
                <img
                  src="https://m.media-amazon.com/images/I/71XeWDNm5qL._AC_SY170_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
            </div>
            <br />
            <div style={{ float: "left", margin: "10px" }}>
              <figure>
                <img
                  src="https://m.media-amazon.com/images/I/61j03Q3hrKL._AC_SY170_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
            </div>
          </div>

          <a href="#dffd">Explore more</a>
        </div>

        {/* //////// */}

        <div className="main-single-box">
          <h4>Great Freedom Sale | Brands in focus</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/mi/Mi_186X116._SY116_CB598912920_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Xiaomi Tvs</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/AUG_ART/ART_Teaser/TCl_new._SY116_CB598954819_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>TCL TVs</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/AUG_ART/ART_Teaser/Samsung_new._SY116_CB598954819_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Samsung TVs</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/AUG_ART/ART_Teaser/Hisense_new._SY116_CB598954819_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Hisense TVs</figcaption>
            </div>
          </div>

          <a href="#dffd">Explore more</a>
        </div>

        {/* /////  bottom line */}
      </div>

      {/* horizontal div fourth */}
      <div className="p-3 bg-white m-3">
        <span className="p-2" style={{ fontSize: "22px", fontWeight: "bold" }}>
          Up to 50% off | Get your essential groceries here!
        </span>
        <a href="#df">See all offers</a>
        <div class="scrolling-wrapper scrolling-Four  ">
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/91VFuToiaGL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61yR7yohv5L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41jofqOlxNL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61VF37h4r3L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/814rn5FmmDL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81J0rsL5EKL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71TwKynH41S._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61YFAQwdsJL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/816ERSjWE-L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71MrcMi43oS._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81FvzMnYs6L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41Hyh3yQ+3L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81gu0NJYYwL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <button
            className="scrolling-btn-right btnToggle"
            onClick={scrollFour}
          >
            <BiSolidChevronsRight />
          </button>
          <button
            className="scrolling-btn-left btnToggle"
            onClick={scrollrFour}
          >
            <BiSolidChevronsLeft />
          </button>
        </div>
      </div>

      {/* horizontal div fifth */}
      <div className="p-3 bg-white m-3">
        <span className="p-2" style={{ fontSize: "22px", fontWeight: "bold" }}>
          Grocery & Gourmet
        </span>
        <a href="#df">See all offers</a>
        <div class="scrolling-wrapper scrolling-Five  ">
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51m6GnRwmSL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61yR7yohv5L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71j7mgOHTrL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81OCwFQGpLL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51FDH-70JnL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51IA41yh+5L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61ovNvlye2L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51YuG-47LZL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51ToHG1zwKL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71XzhqJC1cL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61L8x9MIKQL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/519GO+ONsLL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61t+hPpoxdL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <button
            className="scrolling-btn-right btnToggle"
            onClick={scrollFive}
          >
            <BiSolidChevronsRight />
          </button>
          <button
            className="scrolling-btn-left btnToggle"
            onClick={scrollrFive}
          >
            <BiSolidChevronsLeft />
          </button>
        </div>
      </div>

      {/* advertisement */}
      <div className="container advertise" title="Advertisement">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt="dfd"
          width="100%"
        />
      </div>

      {/* four pack div third */}

      <div className="main-product-second mt-4 mb-5">
        <div className="main-single-box">
          <h4>Under ₹499 | Pocket-friendly fashion</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-186-116._SY116_CB636055991_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>clothing</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>BackPacks</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Footwear</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>View all</figcaption>
            </div>
          </div>

          <a href="#dfd">See all offer</a>
        </div>

        {/* ////// */}

        <div className="main-single-box">
          <h4>One stop shop for all your wedding shopping</h4>

          <div className="image-part-main">
            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/For_her-1_1x._SY116_CB653484282_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Shop for her</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/For_him-1_1x._SY116_CB653484282_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Shop for him</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/Pooja_essentials-1_1x._SY116_CB653484282_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Pooja essentials</figcaption>
            </div>

            <div className="single-image-part">
              <figure>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/Explore_more-1_1x._SY116_CB653484282_.jpg"
                  alt="air condition"
                  width="100%"
                />
              </figure>
              <figcaption>Explore the store</figcaption>
            </div>
          </div>

          <a href="#dffd">Explore more</a>
        </div>

        {/* /////////// */}

        <div className="main-single-box">
          <h4>Hip Hop India | Watch Now Only on miniTV</h4>

          <div className="image-part-main pt-3">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/HipHopIndia/Desktop_CC/GOVO_updated/DeskCC-379x304_Hip-Hop-India_V1-remo._SY304_CB600434490_.jpg"
              alt="ssd"
              width="100%"
            />
          </div>

          <a href="#dffd">Explore more</a>
        </div>

        {/* //////// */}

        <div className="main-single-box">
          <h4>GDiapers & wipes | Starting ₹99</h4>

          <div className="image-part-main">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/PC_CC_379x304V1._SY304_CB616418989_.jpg"
              alt="ssd"
              width="100%"
            />
          </div>

          <a href="#dffd">Explore more</a>
        </div>
      </div>

      {/* horizontal div sixth */}
      <div className="p-3 bg-white m-3">
        <span className="p-2" style={{ fontSize: "22px", fontWeight: "bold" }}>
          Up to 60% off | Always choose the right décor for your home
        </span>
        <a href="#df">See all offers</a>
        <div class="scrolling-wrapper scrolling-Six  ">
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/617+DXivlzL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71wopn34BZS._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51pVnJpXdGL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71hHLZk3LFL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61aVsVXADpL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61l055BysNL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81UKPSqsnwL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61fD6N8mnOL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81VeYBag-gL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81ABxpz1ZJL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81dzfVX4J2L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61uTQSDyaZL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/81dzfVX4J2L._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <button className="scrolling-btn-right btnToggle" onClick={scrollSix}>
            <BiSolidChevronsRight />
          </button>
          <button className="scrolling-btn-left btnToggle" onClick={scrollrSix}>
            <BiSolidChevronsLeft />
          </button>
        </div>
      </div>

      {/* horizontal div seventh */}
      <div className="p-3 bg-white m-3">
        <span className="p-2" style={{ fontSize: "22px", fontWeight: "bold" }}>
          Up to 55% off | Getting clear skin is not impossible
        </span>
        <a href="#df">See all offers</a>
        <div class="scrolling-wrapper scrolling-Seven  ">
          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51h+DjV-oeL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/31Yvhyix2XL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/41wFjAmw1CL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51gqg6M-3xL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51gqg6M-3xL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61kiEw2TSkL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/51R2vYnATcS._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71LC4CypMIL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61o8N6hfUlL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71VnC+SetHL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/61Ohkh0QNdL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71FHep6O1QL._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cards">
              <div className="side-scrolling-img-part">
                <img
                  src="https://m.media-amazon.com/images/I/71r2Dee68BS._AC_SY200_.jpg"
                  alt="ds"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <button
            className="scrolling-btn-right btnToggle"
            onClick={scrollSeven}
          >
            <BiSolidChevronsRight />
          </button>
          <button
            className="scrolling-btn-left btnToggle"
            onClick={scrollrSeven}
          >
            <BiSolidChevronsLeft />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
