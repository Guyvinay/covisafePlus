import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "./Select";
import { Icon, createIcon } from "@chakra-ui/react";




export default function Profile() {
  const baseURL = "https://covisafeplus-production-417c.up.railway.app";
  const [uuid, setUuid] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [pan, setPan] = useState("");
  const [gender, setGender] = useState({ id: 0, name: "Select Gender" });
  const [appointment, setAppointment] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    let uid = localStorage.getItem("uuid");
    let token = localStorage.getItem("token");
    let memberId = localStorage.getItem("memberId");

    axios
      .get(`${baseURL}/memberByUUID/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        localStorage.setItem("memberId", res.data.id);
        localStorage.setItem("mobileNo", res.data.mobNo);
      }).catch((res)=>{
        switch(res.response.status){
          case 404:
            Swal.fire(
              "Add mobile number",
              "Add mobile number to update profile",
              "info"
            ).then(() => {
              navigate("/service");
            });
            break;
        }
      })

     if (uid && token) {
       setUuid(uid);
     } else {
       Swal.fire(
         `Please login `,
         `You are not logged in so please login first`,
         "error"
       ).then(() => {
         navigate("/signin");
       });
     }
     axios.get(`${baseURL}/members/${memberId}`,{
      headers:{
        'Authorization' : `Bearer ${token}`
      }
     }).then((res)=>{
      console.log(res.data);
      if(res.data != null){
        console.log(res);
        setEmail(res.data.idcard.email);
        setName(res.data.idcard.name);
        setAadhar(res.data.idcard.aadharNo);
        setGender({id:0,name:res.data.idcard.gender});
        setPan(res.data.idcard.panNo);
        setDob(res.data.idcard.dob);
        setAddress(res.data.idcard.address);
        setCity(res.data.idcard.address);
        setState(res.data.idcard.state);
        setPincode(res.data.idcard.pincode);
        setAppointment(res.data.appointment);
      }else{
        Swal.fire("something went wrong", "please try agin later",'warning');
      }
      
      
     }).catch((res)=>{
      console.log(res.response.status);
      switch (res.response.status) {
        case 404:
          Swal.fire("Add mobile number", "Add mobile number to update profile",'info').then(()=>{
            navigate("/service");
          });
          break;
        case 403:
          Swal.fire("Acces Denied!", "please login first", "error").then(() => {
            navigate("/signin");
          });
          break;
      }
     })
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault();
  };

  console.log(appointment);

  return (
    <div className="w-full">
      <div className="w-3/5 flex items-center justify-center mx-auto my-16">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="space-y-20">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-semibold leading-10 text-gray-900 ">
                Profile
              </h2>
              <p className="mt-1 text-2xl leading-10 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md  shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-2xl">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-xl">
                        covisafe-plus.vercel.app/
                      </span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-xl sm:leading-10 cursor-not-allowed select-none"
                        value={uuid}
                        disabled={true}
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 focus:outline-none sm:text-xl px-3 sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-xl leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div> */}

                {/* <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div> */}

                {/* <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* appointment details section */}

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-semibold leading-10 text-gray-900 ">
                Appointment details
              </h2>
              <p className="mt-1 text-2xl leading-10 text-gray-600">
                All your appointments and status will be here
              </p>

              {!appointment ? (
                <div className="mt-10  grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <h1>You don't have any appointments</h1>
                </div>
              ) : (
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4 flex">
                    <label
                      htmlFor="username"
                      className="flex text-2xl items-center justify-center font-medium leading-10 text-gray-900"
                    >
                      Appointment status :
                    </label>
                    <div className="">
                      {appointment.bookingStatus ? (
                        <>
                          <div className="flex items-center justify-center px-4">
                            <Icon
                              viewBox="0 0 200 200"
                              color="green.500"
                              boxSize={8}
                            >
                              <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                              />
                            </Icon>
                            <p className="inline px-4 font-semibold">Booked</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center justify-center px-4">
                            <Icon
                              viewBox="0 0 200 200"
                              color="yellow.500"
                              boxSize={8}
                            >
                              <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                              />
                            </Icon>
                            <p className="inline px-4 font-semibold">Pending</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* booking date */}

                  <div className="sm:col-span-4 flex">
                    <label
                      htmlFor="username"
                      className="flex text-2xl items-center justify-center font-medium leading-10 text-gray-900"
                    >
                      Booking Date :
                    </label>
                    <div className="flex items-center justify-center px-4">
                      {appointment.dateOfBooking}
                    </div>
                  </div>

                  {/* slot */}

                  <div className="sm:col-span-4 flex">
                    <label
                      htmlFor="username"
                      className="flex text-2xl items-center justify-center font-medium leading-10 text-gray-900"
                    >
                      Booking Date :
                    </label>
                    <div className="flex items-center justify-center px-4 ">
                      {appointment.slot}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-semibold leading-10 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-2xl leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-none sm:text-2xl px-3 sm:leading-10"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Select
                    selectedValue={[gender, setGender]}
                    data={[
                      { id: 1, name: "MALE" },
                      { id: 2, name: "FEMALE" },
                    ]}
                    labelText={"Gender"}
                  />
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600  focus:outline-none px-3 sm:text-2xl sm:leading-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="pan"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    PAN no.
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="pan"
                      id="pan"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-none sm:text-2xl px-3 sm:leading-10"
                      value={pan}
                      onChange={(event) => setPan(event.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="aadhar"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    Aadhar No.
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="aadhar"
                      id="aadhar"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-none sm:text-2xl px-3 sm:leading-10"
                      value={aadhar}
                      onChange={(e) => setAadhar(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="dob"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    Date of birth
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-none sm:text-2xl px-3 sm:leading-10"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-2xl sm:leading-10 focus:outline-none px-3"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 px-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-none sm:text-2xl sm:leading-10"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-2xl focus:outline-none px-3 sm:leading-10"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:outline-none  sm:text-2xl px-3 sm:leading-10"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-10">
            <button
              type="button"
              className="text-2xl font-semibold leading-10 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-600 px-7 rounded-lg py-2 text-2xl font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 leading-10"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
