/** @format */
const express = require("express");
const cors = require("cors");
const authRouter = require("./src/routers/authRouter");
const connectDB = require("./src/configs/connectDb");
const errorMiddleHandle = require("./src/middlewares/errorMiddleware");
const userRouter = require("./src/routers/userRouter");
const verifyToken = require("./src/middlewares/verifyMiddleware");
const eventRouter = require("./src/routers/eventRouter");
const productRouter = require("./src/routers/productRouter");
const brandRouter = require("./src/routers/brandRouter");
const categoryRouter = require("./src/routers/categoryRouter");
const profileRouter = require("./src/routers/profileRouter");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use("/auth", authRouter);
app.use("/events", verifyToken, eventRouter);
app.use("/users", verifyToken, userRouter);
app.use("/products", productRouter);
app.use("/brands", brandRouter);
app.use("/categories", categoryRouter);
// app.use("/search", searchRouter);
app.use("/profiles", profileRouter);

connectDB();

app.use(errorMiddleHandle);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server starting at http://localhost:${PORT}`);
});
