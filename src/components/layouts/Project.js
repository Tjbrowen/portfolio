import React from 'react';
import {motion} from "framer-motion";
//import global styles
import{
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../../styles/Global.styled';

//import project styles
import {
    TechStackCard,
    ProjectImage,
    ProjectImagContainer,
} from '../../styles/MyProject.styled';
//import assets 

import { FaGithub } from 'react-icons/fa';
import {fadeInLeftVariant, fadeInRightVariant} from '../../utils/Variants';
const Project = ({data}) => {
    return(
        <FlexContainer 
        direction={data.reverse ? 'row-reverse' : false}
        fullWidthChild
        >
        <motion.div
        variants={data.reverse ? fadeInRightVariant:
            fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        >
         <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
           {data.project_name}
          </Heading>
          <IconContainer color="black" size="2rem">
           <FaGithub/>   
   
          </IconContainer>
         </FlexContainer>
         <PaddingContainer top= "1rem">

            <FlexContainer gap="1.5rem">
          {data.tech_stack.map((stack) => (
           <TechStackCard>{stack}</TechStackCard>
          ))}
            
            </FlexContainer>

         </PaddingContainer>
         <ParaText top="1.5rem" bottom="2rem">
            {data.project_desc}
         </ParaText>
         <a href="https://www.bpsglobal.biz" target="_blank">
            <Button>Visit Website</Button>
         </a>
         

        </motion.div>
   {/*--right-section-project-image*/}

        <ProjectImagContainer 
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant:
        fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify={data.reverse ? "flex-start" : "flex-end"}
        
        >
            <ProjectImage src={data.project_img} alt={data.
                project_name}/>
        </ProjectImagContainer>
       </FlexContainer>   
    )
}
export default Project