const Budget = require("../models/Budget");
const { budgetSchema } = require("../utils/validators");

// Get all budgets
const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find().sort("-month");
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create new budget
const createBudget = async (req, res) => {
  try {
    const { error } = budgetSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const budget = new Budget(req.body);
    await budget.save();
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update budget
const updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!budget) return res.status(404).json({ message: "Budget not found" });
    res.json(budget);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete budget
const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndDelete(req.params.id);
    if (!budget) return res.status(404).json({ message: "Budget not found" });
    res.json({ message: "Budget removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
};
