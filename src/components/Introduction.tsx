import React from "react";
import ReusableModal from "./ReusableModal";

function Introduction() {
  return (
    <ReusableModal buttonLabel="Introduction" header="Introduction">
      I am Matej Štremfelj, a self-taugh web developer. With a lifelong passion
      for computers. I am interested in opportunities in web development. So far
      I have gained a lot of practical experience through projects. I've honed
      my skills in React, Typescript, Javascript, Node JS, Git, Wordpress,
      TailwindCSS, mongoDB, mySQL. I continue to grow in this field every day.
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
