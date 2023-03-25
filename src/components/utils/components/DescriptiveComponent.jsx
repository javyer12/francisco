import React from "react";

function DescriptiveComponent(props) {
  return (
    <nav className="border border-end-0 d-block justify-content-start  rounded border-secondary-subtle m-3">
      <div className="border-5 border-end border-success rounded-4 p-2">
        <div className="ps-4">
          <p className="text-start ">{props.headerMessage}</p>
        </div>

        <div className="ms-5">
          <p className="text-start ">
            <a
              className="text-decoration-none text-body-tertiary "
              href={props.repoLink}
            >
              {props.description}
            </a>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default DescriptiveComponent;
