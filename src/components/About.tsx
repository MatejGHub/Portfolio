import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Introduction from "./Introduction";
import Expertise from "./Expertise";
import Education from "./Education";
import Goals from "./Goals";
import ProjectsDetails from "./ProjectsDetails";
import useResponsive from "../hooks/useResponsive";

const About = () => {
  const { isLargerThanSM, isLargerThanMD } = useResponsive();

  return (
    <>
      <Box p={5} textAlign="center" id="about">
        <Heading fontSize={isLargerThanSM ? "6xl" : "4xl"} fontWeight="bold">
          About me
        </Heading>
        <Text>Have a peek at some other information about me</Text>
        <SimpleGrid
          columns={isLargerThanMD ? 3 : isLargerThanSM ? 2 : 1}
          spacing={5}
          mt={10}
        >
          <Introduction />
          <Education />
          <Expertise />
          <Goals />
          <ProjectsDetails />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default About;

//  projects(detailed description of project, technologies used, link to project, challenges, source code to github)
