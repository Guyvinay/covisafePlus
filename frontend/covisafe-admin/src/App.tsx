import { Box } from "@chakra-ui/layout";
import * as React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";

export const App = () => {

  return (
    <><NavBar /><DashBoard /></>
  );
};
