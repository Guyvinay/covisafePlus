import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Steps from './Steps';
import Para from './Para';


export default function Main() {
  return (
    <>
      <div className="grid grid-cols-2 align-middle place-content-center w-full">
        <div className="quote pl-28 ml-28 flex my-auto">
          <div className="h-fit">
            <div>
              <h3
                className="font-sans font-bold max-2xl:text-4xl flex flex-wrap text-5xl my-10"
                style={{ lineHeight: "4rem" }}
              >
                Historic & Unparalleled Achievement !
                <br />
                India’s Glorious Journey of
              </h3>
            </div>
            <div className="border-red-500 border-2 flex rounded-md uppercase w-fit font-bold text-red-500 max-2xl:text-4xl my-8 py-4 px-8 text-5xl">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-500 my-auto max-2xl:text-2xl text-4xl"
              />
              &nbsp; 200 CRORE VACCINATIONS
            </div>
            <div className="my-8">
              <p className="font-semibold">
                "India is set to defeat Covid-19. Every Indian is making it
                possible."
              </p>
              <p className="font-normal">- PM Narendra Modi</p>
            </div>
          </div>
        </div>
        <div className="photo flex align-middle w-2/3 justify-center mx-auto my-8 ">
          <img src="./images/independance.svg" alt="Independence" />
        </div>
      </div>
      <div>
        <Steps />
      </div>
      <Para />
    </>
  );
}
