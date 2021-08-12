const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const Trivia = require("../models/triviaModel");
require('dotenv').config();

exports.createNewTriviaQuestion = (req, res) => {
    let newTrivia = new Trivia(req.body);
    newTrivia["isAccepted"] = false;
    newTrivia.save((error, result) => {
        if (error) res.sendStatus(400);
        res.json(result);
    });
};

exports.getAllTriviaQuestions = async (req, res) => {
    const userId = req.user;
    const user = await User.findById(userId);
    if (user.isAdmin === true) {
        Trivia.find({ isAccepted: false }, (error, result) => {
            if (error) res.sendStatus(400);
            res.json(result);
        })
    } else {
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
    Trivia.findByIdAndUpdate(updatedTrivia._id, updatedTrivia).then((result) => {
        if(result){
            console.log(result);
            res.json(result);
        }else{
            res.sendStatus(400);
        }
    });
}