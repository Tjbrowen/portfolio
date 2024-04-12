import React from 'react';
import {motion} from 'framer-motion';
import '../index.css';
//import global styles

import{
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

//import showcase style

import { 
    ShowcaseImageCard,
    ShowcaseParticlecontainer,
    Particle,

} from '../styles/showcase.styled';

//import react-icons



//import asset
import ShowcaseImg from '../assets/showcase-img.png';
import BackgroundImg from '../assets/particle.png';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';


const Showcase = () =>  {
    return(
        <PaddingContainer
        id="Home"
        left="3%"
        right="10%"
        top="15%"
        bottom="10%"
        >

         <FlexContainer align="left" fullWidthChild>
         
        {/* --left-content-- */}

        <motion.div
     variants={fadeInLeftVariant}
     initial="hidden"
     whileInView="visible"
        
        >
            <Heading as="h4" size="h4">Hello!</Heading>

            <Heading
            as="h2"
            size="h2"
            top="0.5rem"
            bottom="1rem"
            responsiveLeft="1rem"
            responsiveRight="1rem"
            responsiveTop="8rem"
            
            >
            I'm <BlueText>Thabo Browen</BlueText>     
            </Heading>
          

            <ParaText as="p" top="2rem" bottom="4rem">
            I take responsibility for my personal development.<br/>
            I continually evaluate and upgrade my skills <br/>so that i can stay at the 
            cutting edge of office environment.<br/> I am a natural problem solver and have<br/> 
            the potential to carry out any task on hand.
            </ParaText>

            
        
 
      
           
        </motion.div>

       {/* --right-content-- */}

       <FlexContainer 
       as={motion.div}
       variants={fadeInRightVariant}
       initial="hidden"
       whileInView="visible"
       justify="flex-end"

       
       >
        <ShowcaseParticlecontainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImg} alt="showcase" />
        </ShowcaseImageCard>
        <Particle
        as={motion.img}
        animate={{
            x: [0, 100, 0],
            rotate: 360,
            scale: [1, 0.5, 1],
        }}

        transition={{
            duration: 20,
            repeat:Infinity,
        }}
        src={BackgroundImg}
        alt="particle"
        top="-80px"
        left="10px"
        rotate="60deg"
        
        />

        <Particle

        as={motion.img}
        animate={{
        y: [0, 100, 0],
        rotate: 360,
        scale: [1, 0.8, 1],
        }}

        transition={{
        duration: 18,
        repeat:Infinity,
        }}
        src={BackgroundImg}
        alt="particle"
        top="50px"
        right="-70px"
        rotate="0deg"
        
        />

        <Particle

        as={motion.img}
        animate={{
        y: [0, -100, 0],
        rotate: 360,
        scale: [1, 0.9, 1],
        }}

        transition={{
        duration: 15,
        repeat:Infinity,
        }}
        src={BackgroundImg}
        alt="particle"
        bottom="50px"
        left="-60px"
        rotate="50deg"
        
        />       
        </ShowcaseParticlecontainer>
       </FlexContainer>
         </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase
