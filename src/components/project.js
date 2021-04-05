import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FaGithubSquare, FaGlobe } from "react-icons/fa";
import {
  DiCss3,
  DiHtml5,
  DiJira,
  DiJsBadge,
  DiJqueryLogo,
  DiRasberryPi,
  DiReact,
  DiRuby,
  DiRor,
  DiTerminal,
  DiGit,
  DiNpm,
  DiNodejs,
  DiBootstrap,
} from "react-icons/di";

const reactIcon = {
  DiCss3: <DiCss3 />,
  DiHtml5: <DiHtml5 />,
  DiJira: <DiJira />,
  DiJsBadge: <DiJsBadge />,
  DiJqueryLogo: <DiJqueryLogo />,
  DiRasberryPi: <DiRasberryPi />,
  DiReact: <DiReact />,
  DiRuby: <DiRuby />,
  DiRor: <DiRor />,
  DiTerminal: <DiTerminal />,
  DiGit: <DiGit />,
  DiNpm: <DiNpm />,
  DiNodejs: <DiNodejs />,
  DiBootstrap: <DiBootstrap />,
};

// import slugify from "slugify";
const Project = ({ projects = [] }) => {
  return (
    <div className='section-center projects-center'>
      {projects.map((project) => {
        const { id, title, image, techTag, descr } = project;

        const pathToImage = getImage(image);
        return (
          <article className='project' key={id}>
            {image && (
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className='project-img'
              />
            )}
            <div className='project-info'>
              <h3>{title}</h3>
              <p>{descr.descr}</p>
              <div className='project-stack'>
                {techTag.langs.map((item, id) => {
                  return (
                    <span className='project-icon' key={id}>
                      {reactIcon[item]}
                    </span>
                  );
                })}
              </div>

              <div className='project-links'>
                <a href={techTag.code}>
                  <FaGithubSquare className='project-icon'></FaGithubSquare>
                </a>

                <a href={techTag.demo}>
                  <FaGlobe className='project-icon'></FaGlobe>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Project;
