import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Damodhar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link href="https://github.com/reddypdamodar" target="_blank">
            <GithubIcon />
          </Link>

          <Link href="mailto:reddypdamodar@gmail.com" target="_blank">
            <EmailIcon />
          </Link>

          <Link
            href="https://www.linkedin.com/in/damodhar-reddy-pulluru-714716182/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, BootStrap, MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java,TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
