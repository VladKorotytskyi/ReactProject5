import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  MobileMenuBtn,
  UserSection,
  HeroText,
  HeroBtn,
  ModalOverlay,
  ModalContent,
  CloseBtn,
  ModalSubmitBtn,
  ModalFooterText,
} from "./Header.styled";
import heroLogo from "../Images/heroLogo.png";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderContainer>
      <div className="container">
        <Nav>
          <Logo src={heroLogo} alt="logo" />

          <MobileMenuBtn onClick={toggleMenu}>
            Menu {isMenuOpen ? "✕" : ">"}
          </MobileMenuBtn>

          <NavLinks $isOpen={isMenuOpen}>
            <HeroText>Who we are</HeroText>
            <HeroText>Contacts</HeroText>
            <HeroText>Menu</HeroText>
          </NavLinks>

          <UserSection>
            <HeroBtn onClick={toggleModal}>Sign Up</HeroBtn>
            <FaUserCircle className="user-icon" />
          </UserSection>
        </Nav>

        {isModalOpen && (
          <ModalOverlay onClick={toggleModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseBtn onClick={toggleModal}>&times;</CloseBtn>
              <h2>Sign up</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <label>
                  <p>Username</p>
                  <input type="text" placeholder="Username" />
                </label>

                <label>
                  <p>E-Mail</p>
                  <input type="email" placeholder="E-Mail" />
                </label>

                <label>
                  <p>Password</p>
                  <input type="password" placeholder="Password" />
                </label>

                <ModalSubmitBtn type="submit">Sign up</ModalSubmitBtn>
              </form>

              <ModalFooterText>
                Already have an account? <a href="#">Log In</a>
              </ModalFooterText>
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </HeaderContainer>
  );
};
