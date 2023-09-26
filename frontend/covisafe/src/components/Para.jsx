import React from 'react'
import RightPara from './RightPara';
import LeftPara from "./LeftPara";

export default function Para() {

    const paraDetails = [
      {
        image: "./images/free_covid_precaution_dose.svg",
        title: "Free COVID Precaution Dose",
        para: "Now Precaution dose for 18-59 age group free at ",
        para2:"Government Vaccination Center.",
        buttonText: "Book your Slot",
      },
      {
        image: "./images/reports-aefi.svg",
        title: "Report Side Effect",
        para: "If you have experienced any side effect after COVID-19 vaccination, it can be ",
        para2:"reported on Co-WIN using your registered mobile number.",
        buttonText: "Report Now ",
      },
      {
        image: "./images/Children_Vaccination.svg",
        title: "Children Vaccination",
        para: "Covovax vaccine is now available for Children of the age group 12+ yrs in Private Vaccination Center.",
        para2:"The time span between first and second dose of Covovax is 21 days.",
        buttonText: "Book your slot ",
      },
      {
        image: "./images/Date_Correction.svg",
        title: "Vaccination Date Correction",
        para: "If the date printed on your vaccination certificate differs from the actual date of vaccine administration, you may raise a ",
        para2:"request for correction of the same by submitting a valid proof of correct vaccination date.",
        buttonText: "Update Date",
      },
      {
        image: "./images/Precaution_dose.svg",
        title: "Precaution Dose",
        para: "All fully vaccinated adult citizens (18+ and have taken 2 doses) are eligible for precaution dose from 10/04/2022. ",
        para2:"Eligible citizens can avail precaution dose at any Government or Private Vaccination Center.",
        buttonText: "Book Your Slot",
      },
      {
        image: "./images/share_illustration.svg",
        title: "Share Your Vaccination Status",
        para: "Be a Fighter! If you are fully or partially vaccinated, you can now share your vaccination status in your social circle. ",
        para2:" Let's encourage our friends and followers in joining India's battle against COVID-19.",
        buttonText: "Share Your Status",
      },
    ];

  return (
    <div>
      {paraDetails.map((e, i) =>
        i % 2 == 0 ? (
          <LeftPara para={e} key={i} />
        ) : (
          <RightPara para={e} key={i} />
        )
      )}
    </div>
  );
}