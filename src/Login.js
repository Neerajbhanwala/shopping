import React from 'react'
import './Login.css'

function Login() {


  return (
    <>
    
    
<div class="mytra-login">
  <form>
    <img src="https://e7.pngegg.com/pngimages/480/581/png-clipart-logo-e-commerce-digital-marketing-brand-trade-ecommerce-text-service.png" alt="df" />
    
    <h1 class="heading">
      Welcome to India's Largest Online Fashion Store
    </h1>
    <p>Please login to your account</p>
    
    <label>Email ID</label>
    <input type="text" />
    
    <label>Password</label>
    <input type="password" />
    
    <div class="forgot">
      <label><input type="checkbox" /> Keep me signed in</label>
      
      <a>Forget Password?</a>
    </div>
    
    <button class="login">Login</button>
    <button class="signup">Signup</button>
  </form>
  
  <div class="poster">
  </div>
</div>

    
    </>
  )
}

export default Login