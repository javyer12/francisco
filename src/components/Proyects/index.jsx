import React from "react";
import { Proyect } from "./Proyect";
import { NextButton } from "../utils/Buttons/Button";
import './proyects.css';

// proyects images
import contactCover from "../utils/C/contactCover.jpeg";
import wandaLanding from "../utils/C/wandaLanding.jpeg";
import kgsjs from "../utils/C/kgsjs.jpeg";
import greena from "../utils/C/green.jpeg";
import csharpcrud from "../utils/C/csharp-crud.jpeg";
import kanjiapp from '../utils/C/kanjiapp.jpeg';

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
  },
];

export function Proyects() {
  return (
    <React.Fragment>
      <nav id="proyects">
        <div className="container text-center mb-4">
          <h4 className="mt-3 text-success">Proyects</h4>
          <div className="proyectsList row mt-3 mb-3">
            {dataProyects.map((item) => (
              <div className=" col" key={item.id}>
                <Proyect
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  dbTarget={item.dbTarget}
                  githubUrl={item.githubUrl}
                  demoUrl={item.demoUrl}
                />
              </div>
            ))}
          </div>
          <div className="proyectsList row mt-3 mb-3">
            {dataProyects2.map((item) => (
              <div className=" col" key={item.id}>
                <Proyect
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  dbTarget={item.dbTarget}
                  githubUrl={item.githubUrl}
                  demoUrl={item.demoUrl}
                />
              </div>
            ))}
          </div>
          <NextButton
            destination="https://platzi.com/p/franmurillo/"
            label="More Proyects"
            classname="btn shadow btn-outline-dark  btn-lg  mt-4 ms-5"
          />
        </div>
      </nav>
    </React.Fragment>
  );
}
