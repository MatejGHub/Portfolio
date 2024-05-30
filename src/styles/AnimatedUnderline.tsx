import { Box } from "@chakra-ui/react";
import React from "react";

const AnimatedUnderlineText = ({ children, ...props }) => (
  <Box
    position="relative"
    display="inline-block"
    _hover={{ "& span": { transform: "scaleX(1)" } }}
    {...props}
  >
    {children}
    <Box
      as="span"
      position="absolute"
      bottom="0"
      left="0"
      height="1.5px"
      width="100%"
      backgroundColor="currentcolor"
      transform="scaleX(0)"
      transformOrigin="left"
      transition="transform 0.3s ease-in"
    />
  </Box>
);

export default AnimatedUnderlineText;
