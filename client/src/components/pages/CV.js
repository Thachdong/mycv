import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar";
import Content from "../Content";
import { GiGears } from "react-icons/gi";
import { FaFileDownload } from "react-icons/fa";

const CV = () => (
  <div className="cv container">
    <SideBar />
    <Content />
    <Link className="edit-btn" to="/admin">
      <GiGears />
    </Link>
    <button className="download-btn" onClick={() => window.print()}>
      <FaFileDownload />
    </button>
  </div>
);

export default CV;
