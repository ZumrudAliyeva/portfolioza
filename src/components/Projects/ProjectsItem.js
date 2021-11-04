import React from "react";
import { ProContent, ProItem, ProImg, GithubIcon, LinkIcon } from "./Projects.styled";
// import { Subtitle } from "../Main.styled";
import magic from "../../assets/magic.jpg"


const ProjectsItem = ({project: { name, github_url, deployed_url }}) => {
  return (
    <ProItem>
        <ProImg src={magic} alt=""/>
      <ProContent>
        <h3>{name}</h3>
        <span>
          <a href={github_url}><GithubIcon/></a>
          <a href={deployed_url}><LinkIcon/></a>
        </span>
      </ProContent>
    </ProItem>
  );
};

export default ProjectsItem;