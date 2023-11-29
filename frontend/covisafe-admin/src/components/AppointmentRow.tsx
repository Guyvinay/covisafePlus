import { DeleteIcon } from '@chakra-ui/icons';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftAddon, Select, Switch, Td, Tr, useToast } from '@chakra-ui/react';
import React, { Dispatch, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { EditAppointmentDataAction, EditAppointmentRequestBody } from '../redux/actions/types/appointmentDataTypes';
import { fetchAppointmentData, updateAppointmentData } from '../redux/actions/appointmentAction';
import { RootState } from '../redux/type';

export default function AppointmentRow({
  e,
  deleteAppointment,
  editAppointment,
  i,
  editAppointmentDisclosure,
  cancelRef,
  editref,
  deleteAppointmentLoading,
  handleDelete,
}: any) {

  const [bookingDate, setBookingDate] = useState(e.dateOfBooking);
  const [bookingStatus, setBookingstatus] = useState(e.bookingStatus);
  const [mobileNo,setMobileNo] = useState(e.mobileNo);
  const [isDisabled,setIsDisabled] = useState(true);
  const [slot,setSlot] = useState(e.slot);
  const [bookingId,setBookingId] = useState(e.bookingId);
  const editLoading: boolean = useSelector(
    (state: RootState) => state.editAppointmentData.loading
  );


  const state:RootState = useSelector((state:RootState)=>state);

  const dispatch: any = useDispatch();
  const toast = useToast();

  const handleEdit = ()=>{

    const booking: EditAppointmentRequestBody = {
      bookingId: e.bookingId,
      mobileNo: mobileNo,
      dateOfBooking: bookingDate,
      slot: slot,
      bookingStatus: bookingStatus,
    };

    const token:string = localStorage.getItem('token') || "";

    dispatch(updateAppointmentData(token,toast,booking))
    .then(()=>{
      dispatch(fetchAppointmentData(token));

      console.log(state); 
      console.log(editLoading);
      
      
      editAppointmentDisclosure.onClose();
    });

  };
  return (
    <>
      <Tr
        onClick={() => {
          editAppointmentDisclosure.onOpen();
          console.log("onopen", e);

          console.log(bookingId);
          setBookingDate(e.dateOfBooking);
          setBookingstatus(e.bookingStatus);
          setMobileNo(e.mobileNo);
          setIsDisabled(true);
          setSlot(e.slot);
          setBookingId(e.bookingId);

          // Log the state to check if it reflects the correct values
          console.log("State after click:", {
            bookingDate,
            bookingStatus,
            mobileNo,
            isDisabled,
            slot,
            bookingId,
          });
        }}
        ref={editref}
        cursor={"pointer"}
      >
        <Td className="text-black font-medium">
          <p className="py-1">{e.slot}</p>
          <div className="w-fit flex font-mono justify-center items-center text-sm text-gray-500 bg-slate-100 py-2 px-3">
            <p>#{bookingId}</p>
            {/* <div className='px-1 py-1 rounded-sm cursor-pointer bg-[#FFFF] mx-3'>
                              <FaClipboard />
                            </div> */}
          </div>
        </Td>
        <Td>
          {e.bookingStatus ? (
            <>
              <div>
                <Icon viewBox="0 0 200 200" color="green.500" boxSize={5}>
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
                <Icon viewBox="0 0 200 200" color="yellow.500" boxSize={5}>
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
        <Td className="text-sm font-medium">{e.dateOfBooking}</Td>
        <Td className="text-sm font-medium">{e.mobileNo}</Td>
        <Td>
          <Button
            bg={"red.500"}
            color={"whiteAlpha.900"}
            _hover={{
              bg: "red.300",
            }}
            onClick={(e) => {
              e.stopPropagation();
              console.log("delete button clicked");
              deleteAppointment.onOpen();
            }}
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
            isOpen={deleteAppointment.isOpen}
            leastDestructiveRef={cancelRef}
            onClose={deleteAppointment.onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent bg={"white"}>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Appointment
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
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
                    spinner={<BeatLoader size={8} color="white" />}
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
      <Drawer
        isOpen={editAppointmentDisclosure.isOpen}
        placement="right"
        onClose={editAppointmentDisclosure.onClose}
        finalFocusRef={editref}
        key={e.bookingId}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            _focusVisible={{
              outline: "2",
              outlineOffset: "2",
              outlineColor: "red.300",
            }}
          />
          <DrawerHeader>Edit appointment</DrawerHeader>

          <DrawerBody>
            <FormLabel>Booking Id</FormLabel>
            <Input placeholder="appointmentId" value={e.bookingId} disabled />
            <FormControl className="my-5">
              <FormLabel>Booking Status</FormLabel>
              <Flex className="justify-between">
                {bookingStatus ? (
                  <>
                    <div>
                      <Icon viewBox="0 0 200 200" color="green.500" boxSize={5}>
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>
                      <p className="inline px-2 font-medium text-gray-600 text-sm">
                        Booked
                      </p>
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
                <Switch
                  size="lg"
                  colorScheme="red"
                  _focus={{
                    borderColor: "red.500",
                  }}
                  isChecked={bookingStatus}
                  onChange={(e) => {
                    setBookingstatus(!bookingStatus);
                    setIsDisabled(false);
                  }}
                />
              </Flex>
            </FormControl>

            <FormControl className="my-5">
              <FormLabel>Booking Date</FormLabel>
              <Input
                type="date"
                focusBorderColor="red.500"
                placeholder="appointmentId"
                onChange={(e) => {
                  setBookingDate(e.target.value);
                  setIsDisabled(false);
                }}
                value={bookingDate}
              />
            </FormControl>

            <FormControl className="my-5">
              <FormLabel>Select slot</FormLabel>
              <Select
                focusBorderColor="red.500"
                value={slot}
                onChange={(e) => {
                  setSlot(e.target.value);
                  setIsDisabled(false);
                }}
              >
                <option value="SLOT1">SLOT 1</option>
                <option value="SLOT2">SLOT 2</option>
                <option value="SLOT3">SLOT 3</option>
              </Select>
            </FormControl>

            <FormControl className="my-5">
              <FormLabel>Mobile No</FormLabel>
              <InputGroup
                _focus={{
                  borderColor: "red.500",
                }}
              >
                <InputLeftAddon>+91</InputLeftAddon>
                <Input
                  placeholder="moble no"
                  type="number"
                  value={mobileNo}
                  focusBorderColor="red.500"
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                    setIsDisabled(false);
                  }}
                />
              </InputGroup>
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={editAppointmentDisclosure.onClose}
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
              _focusVisible={{
                outline: "2",
                outlineOffset: "2",
                outlineColor: "red.300",
              }}
              // isDisabled={isDisabled || loading}
              onClick={handleEdit}
              isLoading={editLoading}
              spinner={<BeatLoader size={8} color="white" />}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
