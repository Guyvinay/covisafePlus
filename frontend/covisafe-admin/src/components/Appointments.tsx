import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Skeleton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'

export default function Appointments() {
  return (
    <div className="w-full bg-[#F5F5F5]">
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
            rightIcon={<PlusSquareIcon />}
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
    </div>
  );
}
