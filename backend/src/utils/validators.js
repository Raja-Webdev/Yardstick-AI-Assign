const Joi = require("joi");

const transactionSchema = Joi.object({
  amount: Joi.number().positive().required(),
  description: Joi.string().min(3).required(),
  category: Joi.string().required(),
  type: Joi.string().valid("income", "expense").required(),
});

const budgetSchema = Joi.object({
  category: Joi.string().required(),
  amount: Joi.number().positive().required(),
  month: Joi.string()
    .pattern(/^\d{4}-\d{2}$/)
    .required(),
});

module.exports = {
  transactionSchema,
  budgetSchema,
};
