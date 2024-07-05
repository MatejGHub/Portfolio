import {
  HStack,
  Switch,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Box
} from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useResponsive from "../hooks/useResponsive";
import { useTextStyles } from "../styles/TextStyles";
import { Link } from "react-scroll";
import AnimatedUnderline from "../styles/AnimatedUnderline";

const MenuItems = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isLargerThanMD } = useResponsive();
  const { title } = useTextStyles();

  return (
    <HStack gap={5}>
      {isLargerThanMD ? (
        <>
          <AnimatedUnderline>
            <Box
              as={Link}
              to="projects"
              smooth={true}
              duration={500}
              cursor="pointer"
              fontWeight={"bold"}
            >
              Projects
            </Box>
          </AnimatedUnderline>
          <AnimatedUnderline>
            <Box
              as={Link}
              to="about"
              smooth={true}
              duration={500}
              cursor="pointer"
              fontWeight={"bold"}
            >
              About
            </Box>
          </AnimatedUnderline>
          <AnimatedUnderline>
            <Box
              as={Link}
              to="contact"
              smooth={true}
              duration={500}
              cursor="pointer"
              fontWeight={"bold"}
            >
              Contact
            </Box>
          </AnimatedUnderline>

          <HStack>
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
        </>
      ) : (
        <Menu>
          <MenuButton as={Button}>
            <RxHamburgerMenu fontSize={title} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Box
                as={Link}
                to="projects"
                smooth={true}
                duration={500}
                cursor="pointer"
              >
                Projects
              </Box>
            </MenuItem>
            <MenuItem>
              <Box
                as={Link}
                to="about"
                smooth={true}
                duration={500}
                cursor="pointer"
              >
                About
              </Box>
            </MenuItem>
            <MenuItem>
              <Box
                as={Link}
                to="contact"
                smooth={true}
                duration={500}
                cursor="pointer"
              >
                Contact
              </Box>
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
