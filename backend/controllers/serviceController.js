import Service from '../models/serviceModel.js';

export const createService = async (req, res) => {
  try {
    const { serviceName, description, serialNumber } = req.body;

    // Validate required fields
    if (!serviceName || !description || !serialNumber) {
      return res.status(400).json({ message: 'Service name, serial number, and description are required' });
    }

    // Create a new service instance
    const newService = new Service({
      serviceName,
      description,
      serialNumber,
    });

    // Save the service to the database
    await newService.save();

    return res.status(201).json({
      message: 'Service created successfully.',
      success: true,
      service: newService,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllServices = async (req, res) => {
  try {
    // Fetch all services
    const services = await Service.find();

    return res.status(200).json(services);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { serviceName, description, serialNumber } = req.body;

    // Validate required fields
    if (!serviceName || !description || !serialNumber) {
      return res.status(400).json({ message: 'Service name, serial number, and description are required' });
    }

    // Find the service by ID and update it
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { serviceName, description, serialNumber },
      { new: true } // Return the updated document
    );

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    return res.status(200).json({
      message: 'Service updated successfully.',
      success: true,
      service: updatedService,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the service by ID and delete it
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    return res.status(200).json({
      message: 'Service deleted successfully.',
      success: true,
      service: deletedService,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
