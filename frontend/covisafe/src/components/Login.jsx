import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Login({ zoom: [zoom, setZoom] }) {

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const baseURL = "https://covisafeplus-production-417c.up.railway.app";  
  
  const handleSubmit = (event)=>{
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    console.log(user);

    fetch(`${baseURL}/users/signin`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) =>{
       if (!res.ok) {
         if (res.status === 400) {
           throw new Error("Bad Request: Incorrect username or password.");
         }
         throw new Error("Network response was not ok");
       }
      return res.json();
    })
    .then((res) => {
        localStorage.setItem("token",res.token);
        localStorage.setItem("uuid",res.uuid);
        Swal.fire(
                "Login succes!",
                "you can proceed to vaccination now ", 
                "success"
        )
        .then(()=>{
          navigate("/")
        })

    })
    .catch((res) => {
      setIsDisabled(!isDisabled);
      switch (res.message) {
        case "Bad Request: Incorrect username or password.":
          Swal.fire(
            "Incorrect username or password!",
            "please provide the correct details",
            "error"
          );
          break;
        case "Network response was not ok":
          Swal.fire(
            "Network error",
            "seems like there is a problem related to network",
            'error'
          )
          break;
      }
       

    });

  };

  return (
    <>
      <Nav zoom={[zoom, setZoom]} />
      <div
        className="w-full bg-[#ff003214] flex items-center justify-center py-20"
        style={{
          background:
            "linear-gradient(45deg, #ed033166,#ed033188,#ed033144,#ed033133 )",
          minHeight: "87vh",
        }}
      >
        <div className="loginlogout w-fit ">
          <div className="changer bg-[#33333344] ">
            <Link to="/signin">
              <div className="active page text-[#ffffffc3]">Sign In</div>
            </Link>
            <Link to="/signup">
              <div className="page text-[#ffffffc3]">Sign Up</div>
            </Link>
          </div>
          <div className="form signin bg-[#33333344] backdrop-blur-lg">
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
                {/* <FontAwesomeIcon icon={faEnvelope} style={{position:'absolute',bottom:238, left:390}}/> */}
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
