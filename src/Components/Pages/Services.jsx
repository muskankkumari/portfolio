import React from "react";
import gif from "../../assets/service.gif";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="service">
        <div className="service-top">
          <div className="services-desc">
            <div className="heading">Contact me for your next WEBSITE</div>
            <div className="para">
              "Crafted with creativity and precision, my frontend development
              services bring your vision to life. Specializing in captivating
              website design and seamless user experiences, I'll elevate your
              online presence to new heights. Let's collaborate to transform
              your ideas into digital experiences that resonate and leave a
              lasting impression on your audience."
            </div>
            <div className="buttons">
              <NavLink to="/contact" className="btn">
                Contact Us
              </NavLink>
              <NavLink to="/projects" className="btn">
                Check my Projects
              </NavLink>
            </div>
          </div>
          <div className="service-img">
            <img src={gif} alt="" />
          </div>
        </div>
        <div className="service-trust">
          <div className="heading">Why should you choose Us</div>
          <hr className="hr"/>
          <ul>
            <li className="para">
              <span>User-Friendly Design</span>: Easy navigation and intuitive
              interface.
            </li>
            <li className="para">
              <span>Responsive Design</span>: Ensures the website looks and
              functions well on various devices and screen sizes.
            </li>
            <li className="para">
              <span>Fast Loading Speed</span>: Optimized for quick loading to
              prevent user frustration.
            </li>
            <li className="para">
              <span>Animated Elements</span>: Dynamic animations breathe life
              into your website, captivating users with engaging transitions and
              enhancing interactivity.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
