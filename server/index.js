const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Google OAuth Client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generate JWT Token
const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Verify Google Token
const verifyGoogleToken = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    return ticket.getPayload();
};

// Google Login Route
app.post('/api/auth/google', async (req, res) => {
    const { token } = req.body;

    try {
        const payload = await verifyGoogleToken(token);
        const { email, name, picture } = payload;

        // Check if user exists in the database
        let user = await User.findOne({ email });

        if (!user) {
            // Create a new user
            user = new User({ email, name, picture });
            await user.save();
        }

        // Generate JWT token
        const jwtToken = generateToken(user);

        res.status(200).json({ token: jwtToken, user });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Authentication failed' });
    }
});

// Protected Route Example
app.get('/api/protected', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ message: 'You are authenticated', user: decoded });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});