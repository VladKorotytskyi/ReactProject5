import styled from "styled-components";

export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  padding: 0 20px 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  background: #E5E5E5;
  border-radius: 30px;
  padding: 25px;
  color: #333;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  min-height: 420px;
  box-sizing: border-box;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
`;

export const CardTemp = styled.h2`
  font-size: 48px;
  margin: 10px 0;
  font-weight: 600;
`;

export const OrangeBadge = styled.button`
  background: #FFB36C;
  padding: 8px 14px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  color: #333;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ffa04d;
    transform: scale(1.05);
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 15px;

  svg {
    font-size: 22px;
    cursor: pointer;
    color: #555;
    transition: transform 0.2s;
    &:hover { transform: scale(1.2); color: #000; }
  }
`;

///* Стили для секции деталей, которая появляется при клике на "See more" */

export const DetailsWrapper = styled.div`
  background: #E8E8E8;
  margin: 20px auto 50px;
  padding: 40px;
  border-radius: 40px;
  max-width: 900px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  /* Анимация плавного появления */
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailItem = styled.div`
  background: #D9D9D9;
  padding: 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: background 0.3s;

  &:hover { background: #cfcfcf; }

  span:first-child {
    font-size: 13px;
    font-weight: 600;
    color: #666;
  }
  span:nth-child(2) {
    font-size: 22px;
    font-weight: 700;
    color: #222;
  }
  .icon-detail {
    font-size: 40px;
    color: #444;
  }
`;