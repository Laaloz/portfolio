import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import InfoSection from "../components/InfoSection";
import { infoData } from "../components/InfoSection/Data";
import Contact from "../components/Contact";
import Projects from "../components/Projects/Projects";
import { projectsData } from "../components/Projects/Data";

const Home = () => {
    const [$isopen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!$isopen);
    };

    return (
        <>
            <Sidebar $isopen={$isopen} toggle={toggle} />
            <Navbar $isopen={$isopen} toggle={toggle} />
            <HeroSection />
            <InfoSection {...infoData} />
            <Projects {...projectsData} />
            <Contact />
        </>
    );
};

export default Home;
