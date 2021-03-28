import * as React from "react";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import "../css/main.css";
// markup
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};

export default IndexPage;
