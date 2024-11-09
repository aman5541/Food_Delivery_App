import foodModel from "../models/foodModel.js";
import mongoose from 'mongoose';
//add food item
const addFood = async (req, res) => {

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({}); //get all the data of the food items
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove food item
const removeFood = async (req, res) => {
  const { id } = req.params; // Get the ID from the URL parameters

  // Validate the input
  if (!id) {
    return res.status(400).json({ success: false, message: "Food ID is required" });
  }

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ success: false, message: "Invalid Food ID format" });
  }

  try {
    const food = await foodModel.findByIdAndDelete(id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }
    
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred while removing food" });
  }
};
export { addFood, listFood, removeFood };
