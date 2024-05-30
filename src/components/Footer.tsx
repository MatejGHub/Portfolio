import {
  HStack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";

import SocialLinks from "./SocialLinks";

const Footer = () => {
  const bgColor = useBreakpointValue({
    base: "transparent",
    md: useColorModeValue("gray.100", "gray.700")
  });

  return (
    <>
      <HStack
        bg={bgColor}
        w="100%"
        justifyContent="space-between"
        textAlign="center"
        p={5}
      >
        <Text>© 2024 Matej Štremfelj, Inc. All rights reserved.</Text>
        <HStack>
          <SocialLinks />
        </HStack>
      </HStack>
    </>
  );
};

export default Footer;
