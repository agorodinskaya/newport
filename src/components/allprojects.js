import React from "react";
import Project from "./project.js";

import { graphql, useStaticQuery } from "gatsby";
import { DiReact } from "react-icons/di";
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
  // console.log(projects);
  //   console.log(projects.techTag.code);

  return (
    <section className='section projects'>
      <h2>Here are some of my projects:</h2>
      <Project projects={projects} />
      <h2>
        Some other <DiReact /> projects that are in progress :
      </h2>
      <div className='section-center projects-center'>
        <div className='project-other'>
          <a href='https://github.com/agorodinskaya/react-burger-builder'>
            <h3>
              <span role='img' aria-label='burger'>
                🍔
              </span>
              React-burger builder
            </h3>
          </a>
          <a href='https://github.com/agorodinskaya/lovely-bookkeeper'>
            <h3>
              <span role='img' aria-label='laptop'>
                💻
              </span>
              Lovely-bookkeeper
            </h3>
          </a>
          <a href='https://github.com/agorodinskaya/ecom'>
            <h3>
              <span role='img' aria-label='hapy-face'>
                🥳
              </span>
              e-commerce website
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
