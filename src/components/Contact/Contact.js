import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Container, FlexRow, PageTitle, Title } from "../Main.styled";
import {ContactContainer, FormContainer, ContactForm, SubmitButton, ResultDiv, ContactPageTitle, MapContainer, ContactInfo, Miow} from "./Contact.styled"
import miow from "../../assets/miow.svg"
import Map from "../Map";

const Result = () => {
    return (
      <p>Your message has been successfully sent. I will contact you soon.</p>
    );
  };

const Contact = () => {
    const [result, showResult] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_qv04127",
          "template_zcfssee",
          form.current,
          "user_AaojKpXZRz7YTAu7i04Pj"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      showResult(true);
    };

    return (
        <ContactContainer id="contact">
            <Container>
              <PageTitle></PageTitle>
                <FlexRow>
                  <FormContainer>
              <ContactPageTitle>
                <Title>Get in touch!</Title>
              </ContactPageTitle>
                <ContactForm ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Enter your name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              name="user_email"
              required
            />
            <input
              type="text"
              placeholder="Enter your subject"
              name="subject"
              required
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              cols="40"
              rows="7"
              required
            ></textarea>
            <ResultDiv>{result ? <Result /> : null}</ResultDiv>
            <SubmitButton>
              <button type="submit">Send</button>
            </SubmitButton>
        </ContactForm>
        </FormContainer>
        <MapContainer>
          {/* <Miow alt="" src={miow}/> */}
          <Map/>
          <ContactInfo>
            <p>Address: Baku, Azerbaijan</p>
            <p>Email: zumrudaliyeva13@gmail.com</p>
          </ContactInfo>
        </MapContainer>
                </FlexRow>
            </Container>
        </ContactContainer>
    )
}

export default Contact
