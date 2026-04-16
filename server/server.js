import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SmartTask Hub API Running 🚀");
});

const PORT = process.env.PORT || 5000;

// ✅ Connect DB first, then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));