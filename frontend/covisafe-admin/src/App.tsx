import { Box } from "@chakra-ui/layout";
import * as React from "react";
import { useState } from "react";

export const App = () => {

  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      width={"100%"}
      flexDir={"row"}
      shadow={"outline"}
      paddingTop={"12px"}
      paddingBottom={"12px"}
      boxShadow="sm"
    >
      <div style={{ width: "10%" }}>
        <a
          href=""
          className="font-medium px-6 text-2xl"
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          Lo<span className="text-red-600">go</span>
        </a>
      </div>
      <ul
        className="flex justify-around text-red-600 font-semibold hover:"
        style={{ width: "90%" }}
      >
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="" className="after:w-9 after:h-2 after:bg-red-500">About</a>
          <div></div>
        </li>
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Users</a>
        </li>
      </ul>
    </Box>
  );
};
