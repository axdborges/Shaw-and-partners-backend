import cors from "cors";
import express from "express";
import "reflect-metadata";
import UserRouter from "./routes/Users.routes";
import dotenv from 'dotenv';

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", UserRouter);

export default app
