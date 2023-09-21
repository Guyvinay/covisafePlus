import React from 'react';
import Nav from './nav';
import Footer from './Footer';
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
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Services({ zoom: [zoom, setZoom] }) {

    const { isOpen, onOpen, onClose } = useDisclosure(true);
    const firstField = React.useRef();

  const services = [
    {
      image: "./images/member_service.jpg",
      title: "Member Service",
      desc: "Our Member Service is designed to offer personalized assistance and support throughout your vaccination journey. As a valued member, you will receive timely updates on vaccine availability, priority access to appointments, and dedicated customer care to address all your vaccination-related queries and concerns.",
      handleClick: (e) => {
        Swal.fire({
          title: "Submit your Github username",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Look up",
          showLoaderOnConfirm: true,
          preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
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
          if (result.isConfirmed) {
            Swal.fire({
              title: `${result.value.login}'s avatar`,
              imageUrl: result.value.avatar_url,
            });
          }
        });
      },
    },
    {
      image: "./images/vaccination-service.jpg",
      title: "Vaccination Center Service",
      desc: "Our Vaccination Center Service aims to streamline the vaccination process for centers and hospitals. We provide state-of-the-art software solutions for efficient patient management, real-time vaccine inventory tracking, and seamless coordination with authorities, ensuring a smooth vaccination experience for both healthcare providers and recipients.",
      handleClick: () => {},
    },
    {
      image: "./images/vaccination-center-service.jpg",
      title: "Vaccine Service",
      desc: "As part of our Vaccine Service, we collaborate with trusted vaccine manufacturers to ensure a steady supply of safe and effective vaccines. Our commitment to quality and accessibility empowers communities to build immunity against infectious diseases and contributes to the overall well-being of the population.",
      handleClick: () => {},
    },
    {
      image: "./images/registration.png",
      title: "Vaccine Registration Service",
      desc: "With our Vaccine Registration Service, individuals can conveniently register for vaccination through our user-friendly platform. We facilitate a hassle-free registration process, keeping you informed about the latest vaccination slots and eligibility criteria, making sure you never miss an opportunity to get vaccinated.",
      handleClick: () => {},
    },
    {
      image: "./images/appointment-service.jpg",
      title: "Appointment Service",
      desc: "Our Appointment Service empowers users to schedule vaccination appointments with ease. Whether it's your first dose or a follow-up, our system lets you choose from available slots at nearby vaccination centers, helping you plan your vaccinations according to your convenience.",
      handleClick: () => {},
    },
    {
      image: "./images/vaccine-intervention.png",
      title: "Vaccine Intervention Service",
      desc: "Our Vaccine Intervention Service revolves around research and development to support the creation of innovative vaccines. We collaborate with leading researchers and institutions to explore new avenues in vaccine technology, striving to enhance global health and combat emerging health threats effectively.",
      handleClick: () => {},
    },
  ];

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
          Our Services
        </h1>
        <div className="w-2/3 grid grid-cols-3 mx-auto gap-12 text-center">
          {services.map((e, i) => (
              <div className=" bg-[#33333399]    shadow-serviceShadow rounded-lg p-7 cursor-pointer" key={i}
              onClick={e.handleClick}>
                <img
                  className="mix-blend-multiply w-1/3  flex mx-auto"
                  src={e.image}
                  alt="error"
                />
                <h3 className="px-7 py-2 w-4/5 m-auto  my-4 font-semibold rounded-lg bg-[#FFFFFF77]">
                  {e.title}
                </h3>
                <p className="text-justify px-2 py-4 text-[#FFFFFF99]">
                  {e.desc}
                </p>
              </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;