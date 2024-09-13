import mongoose from "mongoose";
import dotenv from "dotenv";
import Feedback from "./models/Feedback";

dotenv.config();

const initialFeedbacks = [
  {
    company: "ByteGrad",
    badgeLetter: "B",
    upvoteCount: 593,
    daysAgo: 4,
    text: "Hi #ByteGrad, I really like the courses. 😁 I just wish that you would produce more of them and faster. That would be great, as I want to be a dev!",
  },
  {
    company: "Starbucks",
    badgeLetter: "S",
    upvoteCount: 563,
    daysAgo: 3,
    text: "I really wish #Starbucks would use hand wrappers for hot drinks as a standard, I keep burning my hands and am tired of bothering the employee.",
  },
  {
    company: "Netflix",
    badgeLetter: "N",
    upvoteCount: 486,
    daysAgo: 5,
    text: "since yday on mobile #netflix keeps buffering the video, it keeps happening even when I redownload the app. I'm in an area with decent internet btw",
  },
  {
    company: "McDonald's",
    badgeLetter: "M",
    upvoteCount: 377,
    daysAgo: 2,
    text: "It's a real shame that my local #mcdonald's removed milkshakes from the menu. they were the reason I go to mcdonald's. 😩 please bring them back!",
  },
  {
    company: "Amazon",
    badgeLetter: "A",
    upvoteCount: 156,
    daysAgo: 1,
    text: "Im an #amazon prime member but don't really watch the prime video offering. instead of that I would want an option for even faster delivery 😎",
  },
  {
    company: "Netflix",
    badgeLetter: "N",
    upvoteCount: 88,
    daysAgo: 1,
    text: "would be great if #netflix could announce content removals further ahead. 😊 I dont want to get into a show only for it to be gone soon. thanks",
  },
  {
    company: "Microsoft",
    badgeLetter: "M",
    upvoteCount: 41,
    daysAgo: 1,
    text: "i've been using #microsoft teams for a couple weeks now and 1 thing that really sticks out is that navigation is too difficult. please simplify it.",
  },
  {
    company: "Nike",
    badgeLetter: "N",
    upvoteCount: 39,
    daysAgo: 5,
    text: "hi #nike I love your running shoes but it's very difficult to return them after a purchase. had to do a lot of phone calls to make it work. thanks 👍",
  },
  {
    company: "McDonald's",
    badgeLetter: "M",
    upvoteCount: 22,
    daysAgo: 2,
    text: "#mcdonald's the past few times I've been some items were missing from my order. only noticed this when I got home. straws, nuggets, fries, they missed",
  },
  {
    company: "Adidas",
    badgeLetter: "A",
    upvoteCount: 9,
    daysAgo: 3,
    text: "i like your website #adidas, but your sizing guide needs some work. it suggested an L for me but when it arrived it was too big. still kept it btw 😎",
  },
  {
    company: "nike",
    badgeLetter: "N",
    upvoteCount: 0,
    daysAgo: 0,
    text: "test #nike",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Feedback.deleteMany({});
    console.log("Cleared existing feedbacks");

    // Insert new data
    const seededFeedbacks = await Feedback.insertMany(initialFeedbacks);
    console.log(`Seeded ${seededFeedbacks.length} feedbacks`);

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seedDatabase();
