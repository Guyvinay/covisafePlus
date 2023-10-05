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
      boxShadow="sm"
    >
      <div style={{ width: "10%" }} className="m-auto">
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
        <li>
          <a
            href="#"
            className="inline-flex items-center px-1  py-5 border-b-2 border-transparent text-sm font-medium leading-5 text-red-500 hover:text-red-700 hover:border-red-300 focus:outline-none focus:text-red-700 focus:border-red-300 transition"
          >
            Home
          </a>
        </li>
        <li>
          <a className="inline-flex items-center px-1 cursor-pointer  py-5 border-b-2 border-transparent text-sm font-medium leading-5 text-red-500 hover:text-red-700 hover:border-red-300 focus:outline-none focus:text-red-700 focus:border-red-300 transition">
            About
          </a>
        </li>
        <li>
          <a
            href=""
            className="inline-flex items-center px-1  py-5 border-b-2 border-transparent text-sm font-medium leading-5 text-red-500 hover:text-red-700 hover:border-red-300 focus:outline-none focus:text-red-700 focus:border-red-300 transition"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href=""
            className="inline-flex items-center px-1  py-5 border-b-2 border-transparent text-sm font-medium leading-5 text-red-500 hover:text-red-700 hover:border-red-300 focus:outline-none focus:text-red-700 focus:border-red-300 transition"
          >
            Users
          </a>
        </li>
      </ul>
    </Box>
  );
};
