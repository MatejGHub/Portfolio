import React from "react";
import {
  HStack,
  Box,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";
import Logo from "./Logo";
import MenuItems from "./MenuItems";

const NavBar = () => {
  const bgColor = useBreakpointValue({
    base: "transparent",
    md: useColorModeValue("gray.100", "gray.700")
  });

  const isMediumScreen = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      as="nav"
      zIndex={1000}
      borderRadius={"30px"}
      backdropFilter="blur(5px)"
      bg={bgColor}
      position={"sticky"}
      top={5}
      m={isMediumScreen ? 5 : 2}
      padding={isMediumScreen ? 2 : 0}
    >
      <HStack
        justifyContent={"space-between"}
        paddingX={isMediumScreen ? 5 : 0}
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
