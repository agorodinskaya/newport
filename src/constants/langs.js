import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
} from "react-icons/di";

const data = [
  {
    id: 1,
    icon: <DiCss3 className='langs'></DiCss3>,
  },
  {
    id: 2,
    icon: <DiHtml5 className='langs'></DiHtml5>,
  },
  {
    id: 3,
    icon: <DiJsBadge className='langs'></DiJsBadge>,
  },
  {
    id: 4,
    icon: <DiReact className='langs'></DiReact>,
  },
  {
    id: 5,
    icon: <DiRuby className='langs'></DiRuby>,
  },
  {
    id: 6,
    icon: <DiRor className='langs'></DiRor>,
  },
  {
    id: 7,
    icon: <DiNodejs className='langs'></DiNodejs>,
  },
  {
    id: 8,
    icon: <DiNpm className='langs'></DiNpm>,
  },
  {
    id: 9,
    icon: <DiJqueryLogo className='langs'></DiJqueryLogo>,
  },
  {
    id: 10,
    icon: <DiGit className='langs'></DiGit>,
  },
  {
    id: 11,
    icon: <DiTerminal className='langs'></DiTerminal>,
  },
  {
    id: 12,
    icon: <DiRasberryPi className='langs'></DiRasberryPi>,
  },
  {
    id: 13,
    icon: <DiJira className='langs'></DiJira>,
  },
];
const langs = data.map((lang) => {
  return (
    <li key={lang.id}>
      <a href={lang.url} className='langs'>
        {lang.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return <ul className={`langs ${styleClass ? styleClass : ""}`}>{langs}</ul>;
};
