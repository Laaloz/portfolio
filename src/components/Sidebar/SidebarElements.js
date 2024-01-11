import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100vw;
    background: white;
    display: grid;
    align-items: center;
    padding: 2rem;
    top: 80px;
    right: 100vw;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
    border-top: 1px solid gray;
    transition: 0.1s ease-in-out;
    opacity: ${({ $isopen }) => ($isopen ? "100%" : "0")};
    right: ${({ $isopen }) => ($isopen ? "0" : "-100%")};

    &.nav-black {
        box-shadow: 0 2px 5px 0 rgba(255, 255, 255, 0.16);
    }
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3);
    text-align: center;
`;

export const SidebarWrapper = styled.div`
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: black;
    cursor: pointer;
    padding: 1.5rem;

    &.active {
        text-decoration: underline;
    }
`;
