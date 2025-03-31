import mongoose from 'mongoose';

const careerCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    careers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Career", 
      },
    ],
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', careerCategorySchema);
export default Category;
