import React from 'react'

export default function Login() {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div class="loginlogout w-fit ">
        <div class="changer bg-[#33333399] ">
          <div class="active page text-[#ffffffc3]">Sign In</div>
          <div class="page text-[#ffffffc3]">Sign Up</div>
        </div>
        <div className="form signin bg-[#33333399]">
          <div className="imgdiv">
            <div className="flex justify-center py-5">
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
              <input type="email" placeholder="Enter email" required />
              <input type="password" placeholder="Enter password" required />
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
