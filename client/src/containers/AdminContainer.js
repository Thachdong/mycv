import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Admin from "../components/pages/Admin";
import { updateCv } from "../redux/actions/cvActions";
import { skillSchema, projectSchema, knowledgeSchema } from "../validators";

const AdminContainer = ({ cv, updateCv }) => {
  const [info, setInfo] = useState({});
  const [skill, setSkill] = useState();
  const [skills, setSkills] = useState();
  const [language, setLanguage] = useState();
  const [languages, setLanguages] = useState();
  const [project, setProject] = useState();
  const [projects, setProjects] = useState();
  const [knowledge, setKnowledge] = useState();
  const [knowledges, setKnowledges] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleChange = (identify, value) => {
    switch (identify) {
      case "info":
        setInfo(value);
        return true;
      case "skill":
        setSkill(value);
        return true;
      case "language":
        setLanguage(value);
        return true;
      case "project":
        setProject(value);
        return true;
      case "knowledge":
        setKnowledge(value);
        return true;
      default:
        return true;
    }
  };

  const addObject = (identify) => {
    switch (identify) {
      case "skills":
        const validSkill = skillSchema.validate(skill);
        if (validSkill.value && !validSkill.error) {
          const newValue =
            skills === undefined
              ? [{ ...skill }, ...cv.skills]
              : [{ ...skill }, ...skills];
          setSkills(newValue);
          setSkill(null);
          return true;
        }
        validSkill.value === undefined &&
          alert("Skill and it's value is require");
        validSkill.error && alert(validSkill.error);
        return true;
      case "languages":
        const validLanguage = skillSchema.validate(language);
        if (validLanguage.value && !validLanguage.error) {
          const newValue =
            languages === undefined
              ? [...cv.languages, { ...language }]
              : [...languages, { ...language }];
          setLanguages(newValue);
          setLanguage(null);
          return true;
        }
        validLanguage.value === undefined &&
          alert("Language and it's value is require");
        validLanguage.error && alert(validLanguage.error);
        return true;
      case "knowledges":
        const validKnowledge = knowledgeSchema.validate(knowledge);
        if (validKnowledge.value && !validKnowledge.error) {
          const newValue =
            knowledges === undefined
              ? [...cv.knowledges, { ...knowledge }]
              : [...knowledges, { ...knowledge }];
          setKnowledges(newValue);
          setKnowledge(null);
          return true;
        }
        validKnowledge.value === undefined &&
          alert("Language and it's value is require");
        validKnowledge.error && alert(validKnowledge.error);
        return true;
      case "projects":
        const validProject = projectSchema.validate(project);
        if (validProject.value && !validProject.error) {
          const newValue =
            projects === undefined
              ? [{ ...project }, ...cv.projects]
              : [{ ...project }, ...projects];
          setProjects(newValue);
          setProject(null);
          return true;
        }
        validProject.value === undefined &&
          alert("Project and it's value is require");
        validProject.error && alert(validProject.error);
        return true;
      default:
        return true;
    }
  };

  const removeObject = (identify, index, value) => {
    switch (identify) {
      case "skills": {
        const newValue = value.filter((v, i) => i !== index);
        setSkills(newValue);
        return true;
      }
      case "languages": {
        const newValue = value.filter((v, i) => i !== index);
        setLanguages(newValue);
        return true;
      }
      case "projects": {
        const newValue = value.filter((v, i) => i !== index);
        setProjects(newValue);
        return true;
      }
      case "knowledges": {
        const newValue = value.filter((v, i) => i !== index);
        setKnowledges(newValue);
        return true;
      }
      default:
        return true;
    }
  };

  const cloudinaryUpload = async (file) => {
    let formData = new FormData();
    formData.append("upload_preset", "ecommerce");
    formData.append("file", file);
    setIsLoading(true);
    const url = await axios.post(
      "https://api.cloudinary.com/v1_1/dongthach/upload",
      formData
    );
    setInfo({ ...info, avatar: url.data.secure_url });
    setIsLoading(false);
    return url.data.secure_url;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let updateContent = info ? { ...info } : {};
    skills && (updateContent.skills = [...skills]);
    languages && (updateContent.languages = [...languages]);
    projects && (updateContent.projects = [...projects]);
    knowledges && (updateContent.knowledges = [...knowledges]);
    if (Object.keys(updateContent).length > 0) {
      await updateCv(updateContent, cv._id);
      history.push("/");
    } else {
      alert("Nothing for update!");
    }
  };

  return (
    <Admin
      info={info}
      skills={skills}
      skill={skill}
      languages={languages}
      language={language}
      projects={projects}
      project={project}
      knowledges={knowledges}
      knowledge={knowledge}
      handleChange={handleChange}
      addObject={addObject}
      removeObject={removeObject}
      cloudinaryUpload={cloudinaryUpload}
      handleUpdate={handleUpdate}
      isLoading={isLoading}
      cv={cv}
    />
  );
};

const mapStateToProps = ({ cv }) => ({ cv });
const mapDispatchToProps = {
  updateCv,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
