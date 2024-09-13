import Joi from "joi";

// Define the validation schema
export const confirmBookingValidator = Joi.object({
  userName: Joi.string().email().required().messages({
    "string.email": "Invalid email format for userName",
    "any.required": "userName is required",
  }),
  userPassword: Joi.string().min(8).required().messages({
    "string.min": "userPassword should be at least 8 characters long",
    "any.required": "userPassword is required",
  }),
  attractionId: Joi.required().messages({
   
    "any.required": "attractionId is required",
  }),
  ticketTypeId: Joi.required().messages({
   
    "any.required": "ticketTypeId is required",
  }),
  customerName: Joi.string().required().messages({
    "any.required": "customerName is required",
  }),
  customerEmail: Joi.string().email().required().messages({
    "string.email": "Invalid email format for customerEmail",
    "any.required": "customerEmail is required",
  }),
  customerPhoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base":
        "customerPhoneNumber must be a valid 10-digit number",
      "any.required": "customerPhoneNumber is required",
    }),
  nofAdult: Joi.required().messages({
    
    "any.required": "nofAdult is required",
  }),
  nofChild: Joi.required().messages({
   
    "any.required": "nofChild is required",
  }),
  travelDate: Joi.date().iso().required().messages({
    "date.iso": "travelDate must be in ISO 8601 date format",
    "any.required": "travelDate is required",
  }),
  // bookingId: Joi.string().required().messages({
  //     'any.required': 'bookingId is required',
  // }),
  tempReference: Joi.string().max(255).required().messages({
    "string.max": "tempReference must not exceed 255 characters",
    "any.required": "tempReference is required",
  }),
});
