import React, { useState, useEffect, useRef } from "react";
import { useTrail, a } from "@react-spring/web";

import {
    HeroContainer,
    HeroBg,
    BgPicture,
    HeroH1,
    HeroH3,
    HeroWrapper,
    HeroContent,
} from "./HeroElements";

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 1200, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
    });

    return (
        <div>
            {trail.map(({ x, ...style }, index) => (
                <a.div
                    key={index}
                    style={{
                        ...style,
                        transform: x.to((x) => `translate3d(${x}%,0,0)`),
                        marginBottom: "16px",
                    }}
                >
                    {items[index]}
                </a.div>
            ))}
        </div>
    )
}

const HeroSection = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
    const imageRef = useRef(null);
    const open = true;


    useEffect(() => {
        const words = ["Koodari", "Elektroniikka-intoilija", "Maastopyöräilijä", String.raw`¯\_(ツ)_/¯`];
        const word = words[textIndex];
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex <= word.length) {
                setCurrentWord(word.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
                }, 2000); // Delay before moving to the next word
            }
        }, 100); // Typing speed

        return () => {
            clearInterval(interval);
        };
    }, [textIndex]);

    const handleMouseMove = (e) => {
        const container = e.currentTarget;
        let overlay = container.querySelector(".overlay");

        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "overlay";
            container.appendChild(overlay);
        }

        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;

        const posY = (y / container.offsetHeight) * 100;

        // Update grayscale filter based on cursor position using imageRef
        if (imageRef.current) {
            imageRef.current.style.filter = `grayscale(${100 - posY}%)`;
        }

        // Remove the overlay when the cursor leaves the container
        container.addEventListener("mouseleave", () => {
            // Check if overlay exists before removing it
            if (overlay && overlay.parentNode === container) {
                container.removeChild(overlay);
            }

            // Reset the filter using imageRef
            if (imageRef.current) {
                imageRef.current.style.filter = "grayscale(0%)";
            }
        });
    };

    return (
        <>
            <HeroContent className="hero-section">
                <HeroContainer className="container">
                    <HeroWrapper className="entry-content">
                        <Trail open={open}>
                            <HeroH3>Hei! Olen</HeroH3>
                            <HeroH1>Laalo Ceesay</HeroH1>
                            <HeroH3>{currentWord}</HeroH3>
                        </Trail>
                    </HeroWrapper>

                    <HeroBg>
                        <BgPicture ref={imageRef} onMouseMove={handleMouseMove} />
                    </HeroBg>
                </HeroContainer>
            </HeroContent>
        </>
    );
};

export default HeroSection;
