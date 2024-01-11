import React, { useState } from "react";
import {
    SidebarContainer,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
} from "./SidebarElements";

function Sidebar({ $isopen, toggle }) {
    const [projectsActive, setProjectsActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);

    return (
        <div>
            <SidebarContainer $isopen={$isopen} onClick={toggle} className={`${projectsActive ? 'nav-black' : ''} ${contactActive ? 'nav-beige' : ''}`}>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >
                            tietoa
                        </SidebarLink>

                        <SidebarLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                            onSetActive={() => setProjectsActive(true)}
                            onSetInactive={() => setProjectsActive(false)}
                        >
                            projektit
                        </SidebarLink>

                        <SidebarLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                            onSetActive={() => setContactActive(true)}
                            onSetInactive={() => setContactActive(false)}
                        >
                            yhteystiedot
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    );
}

export default Sidebar;
