const { Router } = require("express");
const {
  getProducts,
  addProduct,
  removeProduct,
  editProduct,
  getProductWithId,
} = require("../controllers/productController");

const productRouter = Router();

productRouter.get("/all-products", getProducts);
productRouter.get("/detail-product/:id", getProductWithId);
productRouter.post("/add-product", addProduct);
productRouter.put("/update-product/:id", editProduct);
productRouter.delete("/remove-product", removeProduct);

module.exports = productRouter;
