import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {StyledContactForm} from "../../styles/Footer.styled";
import { fadeInBottomVariant } from '../../utils/Variants';
import {motion} from 'framer-motion';

import {
  PaddingContainer,
  Heading,
  BlueText,
  
  } from '../../styles/Global.styled'

// npm i @emailjs/browser


   

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tvt85ui",
        "template_8kaygyf",
        form.current,
        "jm2sqWni85ebHQXih"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  
 
  return (
    <div class="center">

    <StyledContactForm top="3rem" >
      <form ref={form} onSubmit={sendEmail}>
        <label class="name1">Name</label>
        <input type="text" name="to_name" class="change" />
        <label class="email">Email</label>
        <input type="email" name="from_name" class="change" />
        <label class="message">Message</label>
        <textarea name="message" class="change" />
        <input type="submit" value="Send" />
      </form>
    
    </StyledContactForm>
    </div>
  );
};

export default Footer;
        



