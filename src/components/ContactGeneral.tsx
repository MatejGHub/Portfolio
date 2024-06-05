import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Link,
  useColorMode
} from "@chakra-ui/react";
import React from "react";
import { FaLocationDot, FaDownload } from "react-icons/fa6";
import AnimatedUnderline from "../styles/AnimatedUnderline";
import LinkItem from "../LinkItem";
import useIsMobile from "../hooks/useIsMobile";
import SocialLinks from "./SocialLinks";
import useResponsive from "../hooks/useResponsive";

const ContactGeneral = () => {
  const isMobile = useIsMobile(); // Checks if user is on mobile device
  const { colorMode } = useColorMode();
  const { isLargerThanMD, isLargerThanSM } = useResponsive();

  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.50" : "gray.700"}
        padding={4}
        borderRadius={5}
      >
        <Heading marginBottom={2} fontSize={isLargerThanSM ? "5xl" : "4xl"}>
          General
        </Heading>
        <HStack
          gap={isLargerThanSM ? 8 : 0}
          fontSize={"xl"}
          marginBottom={3}
          wrap={isLargerThanMD ? "nowrap" : "wrap"}
        >
          <AnimatedUnderline>
            <LinkItem href={"mailto:matej.stremfelj26@gmail.com"}>
              matej.stremfelj26@gmail.com
            </LinkItem>
          </AnimatedUnderline>
          {isMobile ? (
            <Link>
              <AnimatedUnderline>+386 41 907 629</AnimatedUnderline>
            </Link>
          ) : (
            <AnimatedUnderline>+386 41 907 629</AnimatedUnderline>
          )}
        </HStack>
        <HStack marginBottom={3} gap={4}>
          <SocialLinks />
        </HStack>
        <Divider />
        <HStack fontSize="lg" marginY={3}>
          <LinkItem href="https://www.google.com/maps/place/Volča,+Slovenia">
            <FaLocationDot fontSize="35px" />
          </LinkItem>
          <AnimatedUnderline>Volča, Slovenia</AnimatedUnderline>
        </HStack>
        <Divider />
        <HStack marginTop={4}>
          <FaDownload fontSize="30px" />
          <Link
            href="https://docs.google.com/document/d/1-NNsdX8HrvpSZbZnAF_cgoUGcTZuk4L2oVk3FCGouzk/export?format=pdf"
            download
          >
            <Button>CV</Button>
          </Link>
          <Link
            href="https://docs.google.com/document/d/1xXy4aPWNrU3L2IAGsTs1AcKSsTj_nLI6AusXQNMTsjs/export?format=pdf"
            download
          >
            <Button>Motivational Letter</Button>
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default ContactGeneral;
