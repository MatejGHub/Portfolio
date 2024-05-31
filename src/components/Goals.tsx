import React from "react";
import ReusableModal from "./ReusableModal";

function Goals() {
  return (
    <ReusableModal buttonLabel="Goals" header="Goals" scrollBehavior="inside">
      My primary goal in programming is to excel in Front-End development and
      secure a job.
      <br /> <br />
      Once I land a front-end development job, my next step is to continually
      expand my expertise. I aspire to deepen my front-end skills while
      gradually incorporating more back-end knowledge. My goal is to grow into a
      well-rounded developer.
      <br /> <br />
      I am dedicated to keeping up with the latest advancements in web
      technology. My goal is to excel in the web development field, constantly
      challenging myself to improve and make significant contributions to the
      industry.
      <br /> <br />
    </ReusableModal>
  );
}

export default Goals;
