import React from "react";
import ReusableModal from "./ReusableModal";

function Goals() {
  return (
    <ReusableModal buttonLabel="Goals" header="Goals" scrollBehavior="inside">
      My goal in programming is to become a well-rounded developer.
      <br /> <br />
      I am dedicated to making this happen. Commited to learning and growing in
      this field.
      <br /> <br />
      My goal is to excel in the web development field, constantly challenging
      myself to improve and make significant contributions to the industry.
      <br /> <br />
    </ReusableModal>
  );
}

export default Goals;
