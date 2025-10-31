import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    inventory: { type: Number, required: true },
    image: { type: String },
    lastUpdated: { type: Date }

})
export const Product = mongoose.models.Products || mongoose.model("Products", ProductSchema);