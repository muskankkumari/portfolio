import React from "react";
import gif from "../assets/about.gif";

const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src={gif} alt="" />
      </div>
      <div className="about-description para">
        <div className="primary-heading about-heading">About</div>
        <p>
          I'm a WebDeveloper with learing experience of 1 year. Currently
          pursing BCA from Vinoba Bhave University. I am very passionate about
          improving my coding skill & developing website and applications.
        </p>
        <p>
          I make websites that are easy to use, meet the client's needs, and
          work well even as they grow. I pay close attention to every little
          thing to make sure they work fast and are reliable.
        </p>
        <p>
          With a creative and analytical mindset, I thrive on tackling complex
          challenges and delivering innovative solutions. Through this website,
          I invite you to explore my work and learn more about my skills,
          experiences, and accomplishments.
        </p>
      </div>
    </div>
  );
};

export default About;
