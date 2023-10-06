import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React, { Dispatch, Reducer, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { BeatLoader } from "react-spinners";
import { loginUser } from "../redux/actions/loginAction";
import { AppActions, AppState, RootState } from "../redux/actions/types";
import { CombinedState } from "redux";


const  Login : React.FC= ()=> {
    const toast = useToast();
    const dispatch :any = useDispatch();
    const [email, setEmail] = useState("");
    const [view, setView] = useState(false);
    const [password,setPassword] = useState("");
    const loading = useSelector((state: RootState) => state.user.loading); 
    const baseURL = process.env.REACT_APP_API_BASE_URL;
        
    const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault();
      dispatch(loginUser(email, password, toast));
    };


    return (
      <div className="w-full h-[90vh] justify-center items-center flex ">
        <Flex
          flexDir={"column"}
          w={"25%"}
          minW={"400px"}
          shadow={"lg"}
          padding={"10"}
          margin={"auto"}
          borderRadius={"xl"}
        >
          <div className="m-auto rounded-md">
            <div className="rounded-lg bg-gray-300 p-4">
              <a
                href=""
                className="font-medium text-xl text-[#33333] drop-shadow-sm"
                style={{ fontFamily: "Ubuntu, sans-serif" }}
              >
                Covi<span className="text-red-600">safe</span>
                <sup>+</sup>
              </a>
            </div>
            <p className="text-center text-2xl py-3 font-bold">Login</p>
          </div>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderRadius={"md"}
                required={true}
                focusBorderColor="red.500"
                placeholder="name@gmail.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={view ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  borderRadius={"md"}
                  required={true}
                  focusBorderColor="red.500"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    border={"none"}
                    background={"none"}
                    _focusVisible={{
                      outline: "2",
                      outlineOffset: "2",
                      outlineColor: "red.300",
                    }}
                    onClick={() => {
                      setView((prev) => !prev);
                    }}
                  >
                    {view ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <Button
                mt={4}
                background={"red.600"}
                color={"white"}
                isLoading={loading}
                spinner={<BeatLoader size={8} color="white" />}
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

export default Login;