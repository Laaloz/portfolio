import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    border-radius: 15px;
    background: ${({ primary }) => (primary ? "#44769f" : null)};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "10px 20px")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? " 20px" : "16px")};
    outline: none;
    text-decoration: none;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.12);
        transition: all 0.2s ease-in-out;
        background-color: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    }
`;
