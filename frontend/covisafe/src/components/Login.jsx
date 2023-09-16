import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Nav from './nav';
import Footer from './Footer';
import axios from "axios";


export default function Login({ zoom: [zoom, setZoom] }) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const baseURL = "https://covisafeplus-production-f84b.up.railway.app";
  
  const handleSubmit = (event)=>{
    event.preventDefault();

    const user = {
      email:email,
      password:password,
    }

    axios
    .post(`${baseURL}/users/signin`, user)
    .then(
      (res)=>{
        console.log(res);
      }
    )

  };

  return (
    <>
      <Nav />
      <div className="w-full bg-[#ff003214] flex items-center justify-center py-20">
        <div className="loginlogout w-fit ">
          <div className="changer bg-[#33333399] ">
            <div className="active page text-[#ffffffc3]">
              <Link to="/sigin">Sign In</Link>
            </div>
            <div className="page text-[#ffffffc3]">
              <Link to="/signup">Sign Up</Link>
            </div>
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
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter email"
                  required
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter password"
                  required
                />
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
