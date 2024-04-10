import React from 'react';
import data from "./data.json";

const Technologies = () => {
  return (
    <>
     <div className="tech">
      <div className="tech-top">
        <div className="heading">
          Technology and Tools
        </div>
      </div>
     <div className="tech-details">
     {Object.entries(data.technology).map((project, index) => {
            return (
              <div className="tech-box" key={index}>
                <div className="techBox-img">
                  <img src={project[1].image} alt="" />
                </div>
                <div className="techBox-name">
                  {project[1].name}
                </div>
              </div>
            )})}
     </div>
     </div>
    </>
  )
}

export default Technologies
