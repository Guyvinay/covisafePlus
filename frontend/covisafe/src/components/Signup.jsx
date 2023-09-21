import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Nav from './nav';
import Footer from './Footer';
import Swal from "sweetalert2";
import axios from 'axios';
import { Select } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";


export default function Signup({ zoom: [zoom, setZoom] }) {

  const [next, setNext] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState("");
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [pan, setPan] = useState('');
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("MALE");

  const male = "MALE";
  const female = "FEMALE";



  const baseURL = `https://covisafeplus-production-417c.up.railway.app`;


  const handleNext =(e)=>{
    e.preventDefault();
    setNext(prev=>!prev);
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    const user = {
      email: email,
      name:name,
      dob:dob,
      gender:gender,
      aadhar:aadhar,
      address:address,
      city:city,
      state:state,
      pincode:pincode,
      pan:pan,
      password:password,
    };

    axios.post(`${baseURL}/users/register`,user)
    .then(res=>{
      console.log(res);
      localStorage.setItem("uuid",res.data.uuid);
      localStorage.setItem("token",res.data.token);
      Swal.fire(
        "Registered succesfully!",
        "you can proceed to vaccination now ",
        "success"
      ).then(()=>{
        navigate("/")
      })
    })
    .catch(res=>{
      console.error(res);
      switch (res.code) {
        case "ERR_BAD_REQUEST":
          Swal.fire(
            "Incorrect data passed ",
            "please provide the correct details",
            "error"
          );
          break;
        default:
          Swal.fire(
            "Network error",
            "seems like there is a problem related to network",
            "error"
          );
          break;
      }
    })
    
  }


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
              <div className="page text-[#ffffffc3]">Sign In</div>
            </Link>
            <Link to="/signup">
              <div className="active page text-[#ffffffc3]">Sign Up</div>
            </Link>
          </div>
          <div className="form signin bg-[#33333344]">
            <div className="imgdiv h-full flex flex-col justify-around">
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
              <p>Fill your details </p>
              <form>
                {!next ? (
                  <>
                    <input
                      type="email"
                      placeholder="Enter email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="date"
                      placeholder="Enter D.O.B"
                      className="text-[#f3f3f399] px-5"
                      required
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                    <select
                      style={{ fontSize: "1.6rem", color: "#f3f3f399" }}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value={male}>MALE</option>
                      <option value={female}>FEMALE</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Enter aadharNo"
                      required
                      value={aadhar}
                      onChange={(e) => setAadhar(e.target.value)}
                    />
                    <input type="submit" onClick={handleNext} value="next" />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter state"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Enter pincode"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter panNo"
                      required
                      value={pan}
                      onChange={(e) => setPan(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Enter password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="submit"
                      onClick={handleSubmit}
                      value="Sign up"
                    />
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
