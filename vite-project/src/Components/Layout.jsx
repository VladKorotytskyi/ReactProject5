import React from 'react';
import { Header } from "./Header/Header";
import { WeatherInfo } from "./WeatherInfo/WeatherInfo";
import { Articles } from "./Articles/Articles";
import { Footer } from "./Footer/Footer";   

export const Layout = () => {
    return (
        <div>
            <Header/>
            <WeatherInfo/>
            <Articles/>
            <Footer/>
        </div>
    );
}
