import React from "react";
import { AiOutlineChrome } from "react-icons/ai";

const Project = ({ name, disc, link, index }) => (
  <div className={index === 2 ? "project-box last-child" : "project-box"}>
    <p className="name">{name}</p>
    <p className="link flex-box">
      <AiOutlineChrome />
      <a href={link} alt={link}>
        {link}
      </a>
    </p>
    <p>{disc}</p>
  </div>
);

export default Project;
