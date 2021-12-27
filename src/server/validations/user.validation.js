import { Joi } from 'express-validation';

const userValidation = {
  getAll: {
    query: Joi.object({
      id: Joi.string().uuid({ version: ['uuidv4'] }),
      username: Joi.string().max(80),
      firstName: Joi.string().max(80),
      lastName: Joi.string().max(80),
    }),
  },
  create: {
    body: Joi.object({
      username: Joi.string().max(80).required(),
      firstName: Joi.string().max(80),
      lastName: Joi.string().max(80),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.string()
        .uuid({ version: ['uuidv4'] })
        .required(),
    }),
    body: Joi.object({
      username: Joi.string().max(80).required(),
      firstName: Joi.string().max(80).required(),
      lastName: Joi.string().max(80).required(),
    }),
  },
  partialUpdate: {
    params: Joi.object({
      id: Joi.string()
        .uuid({ version: ['uuidv4'] })
        .required(),
    }),
    body: Joi.object({
      username: Joi.string().max(80),
      firstName: Joi.string().max(80),
      lastName: Joi.string().max(80),
    }),
  },
  destroy: {
    params: Joi.object({
      id: Joi.string()
        .uuid({ version: ['uuidv4'] })
        .required(),
    }),
  },
};

export { userValidation };
