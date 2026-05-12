import React from "react";
import { Header } from "./Header/Header";
import { WeatherInfo } from "./WeatherInfo/WeatherInfo";
import { Articles } from "./Articles/Articles";
import { Footer } from "./Footer/Footer";
import { Nature } from "./Nature/Nature";

export const Layout = () => {
  return (
    <div>
      <Header />
      <WeatherInfo />
      <Articles />
      <Nature />
      <Footer />
    </div>
  );
};
