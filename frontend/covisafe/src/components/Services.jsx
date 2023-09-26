import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Footer from "./Footer";
import Swal from "sweetalert2";
import axios from "axios";
import { json } from "react-router-dom";
import Select from "./Select";

function Services({ zoom: [zoom, setZoom] }) {

  const baseURL = "https://covisafeplus-production-417c.up.railway.app";
  const [error, setError] = useState(false);
  const [slot, setSlot] = useState('');
  const [vaxinationCenter, setVaxinationCenter ] = useState('');
  const [vCenters, setVCenters] = useState([]);

  const registerMember = ()=>{
    const uuid = localStorage.getItem("uuid");
    const token = localStorage.getItem("token");

    Swal.fire({
      title: "Enter mobile number",
      input: "number",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`${baseURL}/members/${uuid}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ mobNo: login }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      localStorage.setItem("memberId",result.data.id);
      console.log(result);
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

  useEffect(()=>{
    const uuid = localStorage.getItem("uuid");
    const token = localStorage.getItem("token");
    
    if(uuid && token){

      axios
        .get(`${baseURL}/vaccinationCenters`,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        .then((res)=>{
          console.log(res);
          setVCenters(res.data);
        })


      axios
        .get(`${baseURL}/memberByUUID/${uuid}`, {
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("memberId", res.data.id);
        }).catch(res=>{
          console.log(res);
          switch(res.code){
            case "ERR_BAD_REQUEST":
              setError(true);
              break;
          }
        })
    }
    
  },[error, setError, vCenters, setVCenters]);

  return (
    <>
      <Nav zoom={[zoom, setZoom]} />
      <div
        className="w-full flex justify-center items-center"
        style={{ minHeight: "87vh" }}
      >
        {error ? (
          <div
            className="p-8 h-fit w-10/12 text-red-800   border-red-300 rounded-lg  bg-[#1f2937dd] dark:text-red-400 border-l-red-800 "
            style={{ borderLeftWidth: "7px" }}
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
              <h3 className="text-3xl font-medium">Phone number required</h3>
            </div>
            <div className="mt-2 mb-4 text-2xl">
              To book an appointment complete this step for further registration
              process.
            </div>
            <div className="flex">
              <button
                style={{ fontSize: "1.6rem" }}
                type="button"
                className="text-white bg-red-800  focus:outline-none  font-medium rounded-lg text-base px-6 py-3  text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={registerMember}
              >
                Add phone number
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex min-h-full  flex-col justify-center">
              <div className="w-fit">
                <img
                  className="mx-auto h-16 w-auto mix-blend-exclusion"
                  src="./images/mainlogo.png"
                  alt="logo"
                />
                <h2 className="mt-14 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
                  Book an appointment
                </h2>
              </div>

              <div className="mt-14">
                <form className="space-y-6" action="#" method="POST">
                  {/* <div>
                    <label
                      htmlFor="email"
                      className="block text-2xl font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-4 ">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-3 text-gray-900 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 outline-none"
                      />
                    </div>
                  </div> */}

                  <Select />
                  <Select />
                  {/* <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-2xl font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-lg">
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full outline-none rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 "
                      />
                    </div>
                  </div> */}

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                {/* <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{" "}
                  <a
                    href="#"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Start a 14 day free trial
                  </a>
                </p> */}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Services;
