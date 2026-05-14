import React from "react";
import {
  ForecastContainer,
  ForecastTitle,
  ForecastRow,
  DayInfo,
  TempInfo,
  ConditionText,
} from "./WeatherData.styled.jsx";

export const WeatherData = ({ forecastList }) => {
  const dailyForecast = forecastList.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <ForecastContainer>
      <ForecastTitle>8-day forecast</ForecastTitle>
      {dailyForecast.map((day, index) => (
        <ForecastRow key={index}>
          <DayInfo>{formatDate(day.dt_txt)}</DayInfo>

          <TempInfo>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="icon"
            />
            <span>
              {Math.round(day.main.temp_max)} / {Math.round(day.main.temp_min)}
              °C
            </span>
          </TempInfo>

          <ConditionText>{day.weather[0].description}</ConditionText>
        </ForecastRow>
      ))}
    </ForecastContainer>
  );
};
