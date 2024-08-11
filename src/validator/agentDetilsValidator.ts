import Joi from 'joi';

export const agentDetailsSchema = Joi.object({
    userName: Joi.string().email().required().messages({
        'string.email': 'Invalid email format for userName',
        'any.required': 'userName is required',
    }),
    userPassword: Joi.string().min(8).required().messages({
        'string.min': 'userPassword should be at least 8 characters long',
        'any.required': 'userPassword is required',
    }),
});
