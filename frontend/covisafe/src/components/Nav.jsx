import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <>
      {/* <!-- header --> */}
      <div className="mheader">
        <div className="mleftlogo">
          <img src="./images/emblem-gov.svg" />
          <p>
            Ministry of Health and
            <br />
            Family Welfare
          </p>
        </div>

        <div className="mrightside">
          <button onClick={() => props.zoom[1](props.zoom[0] + 1)}>A+</button>
          <button onClick={() => props.zoom[1](100)}>A</button>
          <button
            onClick={() =>
              props.zoom[1]((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            A-
          </button>
          <p id="eng">English </p>
        </div>
      </div>

      {/* <!-- nav --> */}
      
      <div className="mnav h-36 items-center">
        <div className="mlogo h-fit ">
          <Link to="/">
            <img
              className="cursor-pointer"
              src="./images/mainlogo.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="mnavlist">
          <Link to="/dashboard">
            <h4>Dashboard</h4>
          </Link>
          <Link to="/service">
            <h4>Book an slot</h4>
          </Link>
          <Link to="/">
            <h4>FAQ</h4>
          </Link>
          <Link to="/">
            <h4>Admin</h4>
          </Link>
          <Link to="/signin">
            <button>Register / Signin</button>
          </Link>
        </div>
      </div>
    </>
  );
}
