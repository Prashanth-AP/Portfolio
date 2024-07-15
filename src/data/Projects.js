import Wanderer from "../assets/Wanderer.png";
import Stone_paper from "../assets/Stone-paper.png";
import Amazon_clone from "../assets/Amazon-clone.png";

export const projects = [
  {
    id: 0,
    img: Wanderer,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    title: "Wanderer",
    desc: "Wanderlust is a full-stack Airbnb-like app for listing and booking accommodations, featuring user authentication, advanced search, and responsive design, deployed on Render.",
    live: "https://wanderer-hp0k.onrender.com/listings/",
    github: "https://github.com/Tushar00018/Wanderer",
  },
  {
    id: 1,
    img: Amazon_clone,
    skills: ["HTML", "CSS"],
    title: "Amazon-Clone",
    desc: "The Amazon clone is a static website built with HTML and CSS, replicating the front-end interface of Amazon, deployed on Netlify.",
    live: "https://amazondummy0.netlify.app",
    github: "https://github.com/Tushar00018/Amazon-Clone",
  },

  {
    id: 2,
    img: Stone_paper,
    skills: ["HTML", "CSS", "JavaScript"],
    title: "Stone-Paper",
    desc: "The Stones-Paper-Scissors game is a simple web-based version of the classic game, built with HTML, CSS, and JavaScript, and deployed on Netlify.",
    live: "https://stones-paper-scissor.netlify.app",
    github: "https://github.com/Tushar00018/Stone-Paper-Scissor",
  },
];
