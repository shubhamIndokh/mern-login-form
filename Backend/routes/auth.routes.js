import express from "express";
import { signup, login, profile, verifyEmail, forgetPassword, resetPassword } from '../controllers/auth.controllers.js'
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verifyemail", verifyEmail);
router.post("/login", login);
router.post("/forgetpassword", forgetPassword);
router.post("/resetpassword", resetPassword);
router.get("/profile", verifyToken, profile);


export default router;