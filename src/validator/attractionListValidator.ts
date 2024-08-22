import Joi from "joi";

// Define the validation schema
export const timeSlotSchema = Joi.object({
  userName: Joi.string().email().required().messages({
    "string.email": "Invalid email format for userName",
    "any.required": "userName is required",
  }),
  userPassword: Joi.string().min(8).required().messages({
    "string.min": "userPassword should be at least 8 characters long",
    "any.required": "userPassword is required",
  }),
  bookingDate: Joi.date().iso().required().messages({
    "date.iso": "bookingDate must be in ISO 8601 date format",
    "any.required": "bookingDate is required",
  }),
  attractionId: Joi.number().integer().positive().required().messages({
    "number.base": "attractionId must be a number",
    "number.integer": "attractionId must be an integer",
    "number.positive": "attractionId must be a positive number",
    "any.required": "attractionId is required",
  }),
  ticketTypeId: Joi.number().integer().positive().required().messages({
    "number.base": "ticketTypeId must be a number",
    "number.integer": "ticketTypeId must be an integer",
    "number.positive": "ticketTypeId must be a positive number",
    "any.required": "ticketTypeId is required",
  }),
});
