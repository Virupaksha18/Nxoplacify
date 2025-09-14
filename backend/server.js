import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI) // no need for deprecated options
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5001, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5001}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));