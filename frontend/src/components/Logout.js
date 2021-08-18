import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useCookies, removeCookie } from "react-cookie";

function Logout() {
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function logOut() {
        removeCookie("token");
        history.push('/');
        window.location.reload();
    }

    return <button onClick={logOut}>Log out</button>;
}

export default Logout;
