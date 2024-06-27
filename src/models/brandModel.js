const { default: mongoose } = require("mongoose");

const BrandSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  key: {
    type: String,
    require: true,
  },
  imgae: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const BrandModel = mongoose.model("brands", BrandSchema);
module.exports = BrandModel;
