import Project from '../models/projectModel.js';

export const createProject = async (req, res) => {
  try {
    const { name, description, link } = req.body;
    const image = req.file;

    if (!name || !description || !image || !link) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProject = new Project({
      name,
      description,
      image: image.buffer.toString('base64'),
      link,
    });

    await newProject.save();

    return res.status(201).json({
      message: 'Project created successfully.',
      success: true,
      project: newProject,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// export const updateProject = async (req, res) => {
//   try {
//     const { name, description, link } = req.body;
//     const image = req.file ? req.file.buffer.toString('base64') : undefined;

//     const updatedData = {
//       name,
//       description,
//       link,
//       ...(image && { image }),
//     };

//     const updatedProject = await Project.findByIdAndUpdate(req.params.id, updatedData, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedProject) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     return res.status(200).json({
//       message: 'Project updated successfully.',
//       success: true,
//       project: updatedProject,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };



export const getAllProjects = async (req, res) => {
  try {
    // Fetch all projects
    const projects = await Project.find();

    return res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, link } = req.body;
    const image = req.file;

    // Check if project exists
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Update project fields
    project.name = name;
    project.description = description;
    project.link = link;
    if (image) {
      project.image = image.buffer.toString('base64');
    }

    // Save updated project to the database
    await project.save();

    return res.status(200).json({
      message: 'Project updated successfully.',
      success: true,
      project: project,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if project exists
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Delete project from database
    await Project.findByIdAndDelete(id);

    return res.status(200).json({
      message: 'Project deleted successfully.',
      success: true,
      project: project,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

