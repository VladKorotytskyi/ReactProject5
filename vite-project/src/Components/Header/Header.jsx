import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { 
  HeroText, 
  HeroBtn, 
  Nav, 
  ModalOverlay, 
  ModalContent, 
  CloseBtn 
} from "./Header.styled";
import heroLogo from "../Images/heroLogo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container">
        <Nav>
          <div style={{ display: "flex" }}>
            <img src={heroLogo} alt="logo" />
            <div style={{ display: "flex", gap: "30px", marginLeft: "111px", marginTop: "24px" }}>
              <HeroText>Who we are</HeroText>
              <HeroText>Contacts</HeroText>
              <HeroText>Menu</HeroText>
            </div>
          </div>

          <div style={{ display: "flex", gap: "27px", marginTop: "15px" , alignItems: "center", marginBottom: "15px"}}>
            <HeroBtn onClick={toggleModal}>Sign Up</HeroBtn>
            <FaUserCircle style={{ width: "50px", height: "50px", color: "#54538f", cursor: "pointer" }} />
          </div>
        </Nav>

        {isOpen && (
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
                <HeroBtn style={{ width: "100%", marginTop: "20px" }}>Sign up</HeroBtn>
              </form>
              <p style={{ marginTop: "15px", fontSize: "12px", textAlign: "center" }}>
                Already have an account? <a href="#">Log In</a>
              </p>
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </>
  );
};