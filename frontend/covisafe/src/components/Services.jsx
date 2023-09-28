import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { json } from "react-router-dom";
import Select from "./Select";

function Services({ zoom: [zoom, setZoom] }) {
  const navigate = useNavigate();
  const baseURL = "https://covisafeplus-production-417c.up.railway.app";
  const [error, setError] = useState(false);
  const [slot, setSlot] = useState({
    id:1,
    name:"select value"
  });
  const [vaxinationCenter, setVaxinationCenter] = useState({
    id: "",
    name: "select value",
  });
  const [vCenters, setVCenters] = useState([{id:1,name:''}]);

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
       localStorage.setItem("memberId", result.id);
       localStorage.setItem("mobileNo", result.mobNo);
      console.log(result);
       Swal.fire(
         "Updated Succesfully!",
         "mobile no updated succesfully",
         "success"
       ).then(() => {
         setError(false);
       });
    });
  };

  useEffect(() => {
    const uuid = localStorage.getItem("uuid");
    const token = localStorage.getItem("token");
    if (uuid && token) {
      axios
        .get(`${baseURL}/vaccinationCenters`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // console.log(res);
          setVCenters(res.data);
        });
    }
  }, [vCenters, setVCenters]);

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
          // console.log(res);
          localStorage.setItem("memberId", res.data.id);
          localStorage.setItem("mobileNo", res.data.mobNo);
        }).catch(res=>{
          // console.log(res);
          switch(res.response.status){
            case 404:
              setError(true);
              break;
            case 403:
              Swal.fire(
                "Acces Denied!",
                "please login first",
                "error"
              ).then(() => {
                navigate("/signin");
              });
              break;
          }
        })
    }else{
       Swal.fire("Acces Denied!", "please login first", "error").then(() => {
         navigate("/signin");
       });
    }
    
  },[error, setError]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const uuid = localStorage.getItem("uuid");
    const token = localStorage.getItem("token");
    const memberid = localStorage.getItem("memberId");
    const mobileNo = localStorage.getItem("mobileNo");
    if (uuid && token && memberid && mobileNo) {
      console.log({slot:slot.name,mobileNo:mobileNo});
      console.log(vaxinationCenter.id);
      fetch(`${baseURL}/appointments/${memberid}/${vaxinationCenter.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ slot: slot.name, mobileNo: mobileNo }),
      })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw new Error(JSON.stringify(res));
          }
          return res.json();
        })
        .then((res) => {
          console.log(res);
          Swal.fire("Booked succesfully",`your appiontment is booked succesfully`,'success').then(()=>{
            navigate("/");
          })
        })
        .catch((res) => {
          Swal.fire(`Appointment Booked already`,`An appointment already booked for you `,'error').then(()=>{
            navigate("/");
          })
        });
    }
  };

  return (
    <>
      <Nav zoom={[zoom, setZoom]} />
      <div
        className="w-full flex justify-center items-center"
        style={{ minHeight: "87vh" }}
      >
        {error ? (
          <div
            className="p-8 h-fit w-10/12 text-red-800 border-red-300 rounded-lg  bg-[#1f2937dd] dark:text-red-400 border-l-red-800 "
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
                <form className="space-y-6" onSubmit={handleSubmit}>
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

                  <Select
                    selectedValue={[vaxinationCenter, setVaxinationCenter]}
                    data={vCenters.map((e, i) => {
                      return {
                        id: e.centerId,
                        name: `${e.centerName}, ${e.city}`,
                      };
                    })}
                    labelText={"Vaccination center"}
                  />
                  <Select
                    selectedValue={[slot, setSlot]}
                    data={[
                      { id: 1, name: "SLOT1" },
                      { id: 2, name: "SLOT2" },
                      { id: 3, name: "SLOT3" },
                      { id: 4, name: "SLOT4" },
                      { id: 5, name: "SLOT5" },
                      { id: 6, name: "SLOT6" },
                      { id: 7, name: "SLOT7" },
                      { id: 8, name: "SLOT8" },
                      { id: 9, name: "SLOT9" },
                    ]}
                    labelText={"Choose Slot"}
                  />
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
                      className="flex w-full justify-center rounded-md bg-red-600 px-3 py-5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
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
