import React from "react";
import { Link } from "react-scroll";

export default function Sidebar(props) {
  let drawerClasses = "sidebar-con";
  if (props.show) {
    drawerClasses = "sidebar-con open";
  }
  return (
    <div className={drawerClasses}>
      <nav className="sidebar">
        <ul className="overlay-content">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about-me"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
