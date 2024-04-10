import React, { useState } from "react";
import logo from "../assets/footerlogo.png";
import { NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <div>
            <img src={logo} alt="" />
          </div>
          {showMenu ? (
            <IoClose
              color="#fff"
              className="menu"
              size={28}
              onClick={handleClick}
            />
          ) : (
            <CgMenu
              color="#fff"
              className="menu"
              size={25}
              onClick={handleClick}
            />
          )}
        </div>
        {showMenu && (
          <ul className="dropdown-lists">
            <li onClick={handleClick}>
              <NavLink to="/portfolio/">Home</NavLink>{" "}
            </li>
            <li onClick={handleClick}>
              <NavLink to="/services">Services</NavLink>{" "}
            </li>
            <li onClick={handleClick}>
              <NavLink to="/projects">Projects</NavLink>{" "}
            </li>
            <li onClick={handleClick}>
              <NavLink to="/education">Education</NavLink>{" "}
            </li>
            <li onClick={handleClick}>
              <NavLink to="/contact">Contact</NavLink>{" "}
            </li>
          </ul>
        )}
        <ul className="header-lists">
          <li>
            <NavLink to="/portfolio/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>{" "}
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
