import express from "express";
import Feedback from "../models/Feedback";

const router = express.Router();

router.get("/feedbacks", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ upvoteCount: -1 });
    res.json({
      public: true,
      sorted: true,
      feedbacks: feedbacks.map((feedback, index) => ({
        id: index + 1,
        company: feedback.company,
        badgeLetter: feedback.badgeLetter,
        upvoteCount: feedback.upvoteCount,
        daysAgo: feedback.daysAgo,
        text: feedback.text,
      })),
    });
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    res.status(500).json({ message: "Error fetching feedbacks", error });
  }
});

export default router;
