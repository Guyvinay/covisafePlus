import { Box } from "@chakra-ui/layout";
import * as React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Appointments from "./components/Appointments";

export const App = () => {

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <NavBar />
        <Appointments/>
        {/* <DashBoard/> */}
        <Login />
      </div>
    </>
  );
};
