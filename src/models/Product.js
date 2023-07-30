import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: String,
    img: String,
    productName: String,
    category: String,
    status: String,
    price: Number,
    description: String,
    keyFeatures: [],
    individualRating: Number,
    averageRating: Number,
    reviews: [],
  },
  { timestamps: true }
);

const Product =
  mongoose?.models?.Product || mongoose?.model("Product", ProductSchema);

export default Product;
