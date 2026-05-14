import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #ffb36c;
  width: 100%;
  margin-top: auto;
  display: block;
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
    padding: 30px 20px;
  }
`;

export const FooterLogo = styled.img`
  width: 120px;
  height: auto;
  display: block;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #000;
    margin: 0;
  }
`;

export const FooterAddress = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin: 0 0 15px 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;

  img {
    width: 30px;
    height: 30px;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`;
