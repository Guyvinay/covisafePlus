import { Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";


export default function Login() {
const [email, setEmail] = useState("");
  return (
    <div className="w-full h-[90vh] justify-center items-center flex ">
      <Flex
        flexDir={"column"}
        w={"25%"}
        shadow={"md"}
        padding={"10"}
        margin={"auto"}
      >
        <div className="m-auto">
          <a
            href=""
            className="font-medium px-6 text-2xl "
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            Covi<span className="text-red-600">safe</span>
            <sup>+</sup>
          </a>
        </div>
        <form>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderRadius={"md"}
              focusBorderColor="red.500"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderRadius={"md"}
              focusBorderColor="red.500"
            />
          </FormControl>
          <FormControl>
            <Button
              mt={4}
              background={"red.600"}
              color={"white"}
              type="submit"
              _hover={{
                bgColor: "red.300",
              }}
              _focusVisible={{
                outline: "2",
                outlineOffset: "2",
                outlineColor: "red.300",
              }}
              w={"full"}
            >
              Login
            </Button>
          </FormControl>
        </form>
      </Flex>
    </div>
  );
}
