import User from "../models/user.model.js";

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { sendVerificationCode } from "../middlewares/Email.js";



export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await User.findOne({ email });
        console.log(req.body);
        

        if (exist && exist.isVerified) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

        const user = await User.create({
            name, email, password: hashedPassword, verificationCode
        })

        sendVerificationCode(user.email, verificationCode);
        res.json({ message: "signup success " })



    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


export const verifyEmail = async (req, res) => {
    try {
        const { code } = req.body;
        const user = await User.findOne({ verificationCode: code });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired code" });
        }
        user.isVerified = true;
        user.verificationCode = undefined;
        await user.save();
        res.json({ success: true })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" })

    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });

        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Wrong password" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.json({ message: "Login Success ", token });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
export const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email" });
        }
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        user.verificationCode = verificationCode;
        await user.save();

        sendVerificationCode(email, verificationCode);

        res.json({ success: true, message: "OTP send to email" })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const resetPassword = async (req, res) => {
    try {
        const { email, code, newPassword } = req.body;
        const user = await User.findOne({ email, verificationCode: code });
        if (!user) {
            return res.status(400).json({ message: "user does not exist" });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.verificationCode = undefined;
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" },)
        res.json({ success: true, message: "Password reset successful", token })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
export const profile = async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
}


