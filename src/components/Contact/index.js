import React from "react";
import { FaEnvelope, FaLocationArrow, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import {
    ContactContainer,
    ContactH2,
    ContactWrapper,
    ContactA,
    ContactP,
    ContactCard,
    SocialIcons,
    SosialMedia,
} from "./ContactElements";

const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactWrapper className="container">
                    <ContactH2>Yhteystiedot</ContactH2>

                    <ContactCard>
                        <ContactA href="mailto:laaloceesay@gmail.com"><FaEnvelope alt="mail" /> laaloceesay@gmail.com</ContactA>
                        <ContactP> <FaLocationArrow alt="location" /> Jyväskylä</ContactP>
                    </ContactCard>

                    <SocialIcons>
                        <SosialMedia>
                            <a href="https://github.com/Laaloz" target="_blank" rel="noreferrer" aria-label="Link to github">
                                <FaGithub alt="github" />
                            </a>
                        </SosialMedia>
                        <SosialMedia>
                            <a href="https://www.instagram.com/laaloz/" target="_blank" rel="noreferrer" aria-label="link to instagram">
                                <FaInstagram alt="instagram" />
                            </a>
                        </SosialMedia>
                        <SosialMedia>
                            <a href="https://www.linkedin.com/in/laaloceesay/" target="_blank" rel="noreferrer" aria-label="link to linkedin">
                                <FaLinkedin alt="linkedin" />
                            </a>
                        </SosialMedia>
                    </SocialIcons>
                </ContactWrapper>
            </ContactContainer>
        </>
    );
};

export default Contact;
