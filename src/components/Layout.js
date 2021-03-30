import React from "react";
// import "../css/main.css"
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
