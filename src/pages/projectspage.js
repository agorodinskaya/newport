import * as React from "react";

import Layout from "../components/Layout";
import AllProjects from "../components/allprojects";
import "../css/main.css";
// markup
const ProjectsPage = () => {
  return (
    <Layout>
      <section className='project-page'>
        <AllProjects />
      </section>
    </Layout>
  );
};

export default ProjectsPage;
