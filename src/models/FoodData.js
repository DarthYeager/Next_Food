import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    foodType: { type: String, required: true },
    price: { type: Object, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
  },

  { timestamps: true }
);

const FoodData =
  mongoose.models.FoodData || mongoose.model("FoodData", dataSchema);

export default FoodData;
