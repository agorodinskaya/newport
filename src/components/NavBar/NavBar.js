import React from "react";
import { FaAlignRight } from "react-icons/fa";
import * as classes from "./Nav.module.css";
import PageLinks from "../../constants/links";
// console.log(classes);
const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.navCenter}>
        <div className={classes.navHeader}>
          <h3 className={classes.Logo}>
            Nastya <span className={classes.Two}>Dev</span>
          </h3>
          <button type='button' className={classes.toggleBtn}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass={classes.navLinks}></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
