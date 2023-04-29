import React from "react";
import "./About.css";
import me from "../utils/C/me5.png";
import MoreInfo from "./MoreInfo";
import { NextButton } from "../utils/Buttons/Button";

import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function About() {

  return (
    <React.Fragment>
      <div id="about" className="row p-2 m-4 mt-5">
        <div className="me-info col-4 mb-0 mt-4 text-center" data-bs-spy="scroll">
          <nav className="bg-light  mb-0 shadow nav nav-pills flex-column">
            <div id="about-photo" className=" text-center img-profile ">
              <img id="about_me" src={me} alt="francisco murillo" className="" />
            </div>
            <nav
              id="navbar-example3 "
              className="h-100 flex-column align-items-stretch p-3 border-end m-3 mb-0 mt-0"
            >
              <h5 className="text-black">Francisco Murillo</h5>
              <h6 className="text-white bg-dark rounded p-2">
                Front-End Developer
              </h6>
              <nav className=" nav mt-4 mb-1 nav-pills d-flex d-flex justify-content-around">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="social_link nav-link shadow bg-dark my-1"
                  href="https://github.com/javyer12">
                  {" "}
                  <AiFillGithub className="text-white" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link shadow bg-dark my-1"
                  href="https://www.linkedin.com/in/francisco-javier-murillo-guillen-6302bb203/">
                  <BsLinkedin className="text-white" />{" "}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link shadow bg-dark my-1"
                  href="mailto:javyermurillo1gmail.com">
                  {" "}
                  <AiOutlineMail
                    href="mailto:franmurillo894@gmail.com"
                    className="text-white"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link shadow bg-dark my-1"
                  href="https://twitter.com/FBollys"
                >
                  {" "}
                  <BsTwitter className="text-white" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link bg-dark my-1"
                  href="https://api.whatsapp.com/send?phone=50499402691">
                  {" "}
                  <AiOutlineWhatsApp className="text-white" />
                </a>
              </nav>

              <nav className="bg-dark d-flex  mt-5 rounded nav nav-pills ">
                <MoreInfo />
              </nav>
            </nav>
          </nav>
        </div>

        <div className=" me-description mt-4 col-8 shadow ">
          <h2 id="about_me" className="text-success text-center pt-3 mb-0 m-4">About Me</h2>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className="scrollspy-example-2 d-flex"
            tabIndex="0"
          >
            <div id="item-1-1">
              <div className="m-3">
                <p className="text-black text-start lh-base">
                  Soy un desarrollador Front-End Junior con
                  una pasión por crear soluciones innovadoras y atractivas para
                  la web y los dispositivos móviles.{" "}
                  <small className="text-success">
                    Con experiencia en HTML, CSS, JavaScript, Next js, React
                  </small>
                  ; Estoy en constante aprendizaje para crear código limpio, eficiente y
                  accesible tanto para la web como para aplicaciones móviles. Mi
                  experiencia incluye el desarrollo de sitios web y aplicaciones
                  móviles en proyectos personales. Me enfoco en garantizar una experiencia de usuario excelente en
                  todos los dispositivos, trabajando de manera colaborativa con
                  diseñadores y otros desarrolladores para alcanzar los
                  objetivos de proyecto.
                </p>

                {/* <div className="d-flex   justify-content-center">
                  <NextButton
                    label="Dev Tools"
                    classname="btn shadow btn-outline-dark  btn-lg  ms-5"
                    destination="#tools"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
