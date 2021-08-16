import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(evt) {
    evt.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };
      const loginURL = "http://localhost:3000/api/user/login";
      const adminURL = "http://localhost:3000/api/user/isAdmin";


      await axios.post(loginURL, loginData);

      const isAdmin = await axios.get(adminURL);
      await localStorage.setItem("isValid", isAdmin.data);


      await getLoggedIn();
      history.push("/");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form className="form" method="post" onSubmit={login}>
        <h2>Log in</h2>
        <div className="inputLabelContainer">
          <label className="loginFormLabel" htmlFor="email">Email</label>
          <input required className="inputl" type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div className="inputLabelContainer">
          <label className="loginFormLabel" htmlFor="password">Password</label>
          <input required className="inputl" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit" className="buttonForm">Log In</button>
      </form>
    </>
  );
}

export default Login;
