import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB with URI:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected ✅");
    } catch (error) {
        console.error("MongoDB connection error ❌", error.message);
        process.exit(1);
    }
};
