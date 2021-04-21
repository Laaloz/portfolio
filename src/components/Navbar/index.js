import React, { useState, useEffect } from "react";
import { FaBars, FaInstagram, FaGithub } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    SosialMediaOne,
    SosialMediaTwo,
    SosialWrapper,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 200) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Laaloceesay.
                    </NavLogo>
                    <SosialWrapper>
                        <SosialMediaOne>
                            <a href="https://github.com/Laaloz">
                                <span>
                                    <FaGithub />
                                </span>
                            </a>
                        </SosialMediaOne>
                        <SosialMediaTwo>
                            <a href="https://www.instagram.com/laaloz/">
                                <span>
                                    <FaInstagram />
                                </span>
                            </a>
                        </SosialMediaTwo>
                    </SosialWrapper>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                activeClass="active"
                            >
                                about
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="blog"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                activeClass="active"
                            >
                                blog
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                activeClass="active"
                            >
                                contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
