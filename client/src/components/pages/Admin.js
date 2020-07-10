import React from "react";
import PropTypes from "prop-types";
import { AiOutlineDelete } from "react-icons/ai";

const Admin = ({
  info,
  skills,
  skill,
  languages,
  language,
  projects,
  project,
  knowledges,
  knowledge,
  handleChange,
  addObject,
  removeObject,
  cloudinaryUpload,
  handleUpdate,
  isLoading,
  cv,
}) => {
  return (
    <div className="admin">
      {(isLoading || cv.isLoading) && (
        <div className="preloader flex-box">
          <div></div>
        </div>
      )}
      <form>
        <h3>Update CV</h3>
        <fieldset>
          <legend>Candidate Infos</legend>
          <div className="form-group flex-box avatar">
            <img
              src={info.avatar ? info.avatar : cv.avatar}
              alt="avatar"
              width={125}
            />
            <input
              type="file"
              onChange={(e) => cloudinaryUpload(e.target.files[0])}
            />
          </div>
          <div className="form-group flex-box">
            <label>Position</label>
            <input
              type="text"
              required
              value={
                info.position || info.position === ""
                  ? info.position
                  : cv.position
              }
              onChange={(e) => {
                handleChange("info", { ...info, position: e.target.value });
              }}
              placeholder="Position ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>FullName</label>
            <input
              type="text"
              required
              value={
                info.fullName || info.fullName === ""
                  ? info.fullName
                  : cv.fullName
              }
              onChange={(e) => {
                handleChange("info", { ...info, fullName: e.target.value });
              }}
              placeholder="FullName ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Birthday</label>
            <input
              type="text"
              required
              value={
                info.birthDay || info.birthDay === ""
                  ? info.birthDay
                  : cv.birthDay
              }
              onChange={(e) => {
                handleChange("info", { ...info, birthDay: e.target.value });
              }}
              placeholder="Birthday ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Phone</label>
            <input
              type="text"
              required
              value={info.phone || info.phone === "" ? info.phone : cv.phone}
              onChange={(e) => {
                handleChange("info", { ...info, phone: e.target.value });
              }}
              placeholder="Phone ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Email</label>
            <input
              type="text"
              required
              value={info.email || info.email ? info.email : cv.email}
              onChange={(e) => {
                handleChange("info", { ...info, email: e.target.value });
              }}
              placeholder="Email ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Address</label>
            <input
              type="text"
              required
              value={
                info.address || info.address === "" ? info.address : cv.address
              }
              onChange={(e) => {
                handleChange("info", { ...info, address: e.target.value });
              }}
              placeholder="Address ..."
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Goals</legend>
          <div className="form-group flex-box">
            <label>Goal</label>
            <textarea
              type="text"
              required
              value={info.goal || info.goal === "" ? info.goal : cv.goal}
              onChange={(e) => {
                handleChange("info", { ...info, goal: e.target.value });
              }}
              placeholder="Skill ..."
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Experiences</legend>
          <div className="form-group flex-box">
            <label>Discript</label>
            <textarea
              type="text"
              required
              value={
                info.experience || info.experience === ""
                  ? info.experience
                  : cv.experience
              }
              onChange={(e) => {
                handleChange("info", { ...info, experience: e.target.value });
              }}
              placeholder="Discription ..."
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <th>Skill</th>
                  <th>Value(%)</th>
                  <th>Remove</th>
                </tr>
                {skills
                  ? skills.map((skill, index) => (
                      <tr key={index}>
                        <td>{skill.name}</td>
                        <td>{skill.value}</td>
                        <td>
                          <AiOutlineDelete
                            width={10}
                            height={10}
                            onClick={() =>
                              removeObject("skills", index, skills)
                            }
                          />
                        </td>
                      </tr>
                    ))
                  : cv.skills.map((skill, index) => (
                      <tr key={skill._id}>
                        <td>{skill.name}</td>
                        <td>{skill.value}</td>
                        <td>
                          <AiOutlineDelete
                            width={10}
                            height={10}
                            onClick={() =>
                              removeObject("skills", index, cv.skills)
                            }
                          />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          <div className="form-group flex-box">
            <label>Skill</label>
            <input
              type="text"
              value={skill ? skill.name : ""}
              onChange={(e) => {
                handleChange("skill", { ...skill, name: e.target.value });
              }}
              placeholder="Skill ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Value</label>
            <input
              type="number"
              value={skill ? skill.value : ""}
              onChange={(e) => {
                handleChange("skill", { ...skill, value: e.target.value });
              }}
              min={0}
              max={100}
              placeholder="Value ..."
            />
          </div>
          <span className="add-btn" onClick={() => addObject("skills")}>
            Add
          </span>
        </fieldset>
        <fieldset>
          <legend>Languages</legend>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <th>Language</th>
                  <th>Value(%)</th>
                  <th>Remove</th>
                </tr>
                {languages
                  ? languages.map((language, index) => (
                      <tr key={index}>
                        <td>{language.name}</td>
                        <td>{language.value}</td>
                        <td>
                          <AiOutlineDelete
                            width={10}
                            height={10}
                            onClick={() =>
                              removeObject("languages", index, languages)
                            }
                          />
                        </td>
                      </tr>
                    ))
                  : cv.languages.map((language, index) => (
                      <tr key={language._id}>
                        <td>{language.name}</td>
                        <td>{language.value}</td>
                        <td>
                          <AiOutlineDelete
                            width={10}
                            height={10}
                            onClick={() =>
                              removeObject("languages", index, cv.languages)
                            }
                          />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          <div className="form-group flex-box">
            <label>Language</label>
            <input
              type="text"
              value={language ? language.name : ""}
              onChange={(e) => {
                handleChange("language", { ...language, name: e.target.value });
              }}
              placeholder="Language ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Value</label>
            <input
              type="number"
              value={language ? language.value : ""}
              onChange={(e) => {
                handleChange("language", {
                  ...language,
                  value: e.target.value,
                });
              }}
              min={0}
              max={100}
              placeholder="Value ..."
            />
          </div>
          <span className="add-btn" onClick={() => addObject("languages")}>
            Add
          </span>
        </fieldset>
        <fieldset>
          <legend>Projects</legend>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <th>Project</th>
                  <th>Disc</th>
                  <th>Link</th>
                  <th>Remove</th>
                </tr>
                {projects
                  ? projects.map((project, index) => (
                      <tr key={index}>
                        <td className="truncate-table-cell">{project.name}</td>
                        <td className="truncate-table-cell">{project.disc}</td>
                        <td>
                          <a href={project.link} alt={project.name}>
                            Link
                          </a>
                        </td>
                        <td>
                          <AiOutlineDelete
                            width={10}
                            height={10}
                            onClick={() =>
                              removeObject("projects", index, projects)
                            }
                          />
                        </td>
                      </tr>
                    ))
                  : cv.projects.map((project, index) => (
                      <tr key={project._id}>
                        <td className="truncate-table-cell">{project.name}</td>
                        <td className="truncate-table-cell">{project.disc}</td>
                        <td>
                          <a href={project.link} alt={project.name}>
                            Link
                          </a>
                        </td>
                        <td>
                          <AiOutlineDelete
                            width={10}
                            height={10}
                            onClick={() =>
                              removeObject("projects", index, cv.projects)
                            }
                          />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          <div className="form-group flex-box">
            <label>Project</label>
            <input
              type="text"
              value={project ? project.name : ""}
              onChange={(e) => {
                handleChange("project", { ...project, name: e.target.value });
              }}
              placeholder="Project ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Link</label>
            <input
              type="text"
              value={project ? project.link : ""}
              onChange={(e) => {
                handleChange("project", { ...project, link: e.target.value });
              }}
              placeholder="Link ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Discript</label>
            <textarea
              type="text"
              value={project ? project.disc : ""}
              onChange={(e) => {
                handleChange("project", { ...project, disc: e.target.value });
              }}
              placeholder="Discription ..."
            />
          </div>
          <span className="add-btn" onClick={() => addObject("projects")}>
            Add
          </span>
        </fieldset>
        <fieldset>
          <legend>Knowledge</legend>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <th>Knowledge</th>
                  <th>Value</th>
                  <th>Remove</th>
                </tr>
                {knowledges
                  ? knowledges.map((knowledge, index) => (
                      <tr key={index}>
                        <td>{knowledge.name}</td>
                        <td>{knowledge.value}</td>
                        <td>
                          <AiOutlineDelete
                            width={10}
                            height={10}
                            onClick={() =>
                              removeObject("knowledges", index, knowledges)
                            }
                          />
                        </td>
                      </tr>
                    ))
                  : cv.knowledges.map((knowledge, index) => (
                      <tr key={knowledge._id}>
                        <td>{knowledge.name}</td>
                        <td>{knowledge.value}</td>
                        <td>
                          <AiOutlineDelete
                            width={10}
                            height={10}
                            onClick={() =>
                              removeObject("knowledges", index, cv.knowledges)
                            }
                          />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          <div className="form-group flex-box">
            <label>Name</label>
            <input
              type="text"
              value={knowledge ? knowledge.name : ""}
              onChange={(e) => {
                handleChange("knowledge", {
                  ...knowledge,
                  name: e.target.value,
                });
              }}
              placeholder="Name ..."
            />
          </div>
          <div className="form-group flex-box">
            <label>Value</label>
            <input
              type="text"
              value={knowledge ? knowledge.value : ""}
              onChange={(e) => {
                handleChange("knowledge", {
                  ...knowledge,
                  value: e.target.value,
                });
              }}
              placeholder="Value ..."
            />
          </div>
          <span className="add-btn" onClick={() => addObject("knowledges")}>
            Add
          </span>
        </fieldset>
        <button className="update-btn" onClick={handleUpdate}>
          UPATE
        </button>
      </form>
    </div>
  );
};

Admin.propTypes = {
  info: PropTypes.object,
  skills: PropTypes.arrayOf(PropTypes.object),
  skill: PropTypes.object,
  languages: PropTypes.arrayOf(PropTypes.object),
  language: PropTypes.object,
  projects: PropTypes.arrayOf(PropTypes.object),
  project: PropTypes.object,
  knowledges: PropTypes.arrayOf(PropTypes.object),
  knowledge: PropTypes.object,
  handleChange: PropTypes.func,
  addObject: PropTypes.func,
  error: PropTypes.object,
  cv: PropTypes.object,
};

export default Admin;
