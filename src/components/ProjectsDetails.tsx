import React from "react";
import ReusableModal from "./ReusableModal";
import { Text } from "@chakra-ui/react";

function ProjectsDetails() {
  return (
    <ReusableModal buttonLabel="Projects Details" header="Project details">
      <Text>
        This section you can read more about each project posted on my
        Portfolio.
      </Text>
      // Add more details about projects
    </ReusableModal>
  );
}

export default ProjectsDetails;
