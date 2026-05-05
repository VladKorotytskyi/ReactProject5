import React from "react";
import logo from "../Images/heroLogo.png";
import instagram from "../Images/instagram.png";
import facebook from "../Images/facebook.png";
import whatsapp from "../Images/whatsapp.png";
import { FooterAddress } from "./Footer.styled";

export const Footer = () => {
  return (
    <footer style={{ background: "#ffb36c" }}>
      <div
        className="container"
        style={{
          display: "flex",
          gap: "103px",
          paddingBottom: "77px",
          paddingTop: "40px",
        }}
      >
        <img src={logo} alt="logo" />
        <div>
          <FooterAddress>Address</FooterAddress>
          <p>
            Svobody str. 35 <br /> Kyiv <br /> Ukraine
          </p>
        </div>
        <div>
          <div>
            <FooterAddress>Contact us</FooterAddress>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href=" https://www.whatsapp.com/">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
