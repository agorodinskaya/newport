import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import * as classes from "./nav.module.css";
import { links } from "../constants/links";
import { Link } from "gatsby";
// console.log(classes);
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className={classes.navCenter}>
        <div className={classes.navHeader}>
          <h3 className={classes.Logo}>
            Nastya <span className={classes.Two}>Dev</span>
          </h3>
          <button
            type='button'
            className={classes.toggleBtn}
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${classes.linksContainer} ${classes.ShowLinks}`}
          ref={linksContainerRef}
        >
          <ul className={classes.navLinks} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link
                    className={classes.Anchor}
                    activeClassName={classes.Active}
                    to={url}
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
