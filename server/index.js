import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import todolistRoutes from "./routes/todoRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//custom middlewares
app.use(todolistRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Mongodb connected..."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
