import React from "react";
import ResponsiveDesign from "../assets/certificates/CSS.jpg";
import HTML from "../assets/certificates/HTML.jpg";
import Javascript from "../assets/certificates/Javascript.jpg";
import PromptEngineering from "../assets/certificates/PromptEngineering.jpg";
import ReactJS from "../assets/certificates/ReactDevelopment.jpg";
import ReactJSMosh from "../assets/certificates/ReactMosh.jpg";
import CSS from "../assets/certificates/ResponsiveDesign.jpg";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Image,
  Heading
} from "@chakra-ui/react";

const certificates = [
  { name: "React Development", image: ReactJS },
  { name: "Responsive Design", image: ResponsiveDesign },
  { name: "Javascript", image: Javascript },
  { name: "Prompt Engineering", image: PromptEngineering },
  { name: "ReactJS", image: ReactJSMosh },
  { name: "CSS", image: CSS },
  { name: "HTML", image: HTML }
];

const Certificates = () => {
  return (
    <>
      <Heading ms={4} mb={3} fontSize="xl">
        Online Courses
      </Heading>
      {certificates.map((certificate, id) => {
        return (
          <AccordionItem key={id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {certificate.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Image src={certificate.image} alt="Education" />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </>
  );
};

export default Certificates;
