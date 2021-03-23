import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import Fade from "react-reveal/Fade"
import ProjectCard from "./ProjectCard"
import ProjCard from "./ProjCard"
import { projects } from "../data/projects"

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="proj-con">
        <Fade bottom cascade>
          <div className="wrap section">
            <div className="title">
              <h2>Projects</h2>
              <div className="section-title-underline"></div>
            </div>
            <div className="card-con">
              {/* <ProjectCard
                imageUrl="https://i.ibb.co/Wp8zyCH/Screen-Shot-2020-12-17-at-4-12-24-PM.png"
                title="Amazombie"
                code="https://github.com/BCIT-SSD-2020-21/front-end-project-ctrl-alt-defeat"
                website="https://fepamazombie.netlify.app/"
                info="A front-end e-commerce website. Shoutout to all my team mates for helping me making this website a reality."
              /> */}
              {/* <ProjectCard
                imageUrl="https://i.ibb.co/85RCSQQ/moviedb.png"
                title="Movie API"
                code="https://github.com/BCIT-SSD-2020-21/lab-2---react-gokay-abay"
                website="https://5fbfe5ab99a34edf95692cfc--filmapi-gokay-0fb82d.netlify.app/"
                info="A React app that uses TMDB API to display movies based on categories."
              />

              <ProjectCard
                imageUrl="https://i.ibb.co/b5wMXWr/Screen-Shot-2020-12-17-at-4-47-26-PM.png"
                title="Armoire"
                code="https://github.com/BCIT-SSD-2020-21/dotnetproject-team5_netproject"
                website="https://armoire.azurewebsites.net/"
                info="A virtual closet app that allows users to store their clothes in a database."
              /> */}
              {projects.map((proj) => (
                <ProjCard
                  imageUrl={proj.imageUrl}
                  title={proj.title}
                  website={proj.website}
                  code={proj.code}
                  desc={proj.desc}
                  tags={proj.tags}
                />
              ))}
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}
