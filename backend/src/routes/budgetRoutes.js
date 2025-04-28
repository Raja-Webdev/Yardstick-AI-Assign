const express = require("express");
const router = express.Router();
const {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget,
} = require("../controllers/budgetController");

// GET all budgets
router.get("/", getBudgets);

// POST create new budget
router.post("/", createBudget);

// PUT update budget
router.put("/:id", updateBudget);

// DELETE budget
router.delete("/:id", deleteBudget);

module.exports = router;
