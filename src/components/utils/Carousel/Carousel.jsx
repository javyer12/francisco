import React from "react";
import "./Carousel.css";

import { NextButton } from "../Buttons/Button";
import { ButtonLink } from "../Buttons/Button";

import me from "../C/me5.png";
import me5 from "../C/me4.png";

export default function Carousel(props) {
  return (
    <React.Fragment>
      <div className="z-3  naming mt-5 ">
        <div className=" mt-5 top-50 start-50 translate-middle d-block justify-content-center">
          <h1 className="text-success text-md">Francisco Murillo</h1>
          <h3 className="text-success  text-sm-center">Front-End Developer</h3>

          <div className="d-flex carousel_button justify-content-around mt-5 ms-5">
            <NextButton
              label="Get Started!"
              classname="btn btn-outline-dark btn-lg p-3 ms-5 mt-5 carousel_button-label"
              destination="#about"
            />
            <ButtonLink
              label="Watch CV"
              classname="btn btn-outline-dark btn-lg ms-5 mt-5 carousel_button-label"
              destination="https://www.canva.com/design/DAFS3vyQgWU/uD9bqDSt6j9qvsmIIshHxw/view"
            />
          </div>
        </div>
      </div>
      {/* //////////////carousel images///////////////////// */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mainCarousel"
        data-bs-rid="carousel"
      >
        <div className="carousel-inner ">
          <div className=" carousel-item active mainCarousel">
            <img src={me} classname="card-img-top" alt="me" />
          </div>
          {/* <div className="carousel-item active mainCarousel">
            <img src={me5} classname="card-img-top " alt="me" />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  );
}
