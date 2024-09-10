import { Box, Text, Center, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { useTextStyles } from "../styles/TextStyles";
import SocialLinks from "./SocialLinks";
import { FaLocationDot } from "react-icons/fa6";
import LinkItem from "../LinkItem";
import AnimatedUnderline from "../styles/AnimatedUnderline";
import { IoIosMail } from "react-icons/io";

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
          <Link href="mailto:matej.stremfelj26@gmail.com" isExternal>
            <IoIosMail fontSize="45px" style={{ cursor: "pointer" }} />
          </Link>
          <SocialLinks />
        </HStack>
        <HStack marginBottom={2}>
          <LinkItem href="https://www.google.com/maps/place/Volča,+Slovenia">
            <FaLocationDot fontSize="35px" />
          </LinkItem>
          <AnimatedUnderline>Volča, Slovenia</AnimatedUnderline>
        </HStack>

        <Text style={{ paddingBottom: "20px" }} fontSize={text}>
          A self-taught programmer focused on crafting performant websites with
          a keen eye for detail and a passion for learning.
        </Text>
      </Box>
    </Center>
  );
};

export default HeroMessage;
