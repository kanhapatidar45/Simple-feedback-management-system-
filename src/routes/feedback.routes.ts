import express from 'express';
import { getAllFeedbacks, submitFeedback } from '../controllers/feedback.controller';

const router = express.Router();

router.get('/feedbacks', getAllFeedbacks);
router.post('/feedbacks', submitFeedback);

export default router;
