import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const HeroMessage = () => {
  const fontSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });

  return (
    <Box fontSize={fontSize}>
      Hello, I'm Matej <br />
      I want to become a front-end developer
      <br />
      Have a quick peek at my portfolio
    </Box>
  );
};

export default HeroMessage;
