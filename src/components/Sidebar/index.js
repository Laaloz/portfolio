import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            activeClass="active"
                        >
                            about
                        </SidebarLink>
                        <SidebarLink
                            to="blog"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            activeClass="active"
                        >
                            blog
                        </SidebarLink>
                        <SidebarLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            activeClass="active"
                        >
                            contact
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    );
}

export default Sidebar;
