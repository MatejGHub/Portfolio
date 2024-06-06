import React from "react";
import {
  HStack,
  Box,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import useResponsive from "../hooks/useResponsive";

const NavBar = () => {
  const bgColor = useBreakpointValue({
    md: useColorModeValue("gray.100", "gray.700")
  });
  const { isLargerThanSM } = useResponsive();
  return (
    <Box
      as="nav"
      zIndex={1000}
      borderRadius={"30px"}
      backdropFilter="blur(5px)"
      bg={bgColor}
      position={"sticky"}
      top={5}
      m={isLargerThanSM ? 5 : 2}
      padding={isLargerThanSM ? 2 : 0}
    >
      <HStack
        justifyContent={"space-between"}
        paddingX={isLargerThanSM ? 5 : 0}
      >
        <Logo />
        <MenuItems />
      </HStack>
    </Box>
  );
};

export default NavBar;

// Parent: App.tsx
// Children: Logo.tsx, MenuItems.tsx
