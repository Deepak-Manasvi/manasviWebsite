import mongoose from "mongoose";
import Category from "../models/careerCategoryModel.js";
import Career from "../models/careerModel.js";

export const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({ message: "Category name is required" });
    }

    // ✅ Create category (without careers initially)
    const category = new Category({ categoryName, careers: [] });
    await category.save();

    res.status(201).json({ message: "Category created successfully", category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


// // ✅ Fetch all categories with careers
export const showAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("careers");

    // ✅ Check if categories exist
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }

    res.status(200).json({
      message: "Categories retrieved successfully",
      categories
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Create a new career and associate it with a category
export const createCareer = async (req, res) => {
  try {
    const { title, location, experience, openings, categoryId } = req.body;

    // ✅ Validate required fields
    if (!title || !location || !experience || !openings || !categoryId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check if category ID is valid
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    // ✅ Check if category exists
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // ✅ Create the career
    const career = new Career({ title, location, experience, openings });
    await career.save();

    // ✅ Add the career to the category
    category.careers.push(career._id);
    await category.save();

    res.status(201).json({ message: "Career created successfully", career });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
