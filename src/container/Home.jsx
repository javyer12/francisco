import React from "react";
import Carousel from "../components/utils/Carousel/Carousel";
import About from "../components/About/index";
import Tools from "../components/Tools/Index";
import { Proyects } from "../components/Proyects";
import Footer from "../components/Footer/index";

export default function Home() {
  return (
    <React.Fragment>
      <Carousel />
      <About />
      <Tools />
      <Proyects />
      <Footer />
    </React.Fragment>
  );
}
