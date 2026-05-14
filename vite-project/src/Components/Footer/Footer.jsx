import React from "react";
import logo from "../Images/heroLogo.png";
import instagram from "../Images/instagram.png";
import facebook from "../Images/facebook.png";
import whatsapp from "../Images/whatsapp.png";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterSection,
  FooterAddress,
  SocialLinks,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container">
        <FooterLogo src={logo} alt="logo" />

        <FooterSection>
          <FooterAddress>Address</FooterAddress>
          <p>
            Svobody str. 35 <br /> Kyiv <br /> Ukraine
          </p>
        </FooterSection>

        <FooterSection>
          <FooterAddress>Contact us</FooterAddress>
          <SocialLinks>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </SocialLinks>
        </FooterSection>
      </FooterWrapper>
    </FooterContainer>
  );
};
