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
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...infoData} />
            <Projects {...projectsData} />
            <Contact />
        </>
    );
};

export default Home;
