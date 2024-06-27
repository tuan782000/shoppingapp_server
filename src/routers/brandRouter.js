const { Router } = require("express");
const {
  getBrands,
  addBrand,
  removeBrand,
} = require("../controllers/brandController");

const brandRouter = Router();

brandRouter.get("/all-brands", getBrands);
brandRouter.post("/add-brand", addBrand);
brandRouter.delete("/remove-brand", removeBrand);

module.exports = brandRouter;
