import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Image
} from "@chakra-ui/react";
import React from "react";
import ComputerSchool from "../assets/school/School.jpg";

const School = () => {
  return (
    <Box mb={5}>
      <Heading mb={2} ms={4} fontSize={"xl"}>
        School
      </Heading>
      <AccordionItem borderBottom={"1px solid gray.100"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Računalnikar
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Image src={ComputerSchool} />
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
};

export default School;
