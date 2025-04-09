import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './config/database.js';
// import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import subscriberRoutes from './routes/subscriberRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import ErrorHandler from './utils/ErrorHandler.js';
import { generatedError } from './middleware/error.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Logger
app.use(logger('tiny'));

// Network access
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://manasvitech.in',
    ],
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create session
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
// Routes handling

// app.use("/api/auth", authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/services', serviceRoutes); // Use service routes here
app.use('/api/career', careerRoutes);
app.use('/api', subscriberRoutes);

// Error handling
app.all('*', (req, res, next) => {
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404));
});
app.use(generatedError);

// Connect to the database and start the server
connectDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server listening at port ${port}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database:', error);
});