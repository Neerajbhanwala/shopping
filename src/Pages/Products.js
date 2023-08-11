import React from 'react'
import Header from '../Pages/Header'
import '../Styles/Products.css'
import { NavLink } from 'react-router-dom'

function Products() {
  return (
    <>
    <Header/>

    <NavLink to="/SingleProduct">
    <div class="product-card">
            <div key="" class="badge">
              5.0 <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="product-tumb">
              <img src="https://img.freepik.com/free-photo/air-conditioner-mounted-white-wall_53876-128235.jpg" 
              alt="" width="500px" />
            </div>
            <div class="product-details">
              <span class="product-catagory">
                --Air conditioner--
                </span>
              <h4>
                <a href="">Blue star Air C...</a>
              </h4>
              <p>The best product in blue start with 5 rating...</p>
              <div class="product-bottom-details">
                <div class="product-price">
                ₹35000/-
                </div>
                <div class="product-links">
                  <a href="_d">
                    <i class="fa fa-heart"></i>
                  </a>
                  <a href="_d">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
         </NavLink>
    </>
  )
}

export default Products