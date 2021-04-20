import styled from 'styled-components'
import imageOne from '../../images/tausta-webbi.jpg'

export const ContactContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${imageOne});
    position: relative
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 768px) {
        height: 800px;
    }

    @media screen and (max-width: 480px) {
        height: 900px;
    }
`

export const ContactWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0;
    }
}
`

export const Form = styled.form`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 50px;
    opacity: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    textarea {
        max-height: 300px;
        max-width: 250px;
        margin: 15px 0 10px 0;
        padding: 5px 10px;
        border-radius: 8px;
    }

    input {
        padding: 0 10px;
        max-height: 50px;
        max-width: 250px;
        margin: 5px;
        border: none;
        border-radius: 8px;
    } 

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    input[type="submit"] {
        width: 70px;
        height: 25px;
        border-radius: 8px;

        &:hover {
            background-color: #816484;
            color: white;
            transform: scale(1.12);
            transition: all 0.2s ease-in-out;
        }
    }

    @media screen and (min-width: 768px) {
        input {
            width: 300px;
        }

        textarea {
            width: 300px;
        }
    }
`

export const ContactCard = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    opacity: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (min-width: 768px) {
        height: 340px;
        width: 350px;
        padding-top: 60px;
    }
`

export const ContactIcon = styled.img`
    height: 20px;
    width: 20px;
    margin: 15px 0 2px 0;
`
export const ContactH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    opacity: 60%;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ContactH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ContactP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: white;
`