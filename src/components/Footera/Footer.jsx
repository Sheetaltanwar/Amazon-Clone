import React from "react";
import "./Footer.css";
import amazonLogo from "../../assets/amazonLogo.png";
export const Footer = () => {
  return (
    <>
      <div className="big-container">
        <div className="content">
          <div className="content-text">
            <p>
              <b>Get to know us</b>
            </p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>

          <div className="content-text">
            <p>
              <b>Connect With Us</b>
            </p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>

          <div className="content-text">
            <p>
              <b>Make money with us</b>
            </p>
            <p>Sell on Amazon</p>
            <p>Protect and Build your brand</p>
            <p>Become an affiliate</p>
            <p>Fulfilment by Amazon</p>
          </div>

          <div className="content-text">
            <p>
              <b>Let Us Help You</b>
            </p>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Center</p>
          </div>
        </div>
      </div>
      <div className="imageAmaze">
        <img style={{ heigth: "70px", width: "120px" }} src={amazonLogo} />
      </div>
    </>
  );
};
