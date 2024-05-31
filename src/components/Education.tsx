import React from "react";
import ReusableModal from "./ReusableModal";
import { Accordion } from "@chakra-ui/react";
import Certificates from "./Certificates";
import School from "./School";

function Education() {
  return (
    <ReusableModal
      buttonLabel="Education"
      header="My Education"
      scrollBehavior="inside"
    >
      <Accordion allowToggle>
        <School />
        <Certificates />
      </Accordion>
    </ReusableModal>
  );
}

export default Education;
