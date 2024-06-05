import { SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import Projects from "./Projects";

const HeroSkipToContent = () => {
  const columns = { base: 1, md: 3 };

  return (
    <>
      <SimpleGrid marginBottom={5} columns={columns} spacing={2} paddingX={3}>
        <Button as={Link} to="projects" smooth={true} duration={500}>
          Projects
        </Button>
        <Button as={Link} to="about" smooth={true} duration={500}>
          About
        </Button>

        <Button as={Link} to="contact" smooth={true} duration={500}>
          Contact
        </Button>
      </SimpleGrid>
    </>
  );
};

export default HeroSkipToContent;
