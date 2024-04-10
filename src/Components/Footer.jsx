import React from "react";
import logo from "../assets/footerlogo.png";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import linkedIn from "../assets/linkedin.webp";
import github from "../assets/github.png";
import twitter from "../assets/twitter.webp";
import instagram from "../assets/instagram.webp";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { RiProjectorLine } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";

const Footer = () => {
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-logo ">
            <img src={logo} alt="" />
            <p>
             Thank You for visiting us! Hope you will prefer to work with me...Feel free to contact me anytime.<br/><strong>Let's do it together!</strong> 

            </p>
          </div>
          <div className="footer-row">
            <div className="footer-col">
              <h2>Quick Links</h2>
              <ul>
                <li onClick={goTop}>
                  <IoHome className="footerLogo" />
                  <NavLink to="/portfolio/">Home</NavLink>
                </li>
                <li onClick={goTop}>
                  <RiComputerFill className="footerLogo" />
                  <NavLink to='/services'>Services</NavLink>
                </li>
                <li onClick={goTop}>
                  <RiProjectorLine className="footerLogo" />
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li onClick={goTop}>
                  <PiStudentFill className="footerLogo" />
                  <NavLink to="/education">Education</NavLink>
                </li>
                <li onClick={goTop}>
                  <MdOutlinePermPhoneMsg className="footerLogo" />
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>My Socials</h2>
              <ul>
                <li>
                  <img src={linkedIn} alt="" className="footerLogo" />
                  <a
                    href="https://www.linkedin.com/in/muskankumari-76e54/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <img
                    src={github}
                    alt=""
                    className="footerLogo"
                    style={{ backgroud: "#fff", borderRadius: "50%" }}
                  />
                  <a href="https://github.com/muskankkumari" target="_blank">Github</a>
                </li>
                <li>
                  <img src={twitter} alt="" className="footerLogo" />
                  <a target="_blank" href="https://twitter.com/MuskanK56">Twitter</a>
                </li>
                <li>
                  <img src={instagram} alt="" className="footerLogo" />
                  <a href="#insta">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copyright">
            <AiOutlineCopyrightCircle size={22} />
          </span>
          <span>Copyright 2024 by Muskan Kumari - All rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
