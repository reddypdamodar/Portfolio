import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import Link from "@material-ui/core/Link";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <h1> {project.name}</h1>
      <img src={project.image} alt="project" className="size" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link href={project.link} target="_blank">
        <GithubIcon />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
