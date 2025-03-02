<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

// Log environment variables
console.log(`MONGO_URI: ${process.env.MONGODB_URI}`);
console.log(`PORT: ${process.env.PORT}`);

const PORT = process.env.PORT || 5000;
console.log(`Server running at http://localhost:${PORT}`);

// Connect to the database
connectDB();

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
=======
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import projectRoutes from "./routes/projectRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"


dotenv.config()


const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error))

app.use("/api/projects", projectRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/tasks", taskRoutes)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
>>>>>>> b27af961a96dd61074668580d2744d16862a539a
