let predefinedCategories = [
  "Food",
  "Rent",
  "Utilities",
  "Transportation",
  "Entertainment",
];

const getCategories = async (req, res) => {
  res.json(predefinedCategories);
};

const addCategory = async (req, res) => {
  const { category } = req.body;

  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }

  if (!predefinedCategories.includes(category)) {
    predefinedCategories.push(category);
  }

  res.json(predefinedCategories);
};

module.exports = { getCategories, addCategory };
