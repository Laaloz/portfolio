import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ $scrollnav }) => ($scrollnav ? "white" : "transparent")};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 10;
    transition: background 0.1s ease-in-out;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
`;

export const NavLogo = styled(LinkR)`
    color: #060709;
    justify-self: flex-start;
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: 400;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: flex;
    font-size: 1.15rem;
    cursor: pointer;
    color: #060709;

    @media screen and (min-width: 768px) {
       display: none;
    }
`;

export const SosialWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 60;

 
    span {
        color: #060709;
    }

    @media screen and (min-width: 768px) {
        margin: 0;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #060709;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.3rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 3px solid transparent;

    &.active {
        border-bottom: 3px solid #B0C3B4;
    }

    &:hover {
        text-decoration: underline;
    }
`;
