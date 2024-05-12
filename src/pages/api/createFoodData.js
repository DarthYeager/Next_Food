import FoodData from "@/models/FoodData";
import db from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await db.connect();
    try {
      let food = new FoodData({
        name: req.body.name,
        category: req.body.foodCategory,
        foodType: req.body.foodType,
        price: req.body.price,
        description: req.body.description,
        img: req.body.img,
      });
      await food.save();
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }

  db.disconnect();
}