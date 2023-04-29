import React from "react";

function DescriptiveComponent(props) {
  return (
    < nav className="border-5 border-end border-success  d-block justify-content-start  rounded-4  m-3">
      <p className="text-start p-2 ">{props.headerMessage}</p>
      <div className="ms-5">
        <a
          target="_blank" rel="noreferrer"
          className="text-center text-decoration-none m-0 p-0 text-body-tertiary "
          href={props.repoLink}
        >
          {props.description}
        </a>
      </div>
    </nav >
  );
}

export default DescriptiveComponent;
