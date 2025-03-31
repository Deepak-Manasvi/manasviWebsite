import Category from "../models/careerCategoryModel.js";
import Career from "../models/careerModel.js";

// category controllers
export const createCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
      
        // Validate required fields 
        if (!categoryName) {
          return res.status(400).json({ message: 'categoryName is required' });
        }
    
       // Create a new category instance
        const newCategory = await Category.create({
            categoryName: categoryName,
        });
    
        return res.status(201).json({
          message: 'Category created successfully.',
          success: true,
          category: newCategory,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
      }
}

export const showAllCategories = async(req, res) => {
    try {
        // Fetch all team members
        const categories = await Category.find().populate("careers").exec();
        console.log(categories)
        return res.status(200).json(categories);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
      }
}

export const updateCategory = async (req, res) => {
  try {
    
    const {categoryName, id} = req.body;

    // Check if team member exists
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Update team member fields
    category.categoryName = categoryName;

    // Save updated team member to the database
    await category.save();

    return res.status(200).json({
      message: 'Category updated successfully.',
      success: true,
      category: category,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

//career controllers
export const createCareer = async (req,res) => {
    try {
        const { title, location, experience, openings, categoryId } = req.body;
        
        // Validate required fields
        if (!title || !location || !experience, !openings, !categoryId) {
          return res.status(400).json({ message: 'All fields are required' });
        }
    
        // Create a new team member instance
        const newCareer = await Career({
          title,
          location,
          experience,
          openings
        });
        //console.log("id", categoryId)
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId, 
            { $push: { careers: newCareer._id } },
            { new: true }
        )
        // console.log(updatedCategory)

        return res.status(201).json({
          message: 'New Career created successfully.',
          success: true,
          newCareer: newCareer,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
      }
}


