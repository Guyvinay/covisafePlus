import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './nav';
import Footer from './Footer';

export default function Signup({ zoom: [zoom, setZoom] }) {
  return (
    <>
      <Nav zoom={[zoom, setZoom]} />
      <div className="w-full bg-[#ff003214] flex items-center justify-center py-20">
        <div className="loginlogout w-fit ">
          <div className="changer bg-[#33333399] ">
            <Link to="/signin">
              <div className="page text-[#ffffffc3]">Sign In</div>
            </Link>
            <Link to="/signup">
              <div className="active page text-[#ffffffc3]">Sign Up</div>
            </Link>
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
              <h2>Sign up for Vaccination</h2>
              <br />
              <p>Register your credentials </p>
              <form>
                <input type="email" placeholder="Enter email" required />
                <input type="password" placeholder="Enter password" required />
                <input type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
