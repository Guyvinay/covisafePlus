import React from 'react'

export default function Login() {
  return (
    <div className="w-screen flex items-center justify-center  bg-gradient-to-r from-mainColor to-[#ff003255] ">
      <div class="loginlogout w-fit">
        <div class="changer">
          {/* bg-[#ff003255] */}
          <div class="active page">Sign In</div>
          <div class="page">Sign Up</div>
        </div>
        <div className="form signin">
          <div className="imgdiv">
            <div>
              <img src="./images/login-family.svg" alt="" />
            </div>
            <div>
              <img src="./images/building-icon.svg" alt="" />
            </div>
          </div>
          <div>
            <h2>Sign In for Vaccination</h2>
            <br />
            <p>Enter your credentials</p>
            <form>
              <input type="email" placeholder="enter email" required />
              <input type="password" placeholder="password" required />
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
