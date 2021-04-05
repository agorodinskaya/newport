import React from "react";
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

const data = [
  {
    id: 1,
    name: "DiCss3",
    icon: <DiCss3 className='langs'></DiCss3>,
  },
  {
    id: 2,
    name: "DiHtml5",
    icon: <DiHtml5 className='langs'></DiHtml5>,
  },
  {
    id: 3,
    name: "DiJsBadge",
    icon: <DiJsBadge className='langs'></DiJsBadge>,
  },
  {
    id: 4,
    name: "DiReact",
    icon: <DiReact className='langs'></DiReact>,
  },
  {
    id: 5,
    name: "DiRuby",
    icon: <DiRuby className='langs'></DiRuby>,
  },
  {
    id: 6,
    name: "DiRor",
    icon: <DiRor className='langs'></DiRor>,
  },
  {
    id: 7,
    name: "DiNodejs",
    icon: <DiNodejs className='langs'></DiNodejs>,
  },
  {
    id: 8,
    name: "DiNpm",
    icon: <DiNpm className='langs'></DiNpm>,
  },
  {
    id: 9,
    name: "DiJqueryLogo",
    icon: <DiJqueryLogo className='langs'></DiJqueryLogo>,
  },
  {
    id: 10,
    name: "DiGit",
    icon: <DiGit className='langs'></DiGit>,
  },
  {
    id: 11,
    name: "DiTerminal",
    icon: <DiTerminal className='langs'></DiTerminal>,
  },
  {
    id: 12,
    name: "DiRasberryPi",
    icon: <DiRasberryPi className='langs'></DiRasberryPi>,
  },
  {
    id: 13,
    name: "DiJira",
    icon: <DiJira className='langs'></DiJira>,
  },
  {
    id: 14,
    name: "DiBootstrap",
    icon: <DiBootstrap className='langs'></DiBootstrap>,
  },
];
const langs = data.map((lang) => {
  return (
    <li key={lang.id}>
      <a href={lang.url} className='anchor'>
        {lang.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return <ul className={`langs ${styleClass ? styleClass : ""}`}>{langs}</ul>;
};
