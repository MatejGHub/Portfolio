import React from "react";
import ProjectCard from "./ProjectsTemplateReusable";
import GameHubVideo from "../assets/projects/GameHub.mp4";
import WeatherApp from "../assets/projects/WeatherApp.mp4";

const projects = [
  {
    id: 1,
    title: "Game Hub",
    description:
      "Game Hub is a responsive web application showcasing my skills with APIs. It fetches an array of over 800.000 games and displays them and their data. The user can search for games, filter them by genre, sort them by platform and more.",
    technologies: "React, Typescript, SCSS, Axios",
    video: GameHubVideo,
    link: "https://game-hub-flame-five.vercel.app/"
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Weather App is an application showcasing my skills with APIs. It fetches and displays weather data for any city globally. The user can search for a city and see the weather data.",
    technologies: "React, Typescript, TailwindCSS",
    video: WeatherApp,
    link: "https://weather-ezgj0d55z-matejs-projects-a4d93d99.vercel.app/"
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
