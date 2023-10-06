import React from 'react'
import User from './icons/User'
import { Flex } from '@chakra-ui/react'

export default function DashBoard() {
  return (
    <div>
      <Flex>
        <Flex shadow={"md"} justify={"space-around"}>
          <div>
            <h2 className='font-bold font-sans text-2xl'>12</h2>
            <span>Users</span>
          </div>
          <div className="w-16">
            <User w={50} h={50} />
          </div>
        </Flex>
        <Flex shadow={"md"} justify={"space-around"}>
          <div>
            <h2>12</h2>
            <span>Users</span>
          </div>
          <div className="w-16">
            <User w={50} h={50} />
          </div>
        </Flex>
        <Flex shadow={"md"} justify={"space-around"}>
          <div>
            <h2>12</h2>
            <span>Users</span>
          </div>
          <div className="w-16">
            <User w={50} h={50} />
          </div>
        </Flex>
        <Flex shadow={"md"} justify={"space-around"}>
          <div>
            <h2>12</h2>
            <span>Users</span>
          </div>
          <div className="w-16">
            <User w={50} h={50} />
          </div>
        </Flex>
      </Flex>
    </div>
  );
}
