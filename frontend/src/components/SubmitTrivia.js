import React, { Component, useState } from 'react';
import axios from "axios";

function SubmitTrivia() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [category, setCategory] = useState("Music");


    async function handleSubmit(evt) {
        evt.preventDefault();

        const url = "http://10.0.115.231:3000/api/trivia/create";
        const quizBody = {
            category,
            question,
            answer
        };

        await axios.post(url, quizBody);

    }

    return (
        <form className="form" method="POST" onSubmit={handleSubmit}>
            <h3>Add New Trivia</h3>
            <div className="inputLabelContainer">
                <label className="submitTrivaLabel" htmlFor="question">Question</label>
                <input className="input" required name="question" value={question} onChange={(event) => { setQuestion(event.target.value) }}></input>
            </div>

            <div className="inputLabelContainer">
                <label className="submitTrivaLabel" htmlFor="answer">Answer</label>
                <input className="input" required name="answer" value={answer} onChange={(event) => { setAnswer(event.target.value) }}></input>
            </div>
            <div className="inputLabelContainer">
                <label htmlFor="category" className="submitTrivaLabel">category</label>
                <select name="category" className="select" onChange={(event) => { setCategory(event.target.value) }}>
                    <option default value="Music">Music</option>
                    <option value="TV">TV</option>
                    <option value="Celebrity">Celebrity</option>
                    <option value="Toys">Toys</option>
                    <option value="Games">Games</option>
                </select>
            </div>
            <br />
            <button type="submit" className="buttonForm">Submit</button>
        </form>
    )
}

export default SubmitTrivia;