import {
  Box,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useMediaQuery
} from "@chakra-ui/react";

import React from "react";
import ContactGeneral from "./ContactGeneral";
import ContactMessageMe from "./ContactMessageMe";
import useResponsive from "../hooks/useResponsive";

const Contact = () => {
  const { isLargerThanMD, isLargerThanSM } = useResponsive();
  return (
    <>
      <Box textAlign={"center"} marginY={"40px"}>
        <Text
          fontSize={isLargerThanSM ? "6xl" : "4xl"}
          fontWeight="bold"
          marginBottom={5}
        >
          Contact Me
        </Text>
        <SimpleGrid
          gap={10}
          fontSize="16px"
          columns={isLargerThanMD ? 2 : 1}
          paddingX={2}
        >
          <ContactGeneral />
          <ContactMessageMe />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Contact;
