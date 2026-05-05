import styled from "styled-components";

export const HeroSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.$bg});
  background-position: center;
  background-size: cover;
  min-height: 550px;
  padding: 60px 20px;
  text-align: center;
  color: white;
`;

export const SearchTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 50px;
`;

export const InfoFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-bottom: 60px;
`;

export const SearchSubTitle = styled.h3`
  font-weight: 300;
  font-size: 22px;
  line-height: 1.4;
  text-align: left;
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 90px;
  background-color: white;
`;

export const SearchInput = styled.input`
  border-radius: 12px 0 0 12px;
  width: 550px;
  height: 48px;
  background: rgba(217, 217, 217, 0.9);
  border: none;
  padding-left: 25px;
  font-size: 16px;
  outline: none;
`;

export const SearchBtn = styled.button`
  border-radius: 0 12px 12px 0;
  width: 55px;
  height: 48px;
  background: #FFB36C;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #000;
`;