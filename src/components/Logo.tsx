import { Box, HStack, Heading } from "@chakra-ui/react";
import { PiGitlabLogoSimpleFill } from "react-icons/pi";
import React from "react";
import { useTextStyles } from "../styles/TextStyles";

const Logo = () => {
  const { text, bigTitle } = useTextStyles();

  return (
    <HStack>
      <Box as={PiGitlabLogoSimpleFill} fontSize={bigTitle} />
      <Heading as="h1" size={text} fontWeight="bold">
        Portfolio12321312
      </Heading>
    </HStack>
  );
};

export default Logo;

// Parent: NavBar.tsx
