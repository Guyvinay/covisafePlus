import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Router from './Router.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>,
);
