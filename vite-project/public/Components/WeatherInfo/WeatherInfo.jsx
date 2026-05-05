import React from "react";
import { useState } from "react";
import { WeatherSearch } from "../WeatherSearch/WeatherSearch.jsx";
import { WeatherCard } from "./WeatherCard";
import { CardsGrid } from "./Weather.styled.jsx";

export const WeatherInfo = () => {
  const [city, setCity] = useState(""); 
  const [weatherList, setWeatherList] = useState([]);
  
  // Рекомендуется выносить ключ в .env файл, но оставляем здесь для работы
  const apikey = "5daafde39481e4637f68dbb0a430841c";

  const handleSearch = async () => {
    // Проверка на пустую строку
    if (!city.trim()) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      // Проверяем, нет ли уже такого города в списке по его ID
      const isExist = weatherList.some((item) => item.id === data.id);

      if (isExist) {
        alert("This city is already in your list!");
      } else {
        // Добавляем новый город в начало списка
        setWeatherList((prev) => [data, ...prev]);
      }

      // Очищаем поле ввода
      setCity(""); 
    } catch (err) {
      alert("Error: City not found. Please check the spelling.");
      console.error(err);
    }
  };

  const handleRemove = (id) => {
    setWeatherList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      {/* Передаем пропсы. В WeatherSearch обязательно деструктурируйте их! */}
      <WeatherSearch 
        city={city} 
        setCity={setCity} 
        onSearch={handleSearch} 
      />
      
      <CardsGrid>
        {weatherList.map((data) => (
          <WeatherCard 
            key={data.id} 
            weather={data} 
            onRemove={() => handleRemove(data.id)} 
          />
        ))}
      </CardsGrid>
    </div>
  );
};