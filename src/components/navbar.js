import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import * as classes from "./nav.module.css";
import { links } from "../constants/links";
import { Link } from "gatsby";
// console.log(classes);
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className={classes.navBar}>
      <div className={classes.navCenter}>
        <div className={classes.navHeader}>
          <h3 className={classes.Logo}>
            Nastya <span className={classes.Two}>Dev</span>
          </h3>
          <button
            type='button'
            className={classes.toggleBtn}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${showLinks} ? (${classes.navLinks} ${classes.ShowLinks}) : ${classes.navLinks}`}
        >
          <ul className={classes.navLinks}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link
                    className={classes.Anchor}
                    activeClassName={classes.Active}
                    to={url}
                    onClick={() => setShowLinks(false)}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
