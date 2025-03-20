import Team from '../models/teamModel.js';

export const createTeamMember = async (req, res) => {
  try {
    const { name, designation } = req.body;
    const image = req.file;
    // Validate required fields
    if (!name || !designation || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new team member instance
    const newTeamMember = new Team({
      name,
      designation,
      image: image.buffer.toString('base64'),
    });

    // Save the team member to the database
    await newTeamMember.save();

    return res.status(201).json({
      message: 'Team member created successfully.',
      success: true,
      teamMember: newTeamMember,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllTeamMembers = async (req, res) => {
  try {
    // Fetch all team members
    const teamMembers = await Team.find();

    return res.status(200).json(teamMembers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, designation } = req.body;
    const image = req.file;

    // Check if team member exists
    const teamMember = await Team.findById(id);
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }

    // Update team member fields
    teamMember.name = name;
    teamMember.designation = designation;
    if (image) {
      teamMember.image = image.buffer.toString('base64');
    }

    // Save updated team member to the database
    await teamMember.save();

    return res.status(200).json({
      message: 'Team member updated successfully.',
      success: true,
      teamMember: teamMember,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if team member exists
    const teamMember = await Team.findById(id);
    if (!teamMember) {
      return res.status(404).json({ message: 'Team member not found' });
    }

    // Delete team member from database
    await Team.findByIdAndDelete(id);

    return res.status(200).json({
      message: 'Team member deleted successfully.',
      success: true,
      teamMember: teamMember,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
