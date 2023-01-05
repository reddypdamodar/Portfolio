import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
  );
}

export default Footer;
