import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [cookie] = useCookies(["token"]);

  async function getLoggedIn() {
    const url = "http://10.0.115.231:3001/user/loggedIn";
    const loggedInRes = await axios.get(url, {headers: {"x-auth-token": cookie.token}});
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
