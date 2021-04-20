import React from 'react'
import mail from '../../images/mail-mobile.svg'
import location from '../../images/location-mobile.svg'
import phone from '../../images/phone-mobile.svg'
import {ContactContainer, ContactH1, ContactWrapper, ContactIcon, ContactP, ContactCard, Form} from './ContactElements'



const Contact = () => {

    return (
        <>
        <ContactContainer id='contact'>
            <ContactH1>Yhteystiedot</ContactH1>
            <ContactWrapper>
                <Form name="contact" netlify>            
                    <input type="text" id="fname" name="name" placeholder="nimi..." />  
                    <input type="email" id="sposti" name="email" placeholder="@sähköposti..." />  
                    <textarea id="message" name="message" placeholder="teksti..." height="30" rows="20"></textarea>
                    <input type="submit" className="send-message" value="Viesti" />           
                </Form>
                <ContactCard>
                    <ContactIcon src={mail}/>
                    <ContactP>laaloceesay@gmail.com</ContactP>
                    <ContactIcon src={phone}/>
                    <ContactP>+358 405452267</ContactP>
                    <ContactIcon src={location}/>
                    <ContactP>Jyväskylä</ContactP>  
                </ContactCard>
            </ContactWrapper>
        </ContactContainer>
        </>
    )
}

export default Contact
