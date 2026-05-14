import styled from "styled-components";

export const ForecastContainer = styled.div`
  background: #e8e8e8;
  margin: 20px auto;
  padding: 30px;
  border-radius: 40px;
  max-width: 900px;
  width: 95%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ForecastTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
  margin-left: 10px;
  text-align: left;
`;

export const ForecastRow = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 600px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const DayInfo = styled.div`
  flex: 1;
  font-weight: 500;
  color: #444;
  text-align: left;
`;

export const TempInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-weight: 600;
  color: #333;

  img {
    width: 45px;
    height: 45px;
  }
`;

export const ConditionText = styled.div`
  flex: 1;
  text-align: right;
  color: #555;
  font-weight: 400;
`;
