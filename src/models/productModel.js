const { default: mongoose } = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  price: {
    require: true,
    type: Number,
  },
  description: {
    require: true,
    type: String,
  },
  // Image chỉ lưu đường dẫn - image sẽ lưu vào bên thứ 3 trả về link lưu vào
  imageURL: {
    require: true,
    type: String,
  },
  rate: Number,
  sizes: [String], // mảng danh sách size
  likedBys: [String], // mảng danh sách các người đã like - chứa đoạn text "id" của những người đã thích sản phẩm
  quantity: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
