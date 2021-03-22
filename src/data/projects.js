import React from "react"
import armoire from "../assets/armoire.gif"
import hustlaz from "../assets/hustlaz.gif"
import pinstagram from "../assets/pinstagram.gif"
import pokemon from "../assets/pokemon.gif"

export const projects = [
  {
    title: "Armoire",
    imageUrl: armoire,
    website: "https://armoire.azurewebsites.net/",
    code: "https://github.com/BCIT-SSD-2020-21/dotnetproject-team5_netproject",
    desc:
      "A CRUD app that allows users to store images of their clothes in a relational database and helps them mix and match clothes without putting them on!",
    tags: ["ASP.NET", "SQL", "Azure S3", "C#"],
  },
  // {
  //   title: "Amazombie",
  //   imageUrl:
  //     "https://i.postimg.cc/1zP1C4vR/Screen-Shot-2021-03-07-at-2-41-02-PM.png",
  //   website: "https://fepamazombie.netlify.app/",
  //   code:
  //     "https://github.com/BCIT-SSD-2020-21/front-end-project-ctrl-alt-defeat",
  //   desc: "An ecommerce front end project. Backend is to be implemented.",
  //   tags: ["SCSS", "JavaScript"],
  // },
  {
    title: "Pinstagram",
    imageUrl: pinstagram,
    website: "https://secure-waters-85061.herokuapp.com/",
    code:
      "https://github.com/BCIT-SSD-2020-21/social-something-front-end-gokay-abay",
    desc:
      "An Instagram clone CRUD app where users can post, comment and view other users' posts.",
    tags: ["React", "NodeJS", "MongoDB", "Express"],
  },
  {
    title: "Hu$tlaz",
    imageUrl: hustlaz,
    website: "https://hustlaz.netlify.app/",
    code: "",
    desc:
      "An ecommerce Facebook Marketplace clone. Platform allows users to buy and sell vintage items.",
    tags: ["React", "AWS Backend", "MySQL"],
  },
  {
    title: "Poke TCG",
    imageUrl: pokemon,
    website: "https://gentle-brushlands-61970.herokuapp.com/",
    code: "https://github.com/gokay-abay/pokemontcg-react-app",
    desc:
      "A MERN stack app that consumes pokemontcg.io API and allows users to create accounts, build decks and play Pokemon card game with other players online.",
    tags: ["React", "MongoDB", "NodeJS", "Web Sockets"],
  },
]
