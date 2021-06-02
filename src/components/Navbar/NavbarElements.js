import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "white" : "transparent")};
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

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    color: #060709;
    justify-self: flex-start;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 400;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    color: #060709;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 24px;
        transform: translate(-100%, 128%);
        font-size: 1rem;
        cursor: pointer;
    }

    &:hover {
        color: #18abb1;
    }
`;

export const SosialWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 2rem 0.5rem 0 0.5rem;
    max-width: 5px;

    span {
        color: #060709;
    }

    @media screen and (max-width: 768px) {
        justify-self: flex-start;
        display: flex;
        align-items: top;
        top: 0;
        margin-right: 130px;
    }
`;

export const SosialMediaOne = styled.div`
    height: 30px;
    right: 38vw;
    cursor: pointer;
    height: 16px;
    width: 16px;

    &:hover {
        opacity: 50%;
    }
`;

export const SosialMediaTwo = styled.div`
    height: 30px;
    padding-left: 1rem;
    right: 33vw;
    cursor: pointer;
    height: 16px;
    width: 16px;

    &:hover {
        opacity: 50%;
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

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    &:hover {
        font-weight: bold;
        transition: 0.2s ease-in-out;
    }
`;
