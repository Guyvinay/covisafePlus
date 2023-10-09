import React, { useEffect } from 'react'
import User from './icons/User'
import { Button, Flex, Grid, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, color, useToast } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/actions/usersAction';
import { FetchUserDataAction } from '../redux/actions/types/userDataTypes';
import { RootState } from '../redux/type';
import { json } from 'react-router';

export default function DashBoard(){

  const dispatch: any = useDispatch();
  const data = useSelector((state:RootState) => state.userData.data);
  const toast = useToast();

  useEffect(()=>{

    const token :string  = localStorage.getItem("token") || '';
    
    if(token){

      dispatch(fetchUserData(token));
      console.log(data);
    } else {

      toast({
        title: "Error in",
        description: "you are not logged in please login first",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    
    }
    
  },[dispatch]);

  return (
    <div className="w-full flex flex-col items-center py-5 bg-[#f5f5f5]">
      {/* <Grid width={"90%"} gridTemplateColumns={"repeat(4,1fr)"} gap={10}>
        <Flex
          shadow={"md"}
          justify={"space-between"}
          px={5}
          py={5}
          rounded={"md"}
          cursor={"pointer"}
          color={"#010045"}
          _hover={{
            bg: "#010045",
            color: "white",
          }}
        >
          <div>
            <h2 className="font-bold font-sans text-2xl pr-5">12</h2>
            <span className="text-gray-400">Users</span>
          </div>
          <div className="w-16 pl-5">
            <User w={50} h={50} />
          </div>
        </Flex>
        <Flex
          shadow={"md"}
          justify={"space-between"}
          px={5}
          py={5}
          rounded={"md"}
          cursor={"pointer"}
          color={"#010045"}
          _hover={{
            bg: "#010045",
            color: "white",
          }}
        >
          <div>
            <h2 className="font-bold font-sans text-2xl pr-5">12</h2>
            <span className="text-gray-400">Users</span>
          </div>
          <div className="w-16 pl-5">
            <User w={50} h={50} />
          </div>
        </Flex>
        <Flex
          shadow={"md"}
          justify={"space-between"}
          px={5}
          py={5}
          rounded={"md"}
          cursor={"pointer"}
          color={"#010045"}
          _hover={{
            bg: "#010045",
            color: "white",
          }}
        >
          <div>
            <h2 className="font-bold font-sans text-2xl pr-5">12</h2>
            <span className="text-gray-400">Users</span>
          </div>
          <div className="w-16 pl-5">
            <User w={50} h={50} />
          </div>
        </Flex>
        <Flex
          shadow={"md"}
          justify={"space-between"}
          px={5}
          py={5}
          rounded={"md"}
          cursor={"pointer"}
          color={"#010045"}
          _hover={{
            bg: "#010045",
            color: "white",
          }}
        >
          <div>
            <h2 className="font-bold font-sans text-2xl pr-5">12</h2>
            <span className="text-gray-400">Users</span>
          </div>
          <div className="w-16 pl-5">
            <User w={50} h={50} />
          </div>
        </Flex>
      </Grid> */}
      <Grid gridTemplateColumns={"repeat(2,1fr)"} w={"full"}>
        <Flex className="flex-col bg-white rounded-lg p-3">
          <Flex className="items-center justify-between">
            <h3 className="font-semibold text-lg">Recent Users</h3>
            <Button
              bg={"red.600"}
              color={"whiteAlpha.800"}
              _hover={{
                bg: "red.400",
              }}
              _focusVisible={{
                outline: "2",
                outlineOffset: "2",
                outlineColor: "red.300",
              }}
              rightIcon={<ArrowForwardIcon />}
            >
              See all
            </Button>
          </Flex>
          <Flex>
            <TableContainer w={"full"}>
              <Table variant="simple">
                {/* <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption> */}
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.length ? (
                    data.map((e, i) => {
                      console.log(e);
                      
                      return (
                        <Tr key={i}>
                          <Td>{e.idcard.email}</Td>
                          <Td>millimetres (mm)</Td>
                          <Td isNumeric>25.4</Td>
                        </Tr>
                      );
                    })
                  ) : (
                    <>
                      <Tr>
                        <Td></Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                      </Tr>
                    </>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Grid>
      <div>{JSON.stringify(data).toString()}</div>
    </div>
  );
}
