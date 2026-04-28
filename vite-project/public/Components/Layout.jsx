import React from 'react';
import { Header } from "./Header/Header";
import { WeatherSearch } from "./WeatherSearch/WeatherSearch";
import { Footer } from "./Footer/Footer";   

export const Layout = () => {
    return (
        <div>
            <Header/>
            <WeatherSearch/>
            <Footer/>
        </div>
    );
}
