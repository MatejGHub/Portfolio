import React from "react";
import ReusableModal from "./ReusableModal";

function Introduction() {
  return (
    <ReusableModal buttonLabel="Introduction" header="Introduction">
      My name is Matej Štremfelj, a 28-year-old from Poljane nad Škofjo Loko.
      With a lifelong passion for computers, I decided to focus on programming
      over the past year. I've honed my skills in HTML, CSS, JavaScript,
      TypeScript, React JS, and Git, and I'm also exploring SCSS, Bootstrap,
      ChakraUI, Tailwind, and NodeJS.
      <br />
      <br /> I'm driven by a love for learning and challenges, thriving in team
      environments, and bringing a positive, organized approach to
      collaboration. Outside of work, I maintain my health through hiking,
      fitness, cycling, and salsa dancing, which helps me manage stress and
      bring positive energy to all aspects of my life.
    </ReusableModal>
  );
}

export default Introduction;
