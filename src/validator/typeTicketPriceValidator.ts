import Joi from "joi";

// Define the validation schema
export const typeTicketSchema = Joi.object({
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
  eventTypeId: Joi.string().required().messages({
    "any.required": "eventTypeId is required",
  }),
  eventId: Joi.string().required().messages({
    "any.required": "eventId is required",
  }),
  status: Joi.string().valid("0", "1").required().messages({
    "any.only": 'status must be either "0" or "1"',
    "any.required": "status is required",
  }),
  available: Joi.number().integer().positive().required().messages({
    "number.base": "available must be a number",
    "number.integer": "available must be an integer",
    "number.positive": "available must be a positive number",
    "any.required": "available is required",
  }),
  resourceId: Joi.string().required().messages({
    "any.required": "resourceId is required",
  }),
  eventName: Joi.string().required().messages({
    "any.required": "eventName is required",
  }),
  startDateTime: Joi.date().iso().required().messages({
    "date.iso": "startDateTime must be in ISO 8601 date format",
    "any.required": "startDateTime is required",
  }),
  endDateTime: Joi.date().iso().required().messages({
    "date.iso": "endDateTime must be in ISO 8601 date format",
    "any.required": "endDateTime is required",
  }),
});
