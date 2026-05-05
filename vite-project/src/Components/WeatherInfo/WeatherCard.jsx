import React from "react";
import { IoHeartOutline, IoTrashOutline, IoReloadOutline } from "react-icons/io5";
import { Card, CardHeader, OrangeBadge, CardTemp, CardFooter } from "./Weather.styled.jsx";

export const WeatherCard = ({ weather, onRemove, onSeeMore }) => {
  return (
    <Card>
      <CardHeader>
        <span>{weather.name}</span>
        <span>{weather.sys?.country}</span>
      </CardHeader>

      <div style={{ fontSize: "28px", fontWeight: "500", color: "#333" }}>
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      
      <div style={{ display: "flex", gap: "10px" }}>
        <OrangeBadge as="div" style={{ cursor: 'default' }}>Hourly forecast</OrangeBadge>
        <OrangeBadge as="div" style={{ opacity: 0.6, cursor: 'default' }}>Weekly forecast</OrangeBadge>
      </div>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather"
        style={{ width: "100px" }}
      />

      <CardTemp>{Math.round(weather.main?.temp)}°C</CardTemp>

      <CardFooter>
        <IoReloadOutline />
        <IoHeartOutline color="#ff4d4d" />
        
        <OrangeBadge onClick={onSeeMore} style={{ fontSize: "10px", padding: "6px 12px" }}>
          See more
        </OrangeBadge>
        
        <IoTrashOutline onClick={(e) => { e.stopPropagation(); onRemove(); }} />
      </CardFooter>
    </Card>
  );
};