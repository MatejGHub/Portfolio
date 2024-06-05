import React from "react";
import ProjectCard from "./ProjectsTemplateReusable";
import GameHubVideo from "../assets/projects/GameHub.mp4";

const projects = [
  {
    id: 1,
    title: "Game Hub",
    description:
      "Game Hub is a responsive web application showcasing my skills with APIs. It fetches an array of over 800.000 games and displays them and their data. The user can search for games, filter them by genre, sort them by platform and more.",
    technologies: "React, Typescript, SCSS, Vite, Axios",
    video: GameHubVideo,
    link: "https://game-hub-flame-five.vercel.app/"
  }
];

const ProjectsData = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          project={project}
          isRight={project.id % 2 === 1}
          key={project.id}
        />
      ))}
    </>
  );
};

export default ProjectsData;
