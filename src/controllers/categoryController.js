const CategoryModel = require("../models/categoryModel");

const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();

    res.status(200).json({
      message: "Get list brands successfully",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const addCategory = async (req, res) => {
  const body = req.body;
  try {
    const category = new CategoryModel(body);

    await category.save();

    res.status(201).json({
      message: "Add category successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const removeCategory = async (req, res) => {
  const { id } = req.query;

  try {
    await CategoryModel.findByIdAndDelete(id);

    res.status(201).json({
      message: "Remove category successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCategories,
  addCategory,
  removeCategory,
};
