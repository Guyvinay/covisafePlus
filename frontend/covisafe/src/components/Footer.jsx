import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGlobe, faInfo, faInfoCircle, faPhone, faSyringe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="max-width">
        <div className="footer-box">
          <div>
            <p className="footer-heading">
              <FontAwesomeIcon icon={faSyringe} />
              &nbsp; Vaccination Services
            </p>
            <ul>
              <li>
                <a href="#">Register Members</a>
              </li>
              <li>
                <a href="#">Search Vaccination Centers</a>
              </li>
              <li>
                <a href="#">Book Vaccination Slots</a>
              </li>
              <li>
                <a href="#">Manage Appointment</a>
              </li>
              <li>
                <a href="#">Download Certificate</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">
              <FontAwesomeIcon icon={faGlobe} />
              &nbsp; Platforms
            </p>
            <ul>
              <li>
                <a href="#">Co-WIN International</a>
              </li>
              <li>
                <a href="#">Vaccinator</a>
              </li>
              <li>
                <a href="#">Department Login</a>
              </li>
              <li>
                <a href="#">Verify Certificates</a>
              </li>
              <li>
                <a href="#">Vaccination Statistics</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">
              <FontAwesomeIcon icon={faBook} />
              &nbsp; Resources
            </p>
            <ul>
              <li>
                <a href="#">How To Get Vaccinated</a>
              </li>
              <li>
                <a href="#">Dos and Don'ts</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">API Guidelines</a>
              </li>
              <li>
                <a href="#">Open API's</a>
              </li>
              <li>
                <a href="#">Grievance Guidelines</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp; Support
            </p>
            <ul>
              <li>
                <a href="#">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#">Certificate Corrections</a>
              </li>
              <li>
                <a href="#">Book Vaccination Slots</a>
              </li>
              <li>
                <a href="#">Manage Appointment</a>
              </li>
              <li>
                <a href="#">Download Certificate</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; Contact us
            </p>
            <ul>
              <li>
                <a href="#">Register Members</a>
              </li>
              <li>
                <a href="#">Search Vaccination Centers</a>
              </li>
              <li>
                <a href="#">Book Vaccination Slots</a>
              </li>
              <li>
                <a href="#">Manage Appointment</a>
              </li>
              <li>
                <a href="#">Download Certificate</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="last-footer flex align-middle justify-around">
          <div>
            <p>Copyright © 2021 Co-WIN. All Rights Reserved</p>
          </div>
          <div className="footer-images-div flex w-fit">
            <img
              src="./images/national-health-authority.jpg"
              className="h-20 mx-3"
              alt=""
            />
            <img
              src="./images/undp-logo-vertical.svg"
              className="h-20 mx-3"
              alt=""
            />
          </div>
          <div>
            <p>
              Terms of Service &nbsp; &nbsp;&nbsp; | &nbsp;&nbsp; Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
