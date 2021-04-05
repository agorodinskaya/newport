import React from "react";
import Project from "./project.js";
import { graphql, useStaticQuery } from "gatsby";
const query = graphql`
  {
    allContentfulProject {
      nodes {
        id
        title
        techTag {
          code
          demo
          tooltip
          langs
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        descr {
          descr
        }
      }
    }
  }
`;
const AllProjects = () => {
  const data = useStaticQuery(query);
  const projects = data.allContentfulProject.nodes;
  console.log(projects);
  //   console.log(projects.techTag.code);

  return (
    <section className='section projects'>
      <Project projects={projects} />
    </section>
  );
};

export default AllProjects;
