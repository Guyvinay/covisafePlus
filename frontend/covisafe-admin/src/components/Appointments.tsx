import {DeleteIcon, SmallAddIcon } from '@chakra-ui/icons';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Flex, Icon, Skeleton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointmentData } from '../redux/actions/appointmentAction';
import { FaClipboard } from "react-icons/fa";
import { RootState } from '../redux/type';

export default function Appointments() {
  const dispatch: any = useDispatch();
  const appointmentData = useSelector(
    (state: RootState) => state.appointmentData.data
  );
  const loading = useSelector(
    (state: RootState) => state.appointmentData.loading
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const token: string = localStorage.getItem("token") || "";
    dispatch(fetchAppointmentData(token));
  }, [dispatch]);

  console.log(appointmentData);

  return (
    <div className="w-full bg-[#F5F5F5]">
      <Flex className="flex-col bg-white rounded-lg px-7 py-5 h-fit overflow-x-auto w-11/12 mx-auto my-5">
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
            rightIcon={
              <SmallAddIcon className="border-2 rounded-full text-lg" />
            }
          >
            Add appointment
          </Button>
        </Flex>
        <Flex>
          <TableContainer w={"full"}>
            <Skeleton isLoaded={loading}>
              <Table variant="simple">
                <TableCaption>and {appointmentData.length} more</TableCaption>
                <Thead>
                  <Tr>
                    <Th>SLOT & BookingId </Th>
                    <Th>Status</Th>
                    <Th>BookingDate</Th>
                    <Th>Mobile No.</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {appointmentData.length ? (
                    appointmentData.map((e, i) => (
                      <Tr key={i}>
                        <Td className="text-black font-medium">
                          <p className="py-1">{e.slot}</p>
                          <div className="w-fit flex font-mono justify-center items-center text-sm text-gray-500 bg-slate-100 py-2 px-3">
                            <p>#{e.bookingId}</p>
                            {/* <div className='px-1 py-1 rounded-sm cursor-pointer bg-[#FFFF] mx-3'>
                              <FaClipboard />
                            </div> */}
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
                        <Td className="text-sm font-medium">{e.mobileNo}</Td>
                        <Td>
                          <Button
                            bg={"red.500"}
                            color={"whiteAlpha.900"}
                            _hover={{
                              bg: "red.300",
                            }}
                            onClick={onOpen}
                            _focusVisible={{
                              outline: "2",
                              outlineOffset: "2",
                              outlineColor: "red.300",
                            }}
                            rightIcon={<DeleteIcon />}
                          >
                            Delete
                          </Button>
                          <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                          >
                            <AlertDialogOverlay>
                              <AlertDialogContent bg={"white"}>
                                <AlertDialogHeader
                                  fontSize="lg"
                                  fontWeight="bold"
                                >
                                  Delete Appointment
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                  Are you sure? You can't undo this action
                                  afterwards.
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                  <Button ref={cancelRef} onClick={onClose}>
                                    Cancel
                                  </Button>
                                  <Button
                                    colorScheme="red"
                                    onClick={onClose}
                                    ml={3}
                                  >
                                    Delete
                                  </Button>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialogOverlay>
                          </AlertDialog>
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
    </div>
  );
}
