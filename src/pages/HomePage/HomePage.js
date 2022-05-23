import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import AboutUs from "../../components/AboutUs/AboutUs";
import React from 'react';

export default function HomePage() {
    return (
        <main>
            <Hero />
            <AboutUs />
        </main>
    );
}