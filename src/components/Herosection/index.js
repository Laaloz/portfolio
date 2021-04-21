import React from "react";
import {
    HeroContainer,
    HeroBg,
    BgPicture,
    HeroH1,
    Hero1H1,
    CodeImg,
    HeroWrapper,
} from "./HeroElements";

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <BgPicture />
                </HeroBg>
                <HeroWrapper>
                    <HeroH1>
                        Design<br></br>&<br></br>Photography
                    </HeroH1>
                    <Hero1H1>
                        Code
                        <CodeImg />
                    </Hero1H1>
                </HeroWrapper>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
