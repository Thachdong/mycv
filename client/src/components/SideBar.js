import React from "react";
import { connect } from "react-redux";
import { BsBriefcase } from "react-icons/bs";
import { GiPhone, GiEarthAfricaEurope } from "react-icons/gi";
import { FaAsterisk } from "react-icons/fa";
import { GoLocation, GoMail } from "react-icons/go";
import ProgressBar from "./Progressbar";

const SideBar = ({ cv }) => {
  return (
    <div className="cv__sidebar">
      <div className="avatar-box">
        <img src={cv.avatar} alt={cv._id} />
        <h3>{cv.fullName}</h3>
      </div>
      <div className="side-box">
        <div className="side-box__info flex-box">
          <BsBriefcase />
          <p>{cv.position}</p>
        </div>
        <div className="side-box__info flex-box">
          <GoLocation />
          <p>{cv.address}</p>
        </div>
        <div className="side-box__info flex-box">
          <GoMail />
          <p style={{ wordBreak: "break-all" }}>
            <a className="format-anchor" href={`mailto:${cv.email}`}>
              {cv.email}
            </a>
          </p>
        </div>
        <div className="side-box__info flex-box">
          <GiPhone />
          <p>
            <a className="format-anchor" href={`tel:${cv.phone}`}>
              {cv.phone}
            </a>
          </p>
        </div>
      </div>
      <div className="side-box">
        <div className="side-box__header flex-box">
          <FaAsterisk />
          <h3>Skills</h3>
        </div>
        <div className="side-box__content">
          {cv.skills.map((skill, index) => (
            <ProgressBar key={index} name={skill.name} value={skill.value} />
          ))}
        </div>
      </div>
      <div className="side-box">
        <div className="side-box__header flex-box">
          <GiEarthAfricaEurope />
          <h3>Languages</h3>
        </div>
        <div className="side-box__content">
          {cv.languages.map((language, index) => (
            <ProgressBar
              key={index}
              name={language.name}
              value={language.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cv }) => ({ cv });
export default connect(mapStateToProps)(SideBar);
