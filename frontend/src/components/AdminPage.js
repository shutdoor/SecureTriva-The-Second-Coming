import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from '../context/AuthContext';

function AdminPage(){
    // let quizData = [];
    const [quizData, setQuizData] = useState("");

    const { loggedIn } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(undefined);
    const history = useHistory();

    useEffect(() => {
        setIsAdmin(localStorage.getItem("isValid"));
    }, [!isAdmin]);

    async function getQuizData() {
        console.log(isAdmin);
        const url = "http://localhost:3001/trivia/all"
        axios.get(url)
        .then(res => {
            if(res) console.log(res.data);
        });

        // console.log('res: ', res);
    }

    useEffect(() => {
        getQuizData();
    }, [])

    function renderQuizTable() {
        return quizData.map((data, index) => {
          const { _id, category, question, createdAt, answer, isAccepted } = data; 
          return (
            <tr key={_id}>
              <td className="adminTd">{category}</td>
              <td className="adminTd">{question}</td>
              <td className="adminTd">{answer}</td>
              <td className="adminTd"><input type="radio" id="trueToggle" value="true"></input><label for="trueToggle">True</label><input type="radio" id="falseToggle" value="false"></input><label for="falseToggle">False</label></td>
              <td className="adminTd">{createdAt}</td>
              <td><button onClick={() => this.updateQuizData(index)}>Update</button></td>
            </tr>
          )
        })
      }

    return (
        <>
        {/* {loggedIn === true && isAdmin === true && */
            <div>            
            <table className="adminTable">
                <tbody className="adminTbody">
                <tr>
                    <th className="adminTh">Category</th>
                    <th className="adminTh">Question</th>
                    <th className="adminTh">Answer</th>
                    <th className="adminTh">IsAccepted</th>
                    <th className="adminTh" id="createdAt">CreatedAt</th>
                </tr>
                {/* {renderQuizTable()} */}
                </tbody>
            </table>
            </div> 
        }
        </>
    )

}
  
export default AdminPage;