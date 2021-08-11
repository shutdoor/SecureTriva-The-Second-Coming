const mongoose = require("mongoose");

let triviaSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    }, 
    answer: {
        type: String,
        required: true
    },
    isAccepted: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const Trivia = mongoose.model("Trivia", triviaSchema);

module.exports = Trivia;