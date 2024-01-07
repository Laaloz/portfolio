import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "10px 20px")};
    color: ${({ dark }) => (dark ? "#fffef9e6" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    text-decoration: none;
    border: 2px solid transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fffef9e6;
    background: linear-gradient(45deg, transparent 50%, #fffef9e6 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    transition: all 0.5s ease-in-out;

    &:hover {
        transition: all 0.5s ease-in-out;
        background-color: ${({ primary }) => (primary ? "transparent" : "#01BF71")};
        color: ${({ primary }) => (primary ? "#000" : "#01BF71")};
        background-position: right bottom;
    }
`;

