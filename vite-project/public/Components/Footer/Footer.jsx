import React from "react";
import logo from "../Images/heroLogo.png";
import instagram from "../Images/instagram.png";
import facebook from "../Images/facebook.png";
import whatsapp from "../Images/whatsapp.png";

export const Footer = () => {
  return (
    <footer style={{ background: "#ffb36c" }}>
      <div className="container">
        <img src={logo} alt="logo" />
        <h3>Address</h3>
        <p>
          Svobody str. 35 <br /> Kyiv <br /> Ukraine
        </p>
        <h3>Contact us</h3>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={whatsapp} alt="WhatsApp" />
      </div>
    </footer>
  );
};
