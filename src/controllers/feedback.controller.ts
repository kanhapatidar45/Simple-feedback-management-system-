import { Request, Response } from 'express';
import { FeedbackService } from '../services/feedback.service';

const feedbackService = new FeedbackService();

export const getAllFeedbacks = (req: Request, res: Response): void => {
  try {
    const feedbacks = feedbackService.getAllFeedbacks();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export const submitFeedback = (req: Request, res: Response): void => {
  try {
    const feedback = req.body;
    const message = feedbackService.submitFeedback(feedback);
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
};

