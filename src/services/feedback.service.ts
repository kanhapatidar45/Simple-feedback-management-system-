interface Feedback {
  name: string;
  feedback: string;
}

export class FeedbackService {
  private feedbacks: Feedback[] = [];

  getAllFeedbacks(): Feedback[] {
    return this.feedbacks;
  }

  submitFeedback(feedback: Feedback): string {
    if (!feedback.name || !feedback.feedback) {
      throw new Error('Name and feedback are required');
    }
    this.feedbacks.push(feedback);
    return 'Feedback submitted';
  }
}


