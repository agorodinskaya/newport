import * as React from "react";
import Hero from "../components/hero";
import Layout from "../components/Layout";
// import AllProjects from "../components/allprojects";
import "../css/main.css";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <section className='main-page'>
        <Hero />
      </section>
    </Layout>
  );
};

export default IndexPage;
