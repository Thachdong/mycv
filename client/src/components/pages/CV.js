import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar";
import Content from "../Content";
import { GiGears } from "react-icons/gi";

const CV = () => (
  <div className="cv container">
    <SideBar />
    <Content />
    <Link className="edit-btn" to="/admin">
      <GiGears />
    </Link>
  </div>
);

export default CV;
