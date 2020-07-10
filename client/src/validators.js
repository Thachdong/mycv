import Joi from "@hapi/joi";

export const skillSchema = Joi.object({
  name: Joi.string().required(),
  value: Joi.number().min(0).max(100).required(),
});

export const knowledgeSchema = Joi.object({
  name: Joi.string().required(),
  value: Joi.string().required(),
});

export const projectSchema = Joi.object({
  name: Joi.string().required(),
  link: Joi.string().required(),
  disc: Joi.string().required(),
});
