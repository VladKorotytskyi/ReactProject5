import React, { useState } from "react";
import { WeatherSearch } from "../WeatherSearch/WeatherSearch.jsx";
import { WeatherCard } from "./WeatherCard.jsx";
import { 
  CardsGrid, 
  DetailsWrapper, 
  DetailsGrid, 
  DetailItem 
} from "./Weather.styled.jsx";

// Иконки для блока деталей
import { 
  WiThermometer, WiHumidity, WiBarometer, 
  WiStrongWind, WiDaySunny, WiCloudy 
} from "react-icons/wi";

export const WeatherInfo = () => {
  const [city, setCity] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);
  
  const apikey = "5daafde39481e4637f68dbb0a430841c";

  const handleSearch = async () => {
    if (!city.trim()) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apikey}&units=metric&cnt=3`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      if (data.list) setWeatherList(data.list);
      setSelectedWeather(null); 
      setCity("");
    } catch (err) {
      alert("Error fetching weather");
    }
  };

  const handleRemove = (id) => {
    setWeatherList((prev) => prev.filter((item) => item.id !== id));
    if (selectedWeather?.id === id) setSelectedWeather(null);
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh", paddingBottom: "50px" }}>
      <WeatherSearch city={city} setCity={setCity} onSearch={handleSearch} />
      
      <CardsGrid>
        {weatherList.map((data) => (
          <WeatherCard
            key={data.id}
            weather={data}
            onRemove={() => handleRemove(data.id)}
            onSeeMore={() => setSelectedWeather(data)}
          />
        ))}
      </CardsGrid>

      {selectedWeather && (
        <DetailsWrapper>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' , fontSize: '24px', fontWeight: '500' }}>
            Weather details for {selectedWeather.name}
          </h2>
          
          <DetailsGrid>
            <DetailItem>
              <span>Feels like</span>
              <span>{Math.round(selectedWeather.main.feels_like)}°C</span>
              <WiThermometer className="icon-detail" color="#FFB36C" />
            </DetailItem>
            
            <DetailItem>
              <span>Min / Max</span>
              <span>{Math.round(selectedWeather.main.temp_min)}° / {Math.round(selectedWeather.main.temp_max)}°</span>
              <WiDaySunny className="icon-detail" color="#FFB36C" />
            </DetailItem>
            
            <DetailItem>
              <span>Humidity</span>
              <span>{selectedWeather.main.humidity}%</span>
              <WiHumidity className="icon-detail" color="#4A90E2" />
            </DetailItem>
            
            <DetailItem>
              <span>Pressure</span>
              <span>{selectedWeather.main.pressure} Pa</span>
              <WiBarometer className="icon-detail" color="#666" />
            </DetailItem>
            
            <DetailItem>
              <span>Wind speed</span>
              <span>{selectedWeather.wind.speed} m/s</span>
              <WiStrongWind className="icon-detail" color="#888" />
            </DetailItem>
            
            <DetailItem>
              <span>Condition</span>
              <span>{selectedWeather.weather[0].main}</span>
              <WiCloudy className="icon-detail" color="#FFB36C" />
            </DetailItem>
          </DetailsGrid>
        </DetailsWrapper>
      )}
    </div>
  );
};