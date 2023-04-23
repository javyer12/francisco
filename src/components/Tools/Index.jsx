import React from "react";
import { NextButton } from "../utils/Buttons/Button";
import { FeatureComponent } from "../utils/components/FeatureComponent";

import './devtools.css';
// Icons List
// front icons
import { DiChrome } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { ImCss3 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
// back icons
import { FaNode } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FcAcceptDatabase } from "react-icons/fc";
// new tools icons
import { BiGitBranch } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { IoLogoHtml5 } from "react-icons/io";

const frontTools = [
  {
    id: 1,
    title: "Javascript | HTML5 | CSS3:",
    info: "Advanced",
    icon: <DiChrome />,
  },
  {
    id: 2,
    title: "TypeScript:",
    info: "Mid-Level",
    icon: <SiTypescript />,
  },
  {
    id: 3,
    title: "CSS Frameworks:",
    info: "Boostrap | Tailwind-css",
    icon: <ImCss3 />,
  },
  {
    id: 4,
    title: "React JS",
    info: "Advanced",
    icon: <FaReact />,
  },
  {
    id: 5,
    title: "Next JS",
    info: "Mid-Level",
    icon: <SiNextdotjs />,
  },
];

const backTools = [
  {
    id: 1,
    title: "Node Js | Express Js",
    info: "Backend Framework",
    icon: <FaNode />,
  },
  {
    id: 2,
    title: "C# | .Net Core",
    info: "Mid-Level",
    icon: <SiCsharp />,
  },
  {
    id: 3,
    title: "Authentication",
    info: "Passport js and JWT",
    icon: <SiAuth0 />,
  },
  {
    id: 4,
    title: "ORM's",
    info: "Entity Framework | Sequelize",
    icon: <SiSequelize />,
  },
  {
    id: 5,
    title: "SQL: ",
    info: "PostgreSQL | SQL Server",
    icon: <FcAcceptDatabase />,
  },
];

const currentlyLearning = [
  {
    id: 1,
    title: "Git",
    info: "Version Control Tools",
    icon: <BiGitBranch />,
  },
  {
    id: 2,
    title: "Docker",
    info: "Currently Learning",
    icon: <FaDocker />,
  },
  {
    id: 3,
    title: "Nest Js",
    info: "Currently Learning",
    icon: <SiNestjs />,
  },
  {
    id: 4,
    title: "Deployment",
    info: "Vercel | Digital Ocean",
    icon: <AiOutlineDeploymentUnit />,
  },
  {
    id: 5,
    title: "HandleBars",
    info: "HTML Templating Engine",
    icon: <IoLogoHtml5 />,
  },
];

export default function Tools() {
  return (
    <React.Fragment>
      <nav id="tools">
        <div className=" container  text-center mb-4">
          <h1 id="dev-tool" className="mt-3 mb-3 text-center text-success">Dev Tools</h1>
          <div className="devTools row mt-3 mb-3">
            <div className="col ">
              <div className="border mt-2 border-light-subtle border-2 shadow rounded p-3">
                <h4 className="bg-dark shadow text-white m-2 mb-4">
                  Front-End
                </h4>
                <div>
                  <div>
                    {frontTools.map((item) => (
                      <nav key={item.id}>
                        <FeatureComponent
                          title={item.title}
                          info={item.info}
                          icon={item.icon}
                          classnameC="text-black fs-6 text-center"
                          classnameD="text-secondary "
                        />
                      </nav>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="border mt-2 border-light-subtle border-2 shadow rounded  p-3">
                <h4 className="bg-dark shadow text-white m-2 mb-4">Back-End</h4>
                <div>
                  <div className="">
                    {backTools.map((item) => (
                      <nav key={item.id}>
                        <FeatureComponent
                          title={item.title}
                          info={item.info}
                          icon={item.icon}
                          classnameC="text-black fs-6 text-center"
                          classnameD="text-secondary"
                        />
                      </nav>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="border mt-2 border-light-subtle border-2 shadow rounded  p-3">
                <h4 className="bg-dark shadow text-white m-2 mb-4">
                  New Tools
                </h4>
                <div>
                  <div className="">
                    {currentlyLearning.map((item) => (
                      <nav key={item.id}>
                        <FeatureComponent
                          title={item.title}
                          info={item.info}
                          icon={item.icon}
                          classnameC="text-black fs-6 text-center"
                          classnameD="text-secondary"
                        />
                      </nav>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <NextButton
            destination="#proyects"
            label="Proyects"
            classname="btn shadow btn-outline-dark  btn-lg  mt-4 ms-5"
          /> */}
        </div>
      </nav>
    </React.Fragment>
  );
}
// -0-155-134
// 0-200-170
