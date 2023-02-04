const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
});
const Category = mongoose.model("categories", categorySchema);

const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min().required(),
  });

  return schema.valid(category);
};

exports.Category = Category;
exports.categorySchema = categorySchema;
exports.validateCategory = validateCategory;
