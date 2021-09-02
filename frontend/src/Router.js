import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import EditInformation from "./components/EditInformation";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SubmitTrivia from "./components/SubmitTrivia";
import AuthContext from "./context/AuthContext";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useHistory } from "react-router-dom";


function Router() {
  const { loggedIn } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(undefined);
  const [cookie, setCookie] = useCookies(["token"]);

  const history = useHistory();

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

    getIsAdmin();
  }, [!isAdmin]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {loggedIn &&
          <>
            <Route path="/edit">
              <EditInformation />
            </Route>
            <Route path="/submit">
              <SubmitTrivia />
            </Route>
            {isAdmin == true &&
              <Route path="/admin">
                <AdminPage />
              </Route>
            }
            {isAdmin == false &&
             <Route path='/admin' component={() => { 
              window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
              return null;
         }}/>
            }
          </>
        }
        {!(loggedIn) &&
          <Route path="/login" >
            <Login />
          </Route>
        }
        {/* {isAdmin === "true" && loggedIn &&
          <Route path="/admin">
            <AdminPage />
          </Route>
        } */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
