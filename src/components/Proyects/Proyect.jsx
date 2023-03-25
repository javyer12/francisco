import React, { useState } from "react";
import DescriptiveComponent from "../utils/components/DescriptiveComponent";

export const Proyect = (props) => {
  // const { title, description, imageUrl, demoUrl, githubUrl } = props;
  return (
    <React.Fragment>
      <div
        className="modal fade modal-dialog-scrollable  bg-transparent"
        id={props.dbTarget}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                {" "}
                {props.title}
              </h1>
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
                src={props.imageUrl}
                alt="proyect"
              />
            </div>
            <div className="modal-body">{props.description}</div>

            <div className="modal-body">
              <DescriptiveComponent
                headerMessage="Repository:"
                repoLink={props.githubUrl}
                description="Repository Link at Github"
              />
              <DescriptiveComponent
                headerMessage="Demo Link"
                repoLink={props.demoUrl}
                description="You can check the proyect by clicking here!."
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card shadow"
        data-bs-target={`#${props.dbTarget}`}
        // className="card shadow" data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a data-bs-target={`#${props.dbTarget}`} className="btn btn-success">
            More Details
          </a>
        </div>
      </div>
      {/* <button class="btn btn-warning" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button> */}
    </React.Fragment>
  );
};
