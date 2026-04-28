import styled from "styled-components";

export const HeroText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #000;
`;

export const HeroBtn = styled.button`
  border-radius: 10px;
  padding: 10px 20px;
  width: 89px;
  height: 35px;
  background: #ffb36c;
  border: none;
  font-weight: 500;
  font-size: 12px;
  color: #000;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  position: relative;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    label p {
      margin-bottom: 5px;
      font-size: 14px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;