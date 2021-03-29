import React from "react";
import * as classes from "./Footer.module.css";
import SocialLinks from "../../constants/sociallinks";
const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div>
        <SocialLinks className={classes.socialLink}></SocialLinks>
        <h4>
          &copy;{new Date().getFullYear()}
          <span> nastyadev </span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
