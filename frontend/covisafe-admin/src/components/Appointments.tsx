import { DeleteIcon, SmallAddIcon, EditIcon } from "@chakra-ui/icons";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Flex, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Skeleton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAppointmentData, deleteAppointmentData, fetchAppointmentData } from '../redux/actions/appointmentAction';
import { FaClipboard } from "react-icons/fa";
import { RootState } from '../redux/type';
import { BeatLoader } from 'react-spinners';

export default function Appointments() {
  const dispatch: any = useDispatch();
  const toast = useToast();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const appointmentData = useSelector(
    (state: RootState) => state.appointmentData.data
  );
  const loading: boolean = useSelector(
    (state: RootState) => state.appointmentData.loading
  );

  const addAppointmentLoading: boolean = useSelector(
    (state: RootState) => state.addAppointmentData.loading
  );
  const deleteAppointmentLoading: boolean = useSelector(
    (state: RootState) => state.appointmentDelete.loading
  );
  const [slot, setSlot] = useState('SLOT1');
  
  const [vaccinationCenterId,setVaccinationCenterId]= useState("");
  const [userId,setUserId] = useState("");
  const [mobileNo, setMobileNo] = useState('');

  // const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteAppointment = useDisclosure();
  const editAppointment = useDisclosure();
  const addAppointmentDisclosure = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);

  const handleDelete = (e: any, id: string, onclose: OnCloseHandler) => {
   

    const token: string = localStorage.getItem("token") || "";

    dispatch(deleteAppointmentData(token, id,toast))
    .then(()=>{
       dispatch(fetchAppointmentData(token));
        if (onclose) {
          onclose.call(window, e);
        }
    })
    
  };  

  const handleAdd = (e:any,onclose:OnCloseHandler) =>{
   

    const token: string = localStorage.getItem('token') || '';

    const body = { mobileNo: mobileNo, slot: slot };

    dispatch(addAppointmentData(token,userId,vaccinationCenterId,body,toast))
    .then(
      ()=>{
         if (onclose) {
           onclose.call(window, e);
         }
      }
    )
  }

  useEffect(() => {
    console.log('useeffect called again');
    console.log('\n');
    
    const token: string = localStorage.getItem("token") || "";
    dispatch(fetchAppointmentData(token));
  }, [dispatch]);

  
  

  type OnCloseHandler = (event: Event) => void;

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
            onClick={addAppointmentDisclosure.onOpen}
            ref={finalRef}
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
                          <div className="flex w-full gap-7">
                            <Button
                              bg={"red.500"}
                              color={"whiteAlpha.900"}
                              _hover={{
                                bg: "red.300",
                              }}
                              onClick={deleteAppointment.onOpen}
                              _focusVisible={{
                                outline: "2",
                                outlineOffset: "2",
                                outlineColor: "red.300",
                              }}
                              rightIcon={<DeleteIcon />}
                            >
                              Delete
                            </Button>
                            <Button
                              bg={"red.500"}
                              color={"whiteAlpha.900"}
                              _hover={{
                                bg: "red.300",
                              }}
                              onClick={editAppointment.onOpen}
                              _focusVisible={{
                                outline: "2",
                                outlineOffset: "2",
                                outlineColor: "red.300",
                              }}
                              rightIcon={<EditIcon />}
                            >
                              Edit
                            </Button>
                          </div>
                          <AlertDialog
                            isOpen={deleteAppointment.isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={deleteAppointment.onClose}
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
                                  <Button
                                    ref={cancelRef}
                                    onClick={deleteAppointment.onClose}
                                    _focusVisible={{
                                      outline: "2",
                                      outlineOffset: "2",
                                      outlineColor: "red.300",
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    colorScheme="red"
                                    onClick={(event) =>
                                      handleDelete(
                                        event,
                                        e.bookingId,
                                        deleteAppointment.onClose
                                      )
                                    }
                                    isLoading={deleteAppointmentLoading}
                                    spinner={
                                      <BeatLoader size={8} color="white" />
                                    }
                                    _focusVisible={{
                                      outline: "2",
                                      outlineOffset: "2",
                                      outlineColor: "red.300",
                                    }}
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
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={addAppointmentDisclosure.isOpen}
        onClose={addAppointmentDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add an appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>User Id</FormLabel>
              <Input
                ref={initialRef}
                borderRadius={"md"}
                required={true}
                focusBorderColor="red.500"
                placeholder="Enter user id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Vaccination center Id</FormLabel>
              <Input
                placeholder="Enter vaccination center id"
                borderRadius={"md"}
                required={true}
                focusBorderColor="red.500"
                value={vaccinationCenterId}
                onChange={(e) => setVaccinationCenterId(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Mobile no.</FormLabel>
              <Input
                placeholder="Enter  mobile number "
                borderRadius={"md"}
                required={true}
                focusBorderColor="red.500"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Vaccination center Id</FormLabel>
              <Select
                placeholder="Select slot"
                focusBorderColor="red.500"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
              >
                <option value="SLOT1">SLOT 1</option>
                <option value="SLOT2">SLOT 2</option>
                <option value="SLOT3">SLOT 3</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              background={"red.600"}
              isLoading={addAppointmentLoading}
              spinner={<BeatLoader size={8} color="white" />}
              color={"white"}
              _hover={{
                bgColor: "red.300",
              }}
              onClick={(event) =>
                handleAdd(event, addAppointmentDisclosure.onClose)
              }
              _focusVisible={{
                outline: "2",
                outlineOffset: "2",
                outlineColor: "red.300",
              }}
            >
              Add
            </Button>
            <Button
              onClick={addAppointmentDisclosure.onClose}
              _focusVisible={{
                outline: "2",
                outlineOffset: "2",
                outlineColor: "red.300",
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
