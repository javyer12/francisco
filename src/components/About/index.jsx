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
  // ...moreInfo is rest operator, parametro  rest si es un arreglo real
  // const user = (name, career, ...moreInfo) => {
  // console.log(name + career);
  // console.log(moreInfo);
  // }
  //  ...[ "Honduras", "Single" ] is spreed operator
  // user("luca", "dev", ...[ "Honduras", "Single" ])
  return (
    <React.Fragment>
      <div id="about" className="row h-100 bg-dark p-2 w-105 ">
        <div className=" col-4 mt-5 w-20 m-4  text-center" data-bs-spy="scroll">
          <nav className=" shadow bg-black rounded nav nav-pills flex-column">
            <div className="text-center img-profile ">
              <img src={me} alt="francisco murillo" className="img-fluid" />
            </div>
            <nav
              id="navbar-example3 "
              className="h-100 flex-column align-items-stretch p-3 border-end m-3 mt-0"
            >
              <h5 className="text-white">Francisco Murillo</h5>
              <h6 className="text-white bg-dark rounded p-2">
                Front-End Developer
              </h6>
              <nav className="nav mt-4 mb-1 nav-pills d-flex d-flex justify-content-around">
                <a className="nav-link shadow bg-dark my-1" href="https://github.com/javyer12">
                  {" "}
                  <AiFillGithub className="text-white" />
                </a>
                <a className="nav-link shadow bg-dark my-1" href="https://www.linkedin.com/in/francisco-javier-murillo-guillen-6302bb203/">
                  <BsLinkedin className="text-white" />{" "}
                </a>
                <a className="nav-link shadow bg-dark my-1" href="#item-1-2">
                  {" "}
                  <AiOutlineMail
                    href="mailto:franmurillo894@gmail.com"
                    className="text-white"
                  />
                </a>
                <a
                  className="nav-link shadow bg-dark my-1"
                  href="https://twitter.com/FBollys"
                >
                  {" "}
                  <BsTwitter className="text-white" />
                </a>
                <a className="nav-link bg-dark my-1" href="#item-1-2">
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

        <div className="col-7  shadow mt-3 m-4 p-0 h-100 ">
          <h4 className="text-success text-start m-3">About Me</h4>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className=" border border-dark bg-black shadow  border-2 rounded scrollspy-example-2 d-flex"
            tabIndex="0"
          >
            <div id="item-1-1">
              <div className="m-3 ">
                <p className="text-white">
                  Soy un desarrollador web y de aplicaciones móviles junior con
                  una pasión por crear soluciones innovadoras y atractivas para
                  la web y los dispositivos móviles.{" "}
                  <small className="text-white">
                    Con experiencia en HTML, CSS, JavaScript, Flutter, React
                  </small>
                  , me esfuerzo por producir código limpio, eficiente y
                  accesible tanto para la web como para aplicaciones móviles. Mi
                  experiencia incluye el desarrollo de sitios web y aplicaciones
                  móviles para pequeñas empresas y proyectos personales. Me
                  enfoco en garantizar una experiencia de usuario excelente en
                  todos los dispositivos, trabajando de manera colaborativa con
                  diseñadores y otros desarrolladores para alcanzar los
                  objetivos de proyecto. Además, estoy comprometido con el
                  aprendizaje constante y estoy dispuesto a adaptarme a nuevas
                  tecnologías y herramientas para mejorar mis habilidades y
                  aportar valor a los proyectos. Me encanta trabajar en equipo y
                  estoy dispuesto a hacer lo necesario para lograr el éxito del
                  proyecto. Con un enfoque en la atención al detalle y la
                  búsqueda constante de soluciones eficientes, estoy listo para
                  enfrentar cualquier desafío y ayudar a mis clientes a alcanzar
                  sus objetivos en línea.
                </p>
                <div className="d-flex   justify-content-center">
                  <NextButton
                    label="Dev Tools"
                    classname="btn shadow btn-success  btn-lg  ms-5"
                    destination="#tools"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
