import React from "react";
import { IoHeartOutline, IoTrashOutline, IoReloadOutline } from "react-icons/io5";
import { Card, CardHeader, OrangeBadge, CardTemp, CardFooter } from "./Weather.styled.jsx";

export const WeatherCard = ({ weather, onRemove }) => {
  if (!weather) return null;

  return (
    <Card>
      <CardHeader>
        <span>{weather.name}</span>
        <span>{weather.sys?.country}</span>
      </CardHeader>

      <div style={{ fontSize: "26px", fontWeight: "600", marginTop: "10px" }}>
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      
      <div style={{ margin: "12px 0" }}>
        <OrangeBadge>Hourly forecast</OrangeBadge>
      </div>

      <div style={{ fontSize: "14px", color: "#666" }}>
        {new Date().toLocaleDateString('ru-RU')} | {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
      </div>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="icon"
        style={{ width: "120px" }}
      />

      <CardTemp>{Math.round(weather.main?.temp)}°C</CardTemp>

      <CardFooter>
        <IoReloadOutline />
        <IoHeartOutline color="red" />
        <OrangeBadge style={{ cursor: "pointer", fontSize: "10px" }}>See more</OrangeBadge>
        <IoTrashOutline onClick={onRemove} />
      </CardFooter>
    </Card>
  );
};