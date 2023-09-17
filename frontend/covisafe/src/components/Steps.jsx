import React from 'react'
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function Steps() {
    const infoArr = [
      {
        step: 1,
        img: "./images/Step_1.svg",
        text1: "Book an Appointment on",
        text2: "Co-WIN or Walk into any Vaccination Center",
        text3: "How to Book Your",
        text4: "Appointment on Co-WIN?",
        arrow: true,
      },
      {
        step: 2,
        img: "./images/Step_2.svg",
        text1: "Get Your Vaccination Safely ",
        text2: "at the Time of Your Appointment",
        text3: "Dos And Dont's For Getting ",
        text4: " Vaccinated",
        arrow: true,
      },
      {
        step: 2,
        img: "./images/Step_2.svg",
        text1: "Download Your Vaccination Certificate",
        text2: "from Co-WIN and Wait for Dose #2",
        text3: "Download Your Vaccination ",
        text4: "Certificate",
        arrow: false,
      },
    ];

  return (
    <div
      className="w-full flex items-center flex-col"
    >
      <h2 className='font-bold text-mainColor py-7' style={{fontSize:'30px'}}>Get Vaccinated in 3 Easy Steps</h2>
      <div className="flex justify-around w-3/4 gap-7 py-10">
        {infoArr.map((e, i) => {
          return (
            <>
              <div className="shadow-custom w-1/4">
                <div className="px-5 py-1 border-mainColor border-2 w-fit rounded-lg  mx-auto text-mainColor font-semibold  relative bottom-4 bg-[#FFFFFF]">
                  Step {i + 1}
                </div>
                <div className="flex justify-center items-center">
                  <img src={e.img} alt="step 1" />
                </div>
                <div className="bg-mainColor px-5 py-7 text-[#ffffffdd] text-center">
                  <p>
                    {e.text1}
                    <br />
                    {e.text2}
                  </p>
                </div>
                <div className="text-center px-5 py-7">
                  <p>
                    {e.text3}
                    <br />
                    {e.text4}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {e.arrow && <ArrowRightIcon boxSize={10} color="#ed0331ff" />}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}