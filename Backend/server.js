import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productsRoute from "./routes/products.route.js";


dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/products", productsRoute);



app.get("/", (req, res) => {
  res.status(200).send("Backend is running");
});


await connect();
app.listen(`${process.env.PORT}`, () => {
  console.log(`Backend is running at port ${process.env.PORT}`);
});

export default app;
