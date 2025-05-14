// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const UserModel = require("../Models/User");


// const signup = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const user = await UserModel.findOne({ email });
//         if (user) {
//             return res.status(409)
//                 .json({ message: 'User is already exist, you can login', success: false });
//         }
//         const userModel = new UserModel({ name, email, password });
//         userModel.password = await bcrypt.hash(password, 10);
//         await userModel.save();
//         res.status(201)
//             .json({
//                 message: "Signup successfully",
//                 success: true
//             })
//     } catch (err) {
//         res.status(500)
//             .json({
//                 message: "Internal server errror",
//                 success: false
//             })
//     }
// }


// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await UserModel.findOne({ email });
//         const errorMsg = 'Auth failed email or password is wrong';
//         if (!user) {
//             return res.status(403)
//                 .json({ message: errorMsg, success: false });
//         }
//         const isPassEqual = await bcrypt.compare(password, user.password);
//         if (!isPassEqual) {
//             return res.status(403)
//                 .json({ message: errorMsg, success: false });
//         }
//         const jwtToken = jwt.sign(
//             { email: user.email, _id: user._id },
//             process.env.JWT_SECRET,
//             { expiresIn: '24h' }
//         )

//         const refreshToken = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    
//     // Save refresh token to the user record in MongoDB
//     user.refreshToken = refreshToken;
//     await user.save();

//         res.status(200)
//             .json({
//                 message: "Login Success",
//                 success: true,
//                 jwtToken,
//                 refreshToken,
//                 email,
//                 name: user.name
//             })
//     } catch (err) {
//         res.status(500)
//             .json({
//                 message: "Internal server errror",
//                 success: false
//             })
//     }
// }

// module.exports = {
//     signup,
//     login
// }

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");
const { body, validationResult } = require('express-validator');

// Validation rules for signup
const signupValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation rules for login
const loginValidation = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').notEmpty().withMessage('Password is required'),
];

// Signup function
const signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists, you can log in.', success: false });
        }

        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        res.status(201).json({ message: "Signup successful", success: true });
    } catch (err) {
        console.error(err); // Log error details for debugging
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

// Login function
const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Authentication failed: email or password is incorrect';
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        const refreshToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Save refresh token to the user record in MongoDB
        user.refreshToken = refreshToken;
        await user.save();

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            refreshToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error(err); // Log error details for debugging
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

module.exports = {
    signup,
    login,
    signupValidation,
    loginValidation
}
