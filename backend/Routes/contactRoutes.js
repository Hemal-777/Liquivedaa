// routes/contactRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Setup nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Gmail)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Your email address where you want to receive messages
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email.' });
  }
});

module.exports = router;
