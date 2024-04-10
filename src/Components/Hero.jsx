import React from 'react'

import profileImg from "./../assets/musu.jpg"
import coding from "./../assets/coder.jpg"
import Typed from "typed.js";
import { NavLink } from 'react-router-dom';
import resume from "./../assets/resume-muskan.pdf"

const Hero = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Frontend Developer'],
        loop: true,
        typeSpeed:200,
        backSpeed:200,
        backDelay:500,
        smartBackspace:true,
        showCursor:true,
        autoInsertCss:true,
        bindInputFocusEvents: true,
      });
      
    return () => {
        typed.destroy();
      };
    }, []);
  return (
    <>
       <div>
      <div className="hero">
        <div className="hero-box">
          <div className="hero-textBox">
            <h2 className="profile-subHeading">I'm</h2>
            <h1 className="profile-name">Muskan Kumari</h1>
            <span className="profile-heading" ref={el}></span>
            <p className="profile-description">Passionate Frontend Developer | Transforming ideas into Seamless and Visually Stunning Web Solutions</p>
            <div className="profile-img">
              <img src={profileImg} alt="" />
            </div>
            <div className="hero-buttons">
              <a href={resume} download className="hero-cvBtn btn">Download CV</a>
              <NavLink to="/contact" className="hero-contact btn ">Contact</NavLink>
            </div>
          </div>
          <div className="hero-img">
            <img src={coding} alt="" />
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Hero
