import React, { useRef, useEffect } from "react";
import "./About.css";
import me from "../utils/C/me5.png";
import MoreInfo from "./MoreInfo";
import { animated } from '@react-spring/web';

import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function About() {
  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let bg = document.getElementById('about')
          bg.addEventListener('mouseenter', () => {
            console.log('it left')
          })
          console.log('El elemento está dentro del área de intersección');
        } else {
          console.log('El elemento está fuera del área de intersección');
        }
      });
    });

    observer.observe(targetRef.current);
    return () => {
      observer.unobserve(targetRef.current);
    };
  }, []);

  return (
    <React.Fragment>
      <animated.div id="about" className="row p-4 pt-2 mt-5" ref={targetRef}>

        <div className="z-3 me-info col-4 mb-0 mt-4 text-center" data-bs-spy="scroll">
          <nav className="bg-white shadow  mb-0 nav nav-pills flex-column">
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

        <animated.div className="z-3  bg-white me-description mt-4 col-8 shadow ">

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
                  Self-taught person, Passionate about software development,
                  focused on creating websites with technologies such as
                  {" "}
                  <small className="text-success">
                    JavaScript, React Js, Node Js, Bootstrap, Material-ui, React Router,
                  </small>
                  among others. Enthusiast of digital development and lover of art and technology.
                </p>
                <p className="text-black text-start lh-base">

                  I am constantly learning to create clean, efficient and accessible code for both web and mobile applications.
                  My experience includes the development of websites and mobile applications in personal projects.
                  I focus on ensuring a great user experience across all devices,
                  working collaboratively with designers and other developers to achieve project goals.
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
        </animated.div>
      </animated.div>
    </React.Fragment>
  );
}
