const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static HTML file (your portfolio)
app.use(express.static('public'));

// POST route to handle the contact form submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter to send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // replace with your email
            pass: 'your-email-password', // replace with your email password (or use OAuth2 for better security)
        },
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // replace with your email
        subject: `Message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending message');
        } else {
            res.status(200).send('Message sent successfully');
        }
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
