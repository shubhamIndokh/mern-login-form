import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: "otpayehai@gmail.com",
        pass: "okan nfhn enou nqcx",
    },
});


// const sendEmail = async () => {
//     try {
//         const info = await transporter.sendMail({
//             from: '"Gmail" <otpayehai@gmail.com>',
//             to: "",
//             subject: "Hello ✔",
//             text: "Hello world?", // Plain-text version of the message
//             html: "<b>Hello world?</b>", // HTML version of the message
//         });


//     } catch (error) {
//         console.log(error);

//     }
// }

// sendEmail();