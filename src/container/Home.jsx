import React from "react";
import Carousel from "../components/utils/Carousel/Carousel";
import About from "../components/About/index";
import Tools from "../components/Tools/Index";
import { Projects } from "../components/Projects";
import Footer from "../components/Footer/index";
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <React.Fragment>
      {/* <Carousel /> */}
      <AboutMe />
      <Tools />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}
