import React from "react";
import * as classes from "./footer.module.css";
import SocialLinks from "../constants/sociallinks";
const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div>
        <SocialLinks></SocialLinks>
        <h4>
          &copy;{new Date().getFullYear()}
          <span> nastyadev </span>
        </h4>
        <h4>built with Gatsby</h4>
      </div>
    </footer>
  );
};

export default Footer;
