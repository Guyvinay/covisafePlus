import React, { useEffect, useState } from 'react'
import User from './icons/User'
import { Button, Flex, Grid, Icon, Skeleton, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, color, useToast } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/actions/usersAction';
import { FetchUserDataAction } from '../redux/actions/types/userDataTypes';
import { RootState } from '../redux/type';
import { json } from 'react-router';
import { fetchAppointmentData } from '../redux/actions/appointmentAction';

export default function DashBoard(){

  const dispatch: any = useDispatch();
  const userData = useSelector((state:RootState) => state.userData.data);
  const userAppointment = useSelector((state:RootState)=> state.appointmentData.data);
  const loading = useSelector((state:RootState)=> state.userData.loading);
  const usersLoading = useSelector((state:RootState)=> state.userData.loading);
  const toast = useToast();
  const [recentUsers, setRecentUsers] = useState<any[]>([]);
  const [recentAppointment, setRecentAppointment] = useState<any[]>([]);

  useEffect(()=>{

    const token :string  = localStorage.getItem("token") || '';
    
    if(token){

      dispatch(fetchUserData(token));
      dispatch(fetchAppointmentData(token));
      console.log(userAppointment);
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
    if (userData && userData.length) {
      const recentUsersData = userData.slice(0, 10);
      setRecentUsers(recentUsersData);
    }
  }, [userData]);

  useEffect(()=>{
    // update recentAppointment whenever data changes
    if (userAppointment && userAppointment.length) {
      const recentAppointmentData = userAppointment.slice(0,10);
      setRecentAppointment(recentAppointmentData);
    }
  },[userAppointment])

  console.log(userAppointment);
  
  return (
    <div className="w-full flex flex-col items-center py-5 ">
      <Grid
        gridTemplateColumns={"55% auto"}
        w={"90%"}
        gap={"20px"}
        justifyContent={"space-between"}
      >
        <Flex className="flex-col bg-white rounded-lg px-7 py-5 h-fit overflow-x-auto">
          <Flex className="items-center justify-between">
            <h3 className="font-semibold text-lg">Recent Appointments</h3>
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
              <Skeleton isLoaded={loading}>
                <Table variant="simple">
                  <TableCaption>and {userAppointment.length} more</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>SLOT & BookingId </Th>
                      <Th>Status</Th>
                      <Th>BookingDate</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {recentAppointment.length ? (
                      recentAppointment.map((e, i) => (
                        <Tr key={i}>
                          <Td className="text-black font-medium">
                            <p>{e.slot}</p>
                            <div className="overflow-x-auto font-mono text-sm text-gray-500">
                              #{e.bookingId}
                            </div>
                          </Td>
                          <Td>
                            {e.bookingStatus ? (
                              <>
                                <div>
                                  <Icon
                                    viewBox="0 0 200 200"
                                    color="green.500"
                                    boxSize={5}
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                    />
                                  </Icon>
                                  <p className="inline px-2 text-sm">Booked</p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div>
                                  <Icon
                                    viewBox="0 0 200 200"
                                    color="yellow.500"
                                    boxSize={5}
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                    />
                                  </Icon>
                                  <p className="inline px-2 font-medium text-gray-600 text-sm">
                                    Pending
                                  </p>
                                </div>
                              </>
                            )}
                          </Td>
                          <Td className="text-sm font-medium">
                            {e.dateOfBooking}
                          </Td>
                        </Tr>
                      ))
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
              </Skeleton>
            </TableContainer>
          </Flex>
        </Flex>
        <Flex className="flex-col bg-white rounded-lg px-7 py-5 h-fit overflow-x-auto">
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
              <Skeleton isLoaded={usersLoading}>
                <Table variant="simple" w={"full"}>
                  <TableCaption>and {userData.length} more</TableCaption>
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
                        return e.idcard ? (
                          <Tr key={i}>
                            <Td className="text-sm">{e.idcard.email}</Td>
                            <Td className="text-sm">{e.idcard.name}</Td>
                            <Td className="text-sm">{e.idcard.city}</Td>
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
              </Skeleton>
            </TableContainer>
          </Flex>
        </Flex>
      </Grid>
    </div>
  );
}
