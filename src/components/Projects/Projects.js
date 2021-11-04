import React, {useState} from "react";
import ProjectsItem from "./ProjectsItem";
import { projects_data } from "./projects_data";
import { PageTitle, Title } from "../Main.styled";
import { ProjectsContainer, PortfolioNavbar, Portfolio } from "./Projects.styled";

const Projects = () => {
    const [projects, setProjects] = useState(projects_data)

    const handleFilterCategory = (name) => {
        const new_array = projects_data.filter(project => project.category.includes(name))
    setProjects(new_array)
    }

  return (
    <ProjectsContainer id="projects">
      <PageTitle>
        <Title>Projects</Title>
      </PageTitle>
      <PortfolioNavbar>
        <ul>
          <li onClick={() => setProjects(projects_data)}>All</li>
          <li onClick={() => handleFilterCategory("html/css")}>HTML/CSS</li>
          <li onClick={() => handleFilterCategory("jquery")}>JQuery</li>
          <li onClick={() => handleFilterCategory("react js")}>React js</li>
          <li onClick={() => handleFilterCategory("next js")}>Next js</li>
          <li onClick={() => handleFilterCategory("firebase")}>Firebase</li>
        </ul>
      </PortfolioNavbar>
      <Portfolio>
        {projects.map((project) => (
          <ProjectsItem key={project.name} project={project} />
        ))}
      </Portfolio>
    </ProjectsContainer>
  );
};

export default Projects;
