import React, { useEffect, useState } from 'react'
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
  const [recentUsers, setRecentUsers] = useState<any[]>([]);


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

  useEffect(() => {
    // Update recentUsers whenever data changes
    if (data && data.length) {
      const recentUsersData = data.slice(0, 10);
      setRecentUsers(recentUsersData);
    }
  }, [data]);


  return (
    <div className="w-full flex flex-col items-center py-5 bg-[#f5f5f5]">
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
                <TableCaption>
                  and {data.length} more
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Email</Th>
                    <Th>Name</Th>
                    <Th>City</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {recentUsers.length ? (
                    recentUsers.map((e, i) => {
                      console.log(e);
                      return e.idcard ? (
                        <Tr key={i}>
                          <Td>{e.idcard.email}</Td>
                          <Td>{e.idcard.name}</Td>
                          <Td>{e.idcard.city}</Td>
                        </Tr>
                      ) : (
                        <></>
                      );
                    })
                  ) : (
                    <>
                      <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                      </Tr>
                    </>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Grid>
    </div>
  );
}
