import React, { useState } from "react";
import DescriptiveComponent from "../utils/components/DescriptiveComponent";
import Icons from "../utils/Icons/Icons";

export const Project = (props) => {
  const { dbTarget, title, description, imageUrl, demoUrl, githubUrl, moreProjects, proyectIcons } = props;
  return (
    <React.Fragment>
      <div
        className="modal fade modal-dialog-scrollable  bg-transparent"
        id={dbTarget}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalToggleLabel">
                {" "}
                {title}
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                className="card-img-top"
                src={imageUrl}
                alt="proyect"
              />
            </div>
            <div className="modal-body">{description}</div>

            <div className="modal-body">
              <DescriptiveComponent
                headerMessage="Repository:"
                repoLink={githubUrl}
                description="Repository Link at Github"
              />
              <DescriptiveComponent
                headerMessage="Demo Link"
                repoLink={demoUrl}
                description="Check the proyect, Onclick here!."
              />
            </div>
            <div className="modal-body">
              <h5 className="text-start">Techs:</h5>
              {/* tech icons */}
              <div>
                {proyectIcons.map((item) => {
                  <Icons classname={item.classname} src={item.src} alt="" />
                })}
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="https://github.com/javyer12?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-black"
              >See More Projects</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card shadow"
        data-bs-target={`#${dbTarget}`}
        data-bs-toggle="modal"
      >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a data-bs-target={`#${dbTarget}`} className="btn btn-outline-dark">
            More Details
          </a>
        </div>
      </div>
      {/* <button class="btn btn-warning" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button> */}
    </React.Fragment>
  );
};
