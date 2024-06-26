import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

const PORT = 8080;

try {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
  console.log("database connected");
} catch (error) {
  console.log("error connecting to mongoDB:", error);
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
