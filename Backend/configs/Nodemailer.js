import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "madushanp835@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export default transporter;
