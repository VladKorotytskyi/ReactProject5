import styled from "styled-components";

export const CardsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: -80px; 
  padding: 0 20px 50px;
  position: relative;
`;

export const Card = styled.div`
  background: #EAEAEA;
  border-radius: 30px;
  width: 290px;
  padding: 30px 20px;
  color: #000;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
`;

export const CardTemp = styled.h2`
  font-size: 44px;
  margin: 15px 0;
  font-weight: 600;
`;

export const OrangeBadge = styled.span`
  background: #FFB36C;
  padding: 6px 18px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  svg { font-size: 24px; cursor: pointer; }
`;