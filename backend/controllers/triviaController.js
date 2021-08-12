const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const Trivia = require("../models/triviaModel");
require('dotenv').config();

exports.createNewTriviaQuestion = (req, res) => {
    let newTrivia = new Trivia(req.body);
    newTrivia["isAccepted"] = false;
    console.log('newTrivia: ', newTrivia);
    newTrivia.save((error, result) => {
        if (error) res.sendStatus(400);
        res.json(result);
    });
};

exports.getAllTriviaQuestions = async (req, res) => {
    const userId = req.user;
    const user = await User.findById(userId);
    console.log('user: ', user);
    if (user.isAdmin === true) {
        Trivia.find({}, (error, result) => {
            if (error) res.sendStatus(400);
            console.log(result);
            res.json(result);
        })
    }else {
        res.sendStatus(401);
    }
}

exports.getTriviaQuestionByCategory = (req, res) => {
    Trivia.find({ category: req.params.category, isAccepted: true }, (error, result) => {
        if (error) res.sendStatus(400);
        res.json(result);
    })
};

exports.updateTriviaQuestion = (req, res) => {
    let updatedTrivia = req.body;
    Trivia.findOneAndUpdate({ _id: updatedTrivia._id }, updatedTrivia).then((error, result) => {
        if (error) res.sendStatus(400);
        res.json(result);
    })
}