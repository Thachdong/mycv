import React, { useState } from "react";
import { connect } from "react-redux";
import { GiBullseye } from "react-icons/gi";
import { FaSuitcase } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import Project from "./Project";
import Pagination from "./Pagination";

const Content = ({ goal, experience, projects, knowledges }) => {
  const [page, setPage] = useState(1);
  const itemsPerpage = 3;
  const totalPage = Math.ceil(projects.length / itemsPerpage);
  const start = (page - 1) * itemsPerpage;
  const end = page * itemsPerpage;
  const projectsToRender = projects.slice(start, end);
  return (
    <div className="cv__content">
      <div className="goal">
        <div className="header-box flex-box">
          <GiBullseye />
          <h3>Goals</h3>
        </div>
        <div className="content-box">{goal}</div>
      </div>
      <div className="experience">
        <div className="header-box flex-box">
          <FaSuitcase />
          <h3>Work Experience</h3>
        </div>
        <div className="content-box">
          <p>{experience}</p>
          <p>
            To visit my github profile, please click the link:{" "}
            <a href="https://github.com/Thachdong" alt="git repo">
              GitHub
            </a>
          </p>
          <h3>Projects</h3>
          {projectsToRender.map((project, index) => (
            <Project
              key={project._id}
              name={project.name}
              disc={project.disc}
              link={project.link}
              index={index}
            />
          ))}
          <div>
            {projects.length > 3 && (
              <Pagination totalPage={totalPage} page={page} setPage={setPage} />
            )}
          </div>
        </div>
      </div>
      <div className="knowledge">
        <div className="header-box flex-box">
          <MdSchool />
          <h3>Knowledge</h3>
        </div>
        <div className="content-box">
          <p>I have knowledge about:</p>
          <ul>
            {knowledges.map((knowledge) => (
              <li key={knowledge._id}>{knowledge.name}</li>
            ))}
          </ul>
          {/* <table>
            <tbody>
              <tr>
                <th>Knowledge</th>
                <th>Level</th>
              </tr>
              {knowledges.map((knowledge) => (
                <tr key={knowledge._id}>
                  <td>{knowledge.name}</td>
                  <td>{knowledge.value}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cv }) => {
  return {
    goal: cv.goal,
    experience: cv.experience,
    projects: cv.projects,
    knowledges: cv.knowledges,
  };
};
export default connect(mapStateToProps)(Content);
