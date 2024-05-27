import {
  HStack,
  Switch,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Box,
  MenuItem
} from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useBreakpointValue } from "@chakra-ui/react";

const MenuItems = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const isSmallScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <HStack>
      {isLargeScreen ? (
        <>
          <Switch
            colorScheme="green"
            size="lg"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          <Text fontSize="sm" fontWeight="bold">
            {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
          </Text>
        </>
      ) : (
        <Menu>
          <MenuButton as={Button}>
            <RxHamburgerMenu fontSize={isSmallScreen ? "35px" : "20px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <p>123</p>
            </MenuItem>
            <MenuItem>
              <HStack justifyContent={"center"} marginRight={3}>
                <Switch
                  colorScheme="green"
                  size="lg"
                  isChecked={colorMode === "dark"}
                  onChange={toggleColorMode}
                />
                <Text fontSize="sm" fontWeight="bold">
                  {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
                </Text>
              </HStack>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </HStack>
  );
};

export default MenuItems;

// Parent: NavBar.tsx
