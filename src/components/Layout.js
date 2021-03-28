import React from "react";
// import "../css/main.css"
import Navbar from "./NavBar/Navbar";
import Sidebar from "./SideBar/Sidebar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
