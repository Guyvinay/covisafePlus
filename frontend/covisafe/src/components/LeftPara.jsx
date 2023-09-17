import React from 'react'

export default function LeftPara(props) {
  return (
    <div className="w-full">
      <div className="w-3/4 flex justify-around mx-auto items-center flex-row-reverse">
        <div className="my-12 mx-12 py-10 w-1/3">
          <img src={props.para.image} alt="" />
        </div>
        <div>
          <h2
            style={{ fontSize: "30px" }}
            className="font-bold text-mainColor py-5"
          >
            {props.para.title}
          </h2>
          <p>{props.para.para}</p>
          <p>{props.para.para2}</p>
          <button className="bg-mainColor rounded-full px-10 py-4 font-semibold text-[#FFFFFFdd] my-5">
            {props.para.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
