const CV = require("../models/cv");

const addCV = async (req, res, next) => {
  const {
    avatar,
    email,
    fullName,
    birthDay,
    address,
    position,
    goal,
    experience,
    skills,
    projects,
    knowledge,
    languages,
  } = req.body;
  try {
    const newCV = new CV({
      avatar,
      email,
      fullName,
      birthDay,
      address,
      position,
      goal,
      experience,
      skills,
      projects,
      knowledge,
      languages,
    });
    await newCV.save();
    return res.status(201).json({
      Success: {
        message: "CV added",
        data: newCV,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateCV = async (req, res, next) => {
  const updateInfo = req.body;
  const { cvId } = req.params;
  try {
    const cv = await CV.findByIdAndUpdate(cvId, updateInfo);
    if (cv) {
      const updatedCV = await CV.findById(cvId);
      console.log(updatedCV);

      return res.status(204).json({
        Success: {
          message: "CV updated",
          data: updatedCV,
        },
      });
    }
    return res.status(404).json({
      Error: {
        message: "Resource not found",
        data: cvId,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getCV = async (req, res, next) => {
  try {
    const cv = await CV.find({});
    if (cv.length > 0) {
      return res.status(200).json({
        Success: {
          message: "CV found",
          data: cv,
        },
      });
    }
    return res.status(400).json({
      Error: {
        message: "CV not found",
        data: cv,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCV,
  addCV,
  updateCV,
};
