import { Box, HStack, Heading } from "@chakra-ui/react";
import { IoCodeWorkingOutline } from "react-icons/io5";
import React from "react";
import { useTextStyles } from "../styles/TextStyles";

const Logo = () => {
  const { text, bigTitle } = useTextStyles();

  return (
    <HStack>
      <Box
        as={IoCodeWorkingOutline}
        fontSize={bigTitle}
        transition={"transform 0.5s ease-in-out"}
        _hover={{ transform: "rotate(180deg)" }}
      />
      <Heading as="h1" size={text} fontWeight="bold">
        Matej Štremfelj
      </Heading>
    </HStack>
  );
};

export default Logo;

// Parent: NavBar.tsx
