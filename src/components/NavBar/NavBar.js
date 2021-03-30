import React, { useState, useRef, useEffect } from "react";
import { FaAlignRight } from "react-icons/fa";
import * as classes from "./Nav.module.css";
import PageLinks from "../../constants/links";
// console.log(classes);
const Navbar = () => {
  const [show, setShow] = useState(false);
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
            onClick={() => setShow(!show)}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks className={classes.navLinks}></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
