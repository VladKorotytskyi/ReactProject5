import React from "react";
import { IoSearch } from "react-icons/io5";
import background from "../Images/background.png";
import {
  HeroSection,
  SearchTitle,
  SearchSubTitle,
  SearchInput,
  SearchBtn,
  InfoFlex,
  VerticalLine,
} from "./WeatherSearch.styled.jsx";

export const WeatherSearch = ({ city, setCity, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSearch === "function") {
      onSearch();
    }
  };

  return (
    <HeroSection $bg={background}>
      <InfoFlex>
        <SearchSubTitle>
          Create your personal list of <br /> favorite cities and always be
          <br /> aware of the weather.
        </SearchSubTitle>
        <VerticalLine />
        <SearchSubTitle>
          {new Date().toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}{" "}
          <br />
          {new Date().toLocaleString("en-US", { weekday: "long" })},{" "}
          {new Date().getDate()}th
        </SearchSubTitle>
      </InfoFlex>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search location..."
          value={city || ""}
          onChange={
            (e) => setCity(e.target.value) // Убедитесь, что setCity вызывается с правильным аргументом
          }
        />
        <SearchBtn type="submit">
          <IoSearch size={25} />
        </SearchBtn>
      </form>
    </HeroSection>
  );
};
