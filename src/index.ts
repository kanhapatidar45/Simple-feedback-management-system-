import express from 'express';
import cors from 'cors';
import feedbackRoutes from './routes/feedback.routes';

const app = express();
const port = 3000;

// Set up CORS middleware
app.use(cors({
  origin: 'http://localhost:3001' // Replace with your frontend URL
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Define your routes
app.use('/api', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});







