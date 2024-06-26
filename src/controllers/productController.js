const ProductModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();

    res.status(200).json({
      message: "Get list products successfully",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const addProduct = async (req, res) => {
  const body = req.body;
  try {
    const product = new ProductModel(body);

    await product.save();

    res.status(201).json({
      message: "Add product successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const removeProduct = async (req, res) => {
  const { id } = req.query;

  try {
    await ProductModel.findByIdAndDelete(id);

    res.status(201).json({
      message: "Remove product successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  addProduct,
  removeProduct,
};
