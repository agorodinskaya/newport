import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

import Image from "gatsby-image";
// import SEO from "../components/SEO";
const query = graphql`
  {
    file(relativePath: { eq: "AG.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <Layout>
      {/* <SEO title='About Me' description='about webdev' /> */}
      <section className='about-page'>
        <div className='section-center about-center'>
          <Image fluid={fluid} className='about-img' />
          <article className='about-text'>
            <div>
              <h1>About me</h1>
              <p>
                I am a frontend developer with an extensive business background,
                predominantly in external audit, accounting and finance. I've
                made the move into web development 2 years ago, as coding,
                solving problems and building sites meets both my analytical &
                mathematical skills as well as my passion for creativity. I
                value continuous learning and engaging with developer
                communities to keep connected on trends, insights and new
                technology. I am looking for a web developer role that will
                allow me to dive in the real world projects.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};
export default About;
