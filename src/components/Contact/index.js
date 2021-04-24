import React from "react";
import mail from "../../images/mail-mobile.svg";
import location from "../../images/location-mobile.svg";
import {
    ContactContainer,
    ContactH1,
    ContactWrapper,
    ContactIcon,
    ContactP,
    ContactCard,
    Form,
} from "./ContactElements";

const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactH1>Yhteystiedot</ContactH1>
                <ContactWrapper>
                    <Form
                        name="contact v1"
                        method="post"
                        data-netlify="true"
                        onSubmit="submit"
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value="contact v1"
                        />
                        <input type="text" name="name" placeholder="nimi..." />
                        <label htmlFor="email">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="@sähköposti..."
                            />
                        </label>

                        <textarea
                            name="message"
                            placeholder="teksti..."
                            height="30"
                            rows="20"
                        ></textarea>
                        <input
                            type="submit"
                            className="send-message"
                            value="Viesti"
                        />
                    </Form>
                    <ContactCard>
                        <ContactIcon src={mail} />
                        <ContactP>laaloceesay@gmail.com</ContactP>
                        <ContactIcon src={location} />
                        <ContactP>Jyväskylä</ContactP>
                    </ContactCard>
                </ContactWrapper>
            </ContactContainer>
        </>
    );
};

export default Contact;
