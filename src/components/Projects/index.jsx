import React from "react";
import { Project } from "./Project";
import './projects.css';

// proyects images
import contactCover from "../utils/C/contact.png";
import wandaLanding from "../utils/C/wanda.png";
import kgsjs from "../utils/C/kgsjs.jpeg";
import greena from "../utils/C/green-a.png";
import csharpcrud from "../utils/C/csharp-crud.jpeg";
import kanjiapp from '../utils/C/git_user_demo.png';


const dataProyects = [
  {
    id: 1,
    title: "Contact App",
    description:
      "In order to learn React Router, i built this proyect, it's made with React js and it was deployed in Vercel.",
    imageUrl: contactCover,
    demoUrl: "https://getcontacts.vercel.app/",
    githubUrl: "https://github.com/javyer12/routing-contact",
    dbTarget: "firstProyect",
    proyectIcons: [
      {
        src: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
        alt: "React"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        alt: "Javascript"
      },
      {
        src: "https://reactrouter.com/_brand/react-router-mark-color.png",
        alt: "React Router Icon"
      },
      {
        src: "https://cdn-icons-png.flaticon.com/512/5968/5968550.png",
        alt: "Sass Icon"
      },
      {
        src: "https://karmanivero.us/assets/images/logo-vercel.png",
        alt: "Vercel Icon"
      }
    ]
  },
  {
    id: 2,
    title: "Wanda Maximoff",
    description:
      "In order to learn HTML Tags, i built a landing page of Wanda Maximoff, only HTML5, JavaScript and Bootstrap5 and it's deployed at Github Pages",
    imageUrl: wandaLanding,
    demoUrl: "https://javyer12.github.io/async-landing/",
    githubUrl: "https://github.com/javyer12/async-landing",
    dbTarget: "secondProyect",
    proyectIcons: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        alt: "HTML"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
        alt: "Bootstrap Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        alt: " Javascript"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
        alt: " Github pages"
      }
    ]
  },
  {
    id: 3,
    title: " KGS JS",
    description:
      "Project to generate ramdon messages to commit!!. You can check it out at NPM Web Site. ",
    imageUrl: kgsjs,
    demoUrl: "https://www.npmjs.com/package/kgsjs",
    githubUrl: "https://github.com/javyer12/kgsjs",
    dbTarget: "thirdProyect",
    proyectIcons: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        alt: "JavaScript"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png",
        alt: "Frontend Techs"
      },
      {
        src: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
        alt: "Frontend Techs"
      }
    ]
  },
];

const dataProyects2 = [
  {
    id: 1,
    title: "Kanji App",
    description:
      "Proyect made with React js and Bootstrap, Using the Github User Api, kanji App returns the user's description, if the user exists.",
    imageUrl: kanjiapp,
    demoUrl: "https://kanji-github-users.vercel.app/",
    githubUrl: "https://github.com/javyer12/userGit",
    dbTarget: "forthProyect",
    proyectIcons: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
        alt: "Bootstrap Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        alt: " Javascript"
      },
      {
        src: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
        alt: "Frontend Techs"
      },
      {
        src: "https://karmanivero.us/assets/images/logo-vercel.png",
        alt: "Vercel Icon"
      }
    ]
  },
  {
    id: 2,
    title: "Green A",
    description:
      "In order to learn HTML Tags, i built a landing page  of Green A, only HTML5,CSS3, JavaScript and IndexedDB.",
    imageUrl: greena,
    demoUrl: "https://javagreen.netlify.app",
    githubUrl: "https://github.com/javyer12/green-a",
    dbTarget: "fifthProyect",
    proyectIcons: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        alt: "Javascript"
      },
      {
        src: "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png",
        alt: " CSS"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        alt: "HTML"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
        alt: " Github pages"
      }

    ]
  },
  {
    id: 3,
    title: "C# CRUD",
    description:
      "Building this project,i learned how to create a simple CRUD, i also learned advanced c# concepts, in addition to the SOLID principles",
    imageUrl: csharpcrud,
    demoUrl: "https://github.com/javyer12/entityFramework",
    githubUrl: "https://github.com/javyer12/entityFramework",
    dbTarget: "sixthProyect",
    proyectIcons: [
      {
        classname: "text-success",
        src: "https://www.netgen.co.za/wp-content/uploads/2022/03/C-image-for-Netgen-1024x1024.png",
        alt: "Frontend Techs"
      },
      {
        classname: "text-success",
        src: "https://images.tute.io/media/topics/icons/entity-framework.png",
        alt: "Frontend Techs"
      },
      {
        classname: "text-success",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
        alt: "Frontend Techs"
      }
    ]
  },
];
export function Projects() {
  return (
    <React.Fragment>
      <nav id="projects">
        <div className="container text-center mt-5 mb-4">
          <h1 id="dev-project" className="mt-3 mb-4 text-success">Projects</h1>
          <div className="proyectsList row mt-5 mb-3">
            {dataProyects.map((item) => (
              <div className="col" key={item.id}>
                <Project
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  dbTarget={item.dbTarget}
                  githubUrl={item.githubUrl}
                  demoUrl={item.demoUrl}
                  proyectIcons={item.proyectIcons}
                />
              </div>
            ))}
          </div>
          <div className="proyectsList row mt-3 mb-3">
            {dataProyects2.map((item) => (
              <div className=" col" key={item.id}>
                <Project
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  dbTarget={item.dbTarget}
                  githubUrl={item.githubUrl}
                  demoUrl={item.demoUrl}
                  proyectIcons={item.proyectIcons}

                />
              </div>
            ))}
          </div>
          {/* <ButtonLink
            destination="https://github.com/javyer12"
            label="More Proyects"
            classname="btn shadow btn-outline-dark  btn-lg  mt-4 mb-3 ms-5"
          /> */}
        </div>
      </nav>
    </React.Fragment>
  );
}
