const Joi = require("joi");
const { categorySchema } = require("./category");
const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  category: { type: categorySchema, required: true },
  basePrice: { type: Number, required: true, min: 0 },
  count: { type: Number, required: true, min: 0 },
  totalPrice: { type: Number, required: true, min: 0 },
});
const Product = mongoose.model("Products", productScheme);

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).required(),
    category: Joi.objectId().required(),
    basePrice: Joi.number().integer().min(0).required(),
    count: Joi.number().integer().min(0).required(),
    totalPrice: Joi.number().integer().min(0).required(),
  });

  return schema.validate(product);
};

exports.Product = Product;
exports.validateProduct = validateProduct;
