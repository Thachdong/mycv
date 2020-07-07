const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
});

const LanguageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
});

const KnowledgeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
});

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  disc: {
    type: String,
  },
  link: {
    type: String,
  },
});

const CvSchema = new mongoose.Schema({
  avatar: {
    type: String,
    default: "https://via.placeholder.com/150",
  },
  email: {
    type: String,
    required: true,
  },
  birthDay: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  skills: [SkillSchema],
  languages: [LanguageSchema],
  goal: {
    type: String,
  },
  projects: [ProjectSchema],
  experience: {
    type: String,
  },
  knowledge: [KnowledgeSchema],
});

module.exports = mongoose.model("CV", CvSchema);
