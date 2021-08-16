import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Logout() {
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function logOut() {
        const url = "http://localhost:3000/api/user/logout";
        await axios.get(url);
        localStorage.clear("IsValid");
        await getLoggedIn();
        history.push("/");
        window.location.reload();
    }

    return <button onClick={logOut}>Log out</button>;
}

export default Logout;
