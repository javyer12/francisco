import React from "react";

export const FeatureComponent = (props) => {
  const {
    id,
    icon,
    title,
    info,
    classnameA,
    classnameB,
    classnameC,
    classnameD,
  } = props;

  return (
    <nav
      className={` d-flex 
            border-bottom border-light-subtle mt-3  ms-2 nav nav-pills ${classnameA}`}
      key={id}
    >
      <a
        className={`nav-link  bg-black text-success my-1 p-3 m-2 ${classnameB}`}
        href="#item-3-1"
      >
        {icon}
      </a>
      <div>
        <small className={`text-secondary  ${classnameC}`}>{title}</small>
        <p className={` ${classnameD}`}>{info}</p>
      </div>
    </nav>
  );
};
