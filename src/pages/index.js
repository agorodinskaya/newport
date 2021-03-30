import * as React from "react";
import Hero from "../components/hero";
import Layout from "../components/Layout";
import "../css/main.css";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className='main-page'>
        <Hero />
      </div>
    </Layout>
  );
};

export default IndexPage;
