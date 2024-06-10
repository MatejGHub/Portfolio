import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../hooks/useResponsive";
import ProjectsData from "./ProjectsData";
import OtherProjects from "./OtherProjects";

const Projects = () => {
  const { isLargerThanSM } = useResponsive();

  return (
    <>
      <Box py={5} textAlign="center" id="projects">
        <Heading pb="50px" fontSize={isLargerThanSM ? "6xl" : "3xl"}>
          Projects showcase
        </Heading>
        <ProjectsData />
      </Box>
    </>
  );
};

export default Projects;
