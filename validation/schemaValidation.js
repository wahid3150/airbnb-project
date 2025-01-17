const Joi = require("joi");

const listingSchema = Joi.object({
  title: Joi.string().min(10).max(100).required().messages({
    "string.empty": "Title can not be empty",
    "string.min": "Title should have a minimum length of 10",
    "any.required": "Title is required",
  }),
  description: Joi.string().min(10).max(800).required().messages({
    "string.empty": "Description can not be empty",
    "string.min": "Description should have a minimum length of 10",
    "any.required": "Description is required",
  }),
  image: Joi.string().uri().allow("", null).message({
    "string.uri": "image must be a valid uri",
    "string.empty": "image can not be empty",
  }),
  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive number",
    "any.required": "Price is required",
  }),
  country: Joi.string().required().messages({
    "string.empty": "Country field cannot be empty",
    "any.required": "Country is required",
  }),
  location: Joi.string().required().messages({
    "string.empty": "Location can not be empty",
    "any.required": "Location is required",
  }),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required().messages({
      "number.base": "Rating must be a number",
      "number.min": "Rating must be at least 1",
      "number.max": "Rating cannot exceed 5",
      "any.required": "Rating is required",
    }),
    comment: Joi.string().required().messages({
      "string.empty": "Comment cannot be empty",
      "any.required": "Comment is required",
    }),
  }),
});

module.exports = { listingSchema, reviewSchema };
