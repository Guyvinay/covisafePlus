import React from 'react'
import { Box } from "@chakra-ui/layout";
import { Icon, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, background } from "@chakra-ui/react";
import { HamburgerIcon, SunIcon } from '@chakra-ui/icons';
import User from './icons/User';
export default function NavBar() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      width={"100%"}
      flexDir={"row"}
      shadow={"outline"}
      boxShadow="md"
    >
      <div style={{ width: "10%" }} className="m-auto flex flex-nowrap">
        <a
          href=""
          className="font-medium px-6 text-2xl "
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          Covi<span className="text-red-600">safe</span>
          <sup>+</sup>
        </a>
      </div>
      <ul
        className="flex justify-evenly text-red-600 font-semibold "
        style={{ width: "80%" }}
      >
        <li>
          <a
            href="#"
            className="inline-flex items-center px-1  py-5 border-b-2 border-transparent text-sm font-medium leading-5 text-red-500 hover:text-red-700 hover:border-red-300 focus:outline-none focus:text-red-700 focus:border-red-300 transition"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a className="inline-flex items-center px-1 cursor-pointer  py-5 border-b-2 border-transparent text-sm font-medium leading-5 text-red-500 hover:text-red-700 hover:border-red-300 focus:outline-none focus:text-red-700 focus:border-red-300 transition">
            Appointments
          </a>
        </li>
        <li>
          <a
            href=""
            className="inline-flex items-center px-1  py-5 border-b-2 border-transparent text-sm font-medium leading-5 text-red-500 hover:text-red-700 hover:border-red-300 focus:outline-none focus:text-red-700 focus:border-red-300 transition"
          >
            Vaccination centers
          </a>
        </li>
        <li>
          <a
            href=""
            className="inline-flex items-center px-1  py-5 border-b-2 border-transparent text-sm font-medium leading-5 text-red-500 hover:text-red-700 hover:border-red-300 focus:outline-none focus:text-red-700 focus:border-red-300 transition"
          >
            Vaccines
          </a>
        </li>
      </ul>
      <div style={{ width: "10%" }} className="flex justify-end px-4">
        <Menu>
          <MenuButton>
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="teal"
              background={"red.600"}
              aria-label="Done"
              fontSize="20px"
              icon={<User h={16} w={16} />}
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </Box>
  );
}


