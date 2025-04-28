const express = require("express");
const router = express.Router();
const {
  getCategories,
  addCategory,
} = require("../controllers/categoryController");

// GET predefined categories
router.get("/", getCategories);

// POST add new category
router.post("/", addCategory);

module.exports = router;
