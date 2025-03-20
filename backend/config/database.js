import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        console.log('Connecting to MongoDB with URL:', process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connection successful');
    } catch (error) {
        console.log('Error connecting to the database:', error.message);
    }
};

export default connectDatabase;
