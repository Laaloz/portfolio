import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 150px;
    height: 60%;
    background: black;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen? '100%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    background: #060709;
    border-radius: 0 10px;
`

export const CloseIcon = styled(FaTimes)`
    color: #CBCBCB;

    &:hover {
        color: #18ABB1;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.8rem;
    right: 3.8rem;
    background: transparent;
    font-size: 1.6rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #CBCBCB;
    cursor: pointer;
    margin-top: 10rem;

    &:hover {
        font-size: 1.5rem;
        color: #ca51d2;
        transition: 0.2s ease-in-out;
    }
`