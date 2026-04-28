import React from "react";
import background from "../Images/background.png";
import { IoSearch } from "react-icons/io5";
import { SearchTitle, SearchSubTitle, SearchInput, SearchBtn } from "./WeatherSearch.styled";

export const WeatherSearch = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <div className="container">
        <SearchTitle>
          Weather dashboard
        </SearchTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            marginTop: "80px",
            marginBottom: "80px",
          }}
        >
          <SearchSubTitle>
            Create your personal list of <br /> favorite cities and always be
            <br /> aware of the weather.
          </SearchSubTitle>
          <SearchSubTitle>
            October 2023 <br /> Friday, 13th
          </SearchSubTitle>
        </div>
        <form style={{display: 'flex', alignItems: "center", justifyContent: "center", marginBottom: '104px'}}>
          <label>
            <SearchInput type="text" placeholder="Search location..." />
          </label>
          <SearchBtn type="submit"><IoSearch style={{width: "25", height: "25"}} /></SearchBtn>
        </form>
      </div>
    </div>
  );
};
