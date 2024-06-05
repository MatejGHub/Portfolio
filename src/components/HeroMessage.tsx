import {
  Box,
  useBreakpointValue,
  Text,
  Center,
  HStack
} from "@chakra-ui/react";
import React from "react";
import { useTextStyles } from "../styles/TextStyles";
import SocialLinks from "./SocialLinks";
import { FaLocationDot } from "react-icons/fa6";
import LinkItem from "../LinkItem";
import AnimatedUnderline from "../styles/AnimatedUnderline";

const HeroMessage = () => {
  const { subtitle, text, bigTitle } = useTextStyles();
  return (
    <Center>
      <Box paddingX="30px" mx="auto">
        <Text fontSize={subtitle}>Welcome! My name is....</Text>
        <Text fontSize={bigTitle} paddingBottom={2}>
          Matej Štremfelj
        </Text>

        <HStack marginBottom={2}>
          <SocialLinks />
        </HStack>
        <HStack marginBottom={2}>
          <LinkItem href="https://www.google.com/maps/place/Volča,+Slovenia">
            <FaLocationDot fontSize="35px" />
          </LinkItem>
          <AnimatedUnderline>Volča, Slovenia</AnimatedUnderline>
        </HStack>

        <Text fontSize={text}>
          A front-end software engineer focused on crafting accessible and
          performant experiences on the web. With a keen eye for detail and a
          passion for learning, I am always searching for ways to improve the
          quality of the web for everyone.
        </Text>
      </Box>
    </Center>
  );
};

export default HeroMessage;
