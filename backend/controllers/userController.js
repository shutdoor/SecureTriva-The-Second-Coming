const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
require('dotenv').config();

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(401).json({ errorMessage: "Wrong email or password." });

        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!passwordCorrect) return res.status(401).json({ errorMessage: "Wrong email or password." });

        const token = jwt.sign(
            {
                user: existingUser._id,
            },
            process.env.ACCESS_TOKEN_SECRET
        );

        res.status(200).json({token}).send();
    } catch (err) {
        res.status(500).send();
    }
}

exports.loggedIn = (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.json(false);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        res.send(true);
    } catch (err) {
        res.json(false);
    }
}

exports.isAdmin = (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.json(false);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const userInfo = jwt.decode(token);
        User.findById(userInfo.user, (error, result) => {
            if (error) res.json(false);
            if (result) {
                res.send(result.isAdmin);
            }
        })
    } catch (err) {
        res.json(false);
    }
}

// exports.logout = (req, res) => {
//     res.send(200).json({token: ""});
// }

exports.updateUser = async (req, res) => {
    const userId = req.user;
    try {
        await User.findOneAndUpdate(userId, req.body);
    } catch (err) {
        res.status(500).send();
    }
}

exports.getUserInfo = async (req, res) => {
    const userId = req.user;
    try {
        const currUser = await User.findById(userId);
        if (!currUser) res.sendStatus(500);
        res.send({
            firstName: currUser.firstName,
            lastName: currUser.lastName,
            street: currUser.street,
            city: currUser.city,
            state: currUser.state,
            zip_code: currUser.zip_code,
            phone: currUser.phone,
            email: currUser.email
        });
    } catch (err) {
        res.status(500).send();
    }
}