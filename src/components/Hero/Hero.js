import React from "react";
import Image from "gatsby-image";
import * as classes from "./Hero.module.css";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../../constants/sociallinks";
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
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <header className={classes.Hero}>
      <div className={`${classes.HeroCenter}  ${classes.SectionCenter}`}>
        <article className={classes.HeroInfo}>
          <div className={classes.Underline}></div>
          <div>
            <h1>I'm ana</h1>
            <h4>I am a web developer</h4>
            <Link to='/contact' className='btn'>
              contact me
            </Link>
          </div>
        </article>
        <Image fluid={fluid} className={classes.HeroImg} />
      </div>
    </header>
  );
};

export default Hero;
