import express from 'express'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.routes.js'
import { connectDB } from './db/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("Server is working")
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");

})