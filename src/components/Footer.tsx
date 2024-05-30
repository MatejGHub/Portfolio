import {
  Box,
  Button,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
  FaLink
} from "react-icons/fa";
import CenteredBox from "../styles/BoxStyles";
import LinkItem from "../LinkItem";

const Footer = () => {
  const bgColor = useBreakpointValue({
    base: "transparent",
    md: useColorModeValue("gray.100", "gray.700")
  });

  const socialLinks = [
    { href: "https://github.com/MatejGHub", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/matej-%C5%A1tremfelj-ba9136283/",
      icon: <FaLinkedin />
    }
  ];
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
          {socialLinks.map((link, id) => {
            return (
              <LinkItem key={id} href={link.href}>
                {React.cloneElement(link.icon, { fontSize: "25px" })}{" "}
              </LinkItem>
            );
          })}
        </HStack>
      </HStack>
    </>
  );
};

export default Footer;
