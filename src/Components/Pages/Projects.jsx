import React from "react";
import gif from "../../assets/project.gif";
import { TiStarFullOutline } from "react-icons/ti";
import data from "../data.json";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="project-about">
          <div className="project-about-desc">
            <div className="heading">Projects & Experience</div>
            <div className="project-about-text para">
              You can find all of my projects on my profile on Github. You can
              view my activities, contributions and code on these projects. Some
              of these are completed and some are in progress. You can also
              leave comments on the profile and start a discussion. I am always
              looking for new projects and Ideas. You can also reach out to me
              on any of the social media channels mentioned below.
            </div>
            <a href="https://github.com/muskankkumari" className="btn">
              <TiStarFullOutline color="#fff700" size={25} />
              Star me on Github
            </a>
          </div>
          <div className="project-about-img">
            <img src={gif} alt="" />
          </div>
        </div>
        <div className="projects-details">
          {Object.entries(data.projects).map((project, index) => {
            return (
              <div className="project-box" key={index}>
                <img src={project[1].image} alt="" />
                <h2>{project[1].title}</h2>
                <p>{project[1].description}</p>
                <div className="project-buttons">
                  <a className="btn" href={project[1].liveLink}>
                    Live Project
                  </a>
                  <a className="btn" href={project[1].sourceCode}>
                    Project Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
