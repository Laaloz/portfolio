import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    SosialWrapper,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ $isopen, toggle }) => {
    const [$scrollnav, setScrollNav] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 10) {
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

    const navigate = useNavigate();

    const handleNavigateAndScroll = (to) => {
        // Navigate to the front page first
        navigate("/");

        // Scroll to the desired section after a short delay
        setTimeout(() => {
            const targetSection = document.getElementById(to);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200); // Adjust the delay as needed
    };

    return (
        <>
            <Nav $scrollnav={$scrollnav} className={`${projectsActive ? 'nav-black' : ''} ${contactActive ? 'nav-beige' : ''}`}>
                <NavbarContainer className="container">
                    <SosialWrapper>
                        <NavLogo to="/" onClick={toggleHome}>
                            LaaloCeesay.
                        </NavLogo>

                        <MobileIcon $isopen={$isopen} onClick={toggle}>
                            {$isopen ? <FaTimes /> : <FaBars />}
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
                                    onClick={() => handleNavigateAndScroll("about")}
                                >
                                    tietoa
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    className="nav-projects"
                                    activeClass="active"
                                    onSetActive={() => setProjectsActive(true)}
                                    onSetInactive={() => setProjectsActive(false)}
                                    onClick={() => handleNavigateAndScroll("projects")}
                                >
                                    projektit
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
                                    onSetActive={() => setContactActive(true)}
                                    onSetInactive={() => setContactActive(false)}
                                    onClick={() => handleNavigateAndScroll("contact")}
                                >
                                    yhteystiedot
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </SosialWrapper>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
