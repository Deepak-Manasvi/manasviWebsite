import Portfolio from "../models/portfolioModel.js";

export const createPortfolio = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file;
    // Validate required fields
    if (!title || !category || !company || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new portfolio member instance
    const newPortfolio = new Portfolio({
      title,
      category,
      company,
      image: image.buffer.toString("base64"),
    });

    // Save the portfolio member to the database
    await newPortfolio.save();

    return res.status(201).json({
      message: "portfolio created successfully.",
      success: true,
      portfolio: newPortfolio,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getAllPortfolios = async (req, res) => {
  try {
    // Fetch all portfolio members
    const Portfolio = await Portfolio.find();
    console.log(Portfolio, "hhhhhhh");

    return res.status(200).json(Portfolio);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const image = req.file;

    // Check if portfolio member exists
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    // Update portfolio member fields
    portfolio.name = name;
    portfolio.description = description;
    if (image) {
      portfolio.image = image.buffer.toString("base64");
    }

    // Save updated portfolio member to the database
    await portfolio.save();

    return res.status(200).json({
      message: "Portfolio updated successfully.",
      success: true,
      portfolio: portfolio,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if portfolio member exists
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    // Delete portfolio member from database
    await Portfolio.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Portfolio deleted successfully.",
      success: true,
      portfolio: portfolio,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
