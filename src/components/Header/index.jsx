import React, { useState } from "react";
import "./Header.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const socialMedia = [
  {
    id: 1,
    icon: <AiFillGithub />,
    href: "https://github.com/javyer12",
  },
  {
    id: 2,
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/francisco-javier-murillo-guillen-6302bb203/",
  },
  {
    id: 3,
    icon: <AiOutlineMail />,
    href: "mailto:franmurillo894@gmail.com",
  },
  {
    id: 4,
    icon: <BsTwitter />,
    href: "https://twitter.com/FBollys",
  },
];
export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <nav className="header navbar bg-white  fixed-top ">
      <div className="container-fluid d-flex ">
        <a
          className="shadow navbar-brand bg-secondary-subtle rounded-circle p-2 text-success"
          href="/"
        >
          JM
        </a>
        <div className="me-auto ">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              // style={{ backgroundColor: isHovered ? 'rgba(025,150,10,0.8)' : 'transparent' }}
              className="text-end fs-5  ms-3 shadow text-success border border-light rounded-circle p-2"
              href={item.href}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <button
          className="navbar-toggler border  border-secondary-subtle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Content
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#about"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#tools">
                  My Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#proyects">
                  My Proyects
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  text-white dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More Web Sites
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
