import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Footer from "./Footer";
import Swal from "sweetalert2";
import axios from "axios";

function Services({ zoom: [zoom, setZoom] }) {

  const baseURL = "https://covisafeplus-production-417c.up.railway.app";
  const [error, setError] = useState(false);


  useEffect(()=>{
    const uuid = localStorage.getItem("uuid");
    const token = localStorage.getItem("token");
    if(uuid && token){
      axios
        .get(`${baseURL}/memberByUUID/${uuid}`, {
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        .then((res) => {
          console.log(res);
        }).catch(res=>{
          console.log(res);
          switch(res.code){
            case "ERR_BAD_REQUEST":
              setError(true);
              break;
          }
        })
    }
    
  },[error, setError]);

  return (
    <>
      <Nav zoom={[zoom, setZoom]} />
      <div className="w-full flex justify-center items-center" style={{ minHeight: "87vh" }}>
        {error ? (
          <div
            className="p-8 h-fit w-10/12 text-red-800 border border-red-300 rounded-lg  bg-[#1f2937dd] dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-16 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="text-3xl font-medium">This is a danger alert</h3>
            </div>
            <div className="mt-2 mb-4 text-2xl">
              More info about this info danger goes here. This example text is
              going to run a bit longer so that you can see how spacing within
              an alert works with this kind of content.
            </div>
            <div className="flex">
              <button
                style={{ fontSize: "1.6rem" }}
                type="button"
                className="text-white bg-red-800  focus:outline-none  font-medium rounded-lg text-base px-6 py-3 mr-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  className="ml-0.5 mr-3 h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                View more
              </button>
              <button
                type="button"
                style={{ fontSize: "1.6rem" }}
                className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-6  py-3 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                data-dismiss-target="#alert-additional-content-2"
                aria-label="Close"
              >
                Dismiss
              </button>
            </div>
          </div>
        ) : (
          <h1
            className="text-center font-bold text-mainColor py-7"
            style={{
              fontSize: "30px",
              filter: "drop-shadow(0 0 0.75rem #ed033199)",
            }}
          >
            Book an appointment
          </h1>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Services;
