import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [category, setCategory] = useState("Music");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(undefined);

    function handleCategoryChange(evt) {
        evt.preventDefault();
        const value = evt.target.getAttribute("value");
        setCategory(value);
        getTrivia();
    }

    async function getTrivia() {
        let url = `http://10.0.115.231:3001/trivia/get/${category}`;
        const response = await axios.get(url);
        let length = response.data.length;
        let randomInt =Math.floor(Math.random() * length);
        const data = response.data[randomInt];
        if(data){
            setQuestion(data.question)
            setAnswer(data.answer);
        }
    }

    function answerChecker() {
        if (userAnswer.toLowerCase() === answer.toLowerCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    useEffect(() => {
        getTrivia();
    });

    return (<div>
        <div className="categoryContainer">
            <h2>Select a category</h2>
            <div className="categoryButtonContainer">
                <div className="categoryButton" value="Music" onClick={(event) => { handleCategoryChange(event) }}>
                    Music
                </div>
                <div className="categoryButton" value="TV" onClick={(event) => { handleCategoryChange(event) }}>
                    TV
                </div>
                <div className="categoryButton" value="Celebrity" onClick={(event) => { handleCategoryChange(event) }}>
                    Celebrity
                </div>
                <div className="categoryButton" value="Toys" onClick={(event) => { handleCategoryChange(event) }}>
                    Toys
                </div>
                <div className="categoryButton" value="Games" onClick={(event) => { handleCategoryChange(event) }}>
                    Games
                </div>
            </div>
            {question &&
                <>
                    <form>
                        <h3>Question: {question}</h3>
                        <div className="inputLabelContainer">
                            <label htmlFor="userAnswer">Answer: </label>
                            <input name="userAnswer" required value={userAnswer} onChange={(event) => { setUserAnswer(event.target.value) }}></input>
                        </div>
                    </form>
                    <button onClick={() => { answerChecker() }}>Submit Answer</button>
                </>
            }
            {isCorrect === true &&
                <p>Answer is correct.</p>
            }
            {isCorrect === false &&
                <p>Answer is not correct.</p>
            }
        </div>
    </div>)
}

export default Home;