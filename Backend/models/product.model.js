import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
},{
  timestamps:true
});

const Product = mongoose.model("Product", productSchema)
export default Product;