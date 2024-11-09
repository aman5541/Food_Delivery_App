// Import dotenv and configure environment variables
import dotenv from 'dotenv';
dotenv.config();

// Import Mongoose
import mongoose from 'mongoose';

// Get the MongoDB URI from environment variables
const MONGODB_URI = "mongodb://localhost:27017/Food_deliver";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in .env file");
}

// Connect to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};
