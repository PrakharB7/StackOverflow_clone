import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";
import questionsRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import postRoutes from "./routes/Post.js";
import friendRoutes from "./routes/friend.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});

app.use("/user", userRoutes);
app.use("/questions", questionsRoutes);
app.use("/answer", answerRoutes);
app.use("/Post", postRoutes);
app.use("/friend", friendRoutes);

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL;
mongoose.set("strictQuery", true);
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
