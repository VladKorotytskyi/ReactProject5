import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const MobileMenuBtn = styled.div`
  display: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 15px;
    flex: 1;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 35px;
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    padding: 20px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
    z-index: 100;
  }
`;

export const HeroText = styled.p`
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .user-icon {
    width: 45px;
    height: 45px;
    color: #54538f;
  }
  @media (max-width: 480px) {
    gap: 10px;
    .user-icon {
      width: 35px;
      height: 35px;
    }
  }
`;

export const HeroBtn = styled.button`
  border: none;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  width: 103px;
  height: 38px;
  border-radius: 10px;
  background-color: #ffb36c;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 10px;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 30px 20px;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  @media (max-width: 1014px) {
    width: 310px;
  }
  max-height: 90vh;
  overflow-y: auto;

  position: relative;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 10px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;

    label p {
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 4px;
      padding-left: 4px;
    }

    input {
      width: 100%;
      height: 40px;
      background: #f1f1f1;
      border: none;
      border-radius: 12px;
      padding: 0 15px;
      font-size: 14px;
      outline: none;
    }
  }

  @media (max-height: 570px) {
    padding: 20px;
    h2 {
      margin-bottom: 10px;
    }
    form {
      gap: 8px;
    }
  }
`;

export const ModalSubmitBtn = styled(HeroBtn)`
  margin: 10px auto 0;
  display: block;
  width: 107px;
  height: 35px;
  border-radius: 10px;
  background-color: #ffb36c;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: #ccc;
  cursor: pointer;
`;

export const ModalFooterText = styled.p`
  margin-top: 15px;
  font-size: 11px;
  color: #666;
  a {
    color: #000;
    font-weight: 600;
  }
`;
