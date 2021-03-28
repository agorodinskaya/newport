import React from "react";
import * as classes from "./Footer.module.css";
import SocialLinks from "../../constants/sociallinks";
const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div>
        <SocialLinks className={classes.FooterLinks}></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> nastyadev </span> all rights reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
