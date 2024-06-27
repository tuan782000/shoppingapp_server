const BrandModel = require("../models/brandModel");

const getBrands = async (req, res) => {
  try {
    const brands = await BrandModel.find();

    res.status(200).json({
      message: "Get list brands successfully",
      data: brands,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const addBrand = async (req, res) => {
  const body = req.body;
  try {
    const brand = new BrandModel(body);

    await brand.save();

    res.status(201).json({
      message: "Add brand successfully",
      data: brand,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const removeBrand = async (req, res) => {
  const { id } = req.query;

  try {
    await BrandModel.findByIdAndDelete(id);

    res.status(201).json({
      message: "Remove brand successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getBrands,
  addBrand,
  removeBrand,
};
