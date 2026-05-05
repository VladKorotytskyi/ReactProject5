import styled from "styled-components";

export const HeroSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.$bg});
  background-position: center;
  background-size: cover;
  min-height: 550px;
  padding: 80px 20px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-bottom: 60px;
  width: 100%;
  max-width: 800px;
`;

export const SearchSubTitle = styled.h3`
  font-weight: 300;
  font-size: 22px;
  line-height: 1.4;
  text-align: left;
  margin: 0;
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 80px;
  background-color: white;
  opacity: 0.8;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border-radius: 12px 0 0 12px;
  width: 500px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 0 25px;
  font-size: 16px;
  outline: none;
  color: #333;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const SearchBtn = styled.button`
  border-radius: 0 12px 12px 0;
  width: 60px;
  height: 50px;
  background: #FFB36C;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background: #ffa04d;
  }
  
  svg {
    color: #333;
  }
`;