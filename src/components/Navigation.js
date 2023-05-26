import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  var iconList = ["bx bx-menu", "bx bx-x"];
  const [icon, setIcon] = useState(iconList[0]);

  const [navClass, setNavClass] = useState("notVisible");

  const iconClick = () => {
    icon === iconList[0] ? setIcon(iconList[1]) : setIcon(iconList[0]);
    icon === iconList[0] ? setNavClass("visible") : setNavClass("notVisible");
  };

  const closeNav = () => {
    setIcon(iconList[0])
    setNavClass("notVisible")
  };

  return (
    <div className="navbar">
      <i class={icon} onClick={iconClick}></i>

      <nav className={navClass}>
        <Link className="link1 links" onClick={closeNav} to="/">
          <p>About</p>
        </Link>
        <Link className="link2 links" onClick={closeNav} to="/portfolio">
          <p>Portfolio</p>
        </Link>
        <Link className="link3 links" onClick={closeNav} to="/contact">
          <p>Contact</p>
        </Link>
        <Link className="link4 links" onClick={closeNav} to="/resume">
          <p>Resume</p>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;