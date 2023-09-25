import React, { useEffect } from "react";
import Nav from "./nav";
import Footer from "./Footer";
import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  background,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import axios from "axios";


function Services({ zoom: [zoom, setZoom] }) {

  

  useEffect(()=>{
    axios.get(``)
  },[]);

  return (
    <>
      <Nav zoom={[zoom, setZoom]} />
      <div
        className="w-full bg-[#ff003214] pb-12"
        style={{
          background:
            "linear-gradient(45deg, #ed033166,#ed033188,#ed033144,#ed033133 )",
        }}
      >
        <h1
          className="text-center font-bold text-mainColor py-7"
          style={{
            fontSize: "30px",
            filter: "drop-shadow(0 0 0.75rem #ed033199)",
          }}
        >
          Book an appointment
        </h1>
        <div className="w-2/3 grid grid-cols-3 mx-auto gap-12 text-center"></div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
