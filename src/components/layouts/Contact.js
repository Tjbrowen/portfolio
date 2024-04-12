import React from "react";
import {motion} from 'framer-motion';

//import global styles
import {
    PaddingContainer,
    Heading,
    BlueText,
    
} from '../../styles/Global.styled'

import { fadeInBottomVariant } from '../../utils/Variants';

function Contact () {
    return(
      
        <PaddingContainer
       id="Contact"
       top="5%"
       bottom="10%"
       >
        <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
        >
            MY CONTACT
        </Heading>
        
        <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
        >
           Contact <BlueText>Me Here</BlueText>
        </Heading>
        </PaddingContainer>

    );
}

export default Contact