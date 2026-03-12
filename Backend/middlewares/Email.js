import { transporter } from "./Email.config.js";

export const sendVerificationCode = async (email, verificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: '"Gmail" <shubhamindokh@gmail.com>',
            to: email,
            subject: "Verify your Email",
            text: "Verify Your Email", // Plain-text version of the message
            html: verificationCode, // HTML version of the message
        })

    } catch (error) {
        console.log('Email error');

    }
}

