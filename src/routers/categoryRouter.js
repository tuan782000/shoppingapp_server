const { Router } = require("express");
const {
  getCategories,
  addCategory,
  removeCategory,
} = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/all-categories", getCategories);
categoryRouter.post("/add-category", addCategory);
categoryRouter.delete("/remove-category", removeCategory);

module.exports = categoryRouter;
