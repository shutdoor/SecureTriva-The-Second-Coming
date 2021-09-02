import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import { useCookies } from "react-cookie";

function AdminPage() {
    const [quizData, setQuizData] = useState(undefined);
    const [isAdmin, setIsAdmin] = useState(undefined);
    const [cookie, setCookie] = useCookies(["token"]);

    const { loggedIn } = useContext(AuthContext);

    async function getQuizData() {
        console.log(isAdmin);
        const url = "http://10.0.115.231:3001/trivia/all"
        const res = await axios.get(url);
        setQuizData(res.data);
    }

    async function updateQuizData(evt, index) {
        console.log(index);
        for (let i = 0; i < quizData.length; i++) {
            if (index === i) {
                const url = "http://10.0.115.231:3001/trivia/update";
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
        async function getIsAdmin() {
            let url = "http://10.0.115.231:3001/user/isAdmin";
            const res = await axios.get(url, {
                headers: {
                    "x-auth-token": cookie.token
                }
            });
            console.log(res.data);
            setIsAdmin(res.data);
        }
        getQuizData();
    }, []);

    return (
        <>
            {loggedIn === true &&
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
    )

}

export default AdminPage;