import {
  Box,
  HStack,
  Heading,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import { PiGitlabLogoSimpleFill } from "react-icons/pi";

import React from "react";

const Logo = () => {
  const isSmallScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <HStack>
      <Box
        as={PiGitlabLogoSimpleFill}
        fontSize={isSmallScreen ? "50px" : "30px"}
      />
      <Heading as="h1" size={isSmallScreen ? "xl" : "lg"} fontWeight="bold">
        Portfolio
      </Heading>
    </HStack>
  );
};

export default Logo;

// Parent: NavBar.tsx
