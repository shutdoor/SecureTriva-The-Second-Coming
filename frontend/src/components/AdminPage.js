import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from '../context/AuthContext';

function AdminPage() {
    // let quizData = [];
    const [quizData, setQuizData] = useState(undefined);

    const { loggedIn } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isValid"));
    const history = useHistory();

    async function getQuizData() {
        console.log(isAdmin);
        const url = "http://10.0.115.231:3000/api/trivia/all"
        const res = await axios.get(url);
        setQuizData(res.data);
    }

    // useEffect(() => {
    //     getQuizData();
    // }, [])

    function handleChange(evt, index) {
        // evt.preventDefault();
        // for (let i = 0; i < quizData.length; i++) {
        //     if (index === i) {
        //         quizData[i].isAccepted = Boolean(evt.target.value);
        //     }
        // }
    }

    async function updateQuizData(evt, index) {
        console.log(index);
        for (let i = 0; i < quizData.length; i++) {
            if (index === i) {
                const url = "http://10.0.115.231:3000/api/trivia/update";
                console.log(quizData[i]);
                await axios.post(url, quizData[i]);
            }
        }

        window.location.reload();
    }

    function renderQuizTable() {
        return quizData.map((data, index) => {
            let { _id, category, question, createdAt, answer, isAccepted } = data;
            return (
                <tr key={_id}>
                    <td className="adminTd">{category}</td>
                    <td className="adminTd">{question}</td>
                    <td className="adminTd">{answer}</td>
                    <td className="adminTd">
                        <select onChange={(event) => { quizData[index].isAccepted = event.target.value }} >
                            <option value="true">True</option>
                            <option selected="selected" default value="false">False</option>
                        </select>
                    </td>
                    <td className="adminTd">{createdAt}</td>
                    <td><button onClick={(event) => updateQuizData(event, index)}>Update</button></td>
                </tr>
            )
        })
    }


    useEffect(() => {
        // setIsAdmin(localStorage.getItem("isValid"));
        getQuizData();
    }, []);
    // !isAdmin, !quizData

    return (
        <>
            {loggedIn === true &&
                <>
                    {isAdmin === "true" &&
                        < div >
                            <table className="adminTable">
                                <tbody className="adminTbody">
                                    <tr>
                                        <th className="adminTh">Category</th>
                                        <th className="adminTh">Question</th>
                                        <th className="adminTh">Answer</th>
                                        <th className="adminTh">IsAccepted</th>
                                        <th className="adminTh" id="createdAt">CreatedAt</th>
                                    </tr>
                                    {quizData &&
                                        renderQuizTable()
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </>
            }
        </>
    )

}

export default AdminPage;