import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import EditInformation from "./components/EditInformation";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SubmitTrivia from "./components/SubmitTrivia";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(undefined);

  // const isAdmin = localStorage.getItem("isValid");
  useEffect(() => {
    setIsAdmin(localStorage.getItem("isValid"));
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
          </>
        }
        {!(loggedIn) &&
          <Route path="/login" >
            <Login />
          </Route>
        }
        {isAdmin && loggedIn &&
          <Route path="/admin">
            <AdminPage />
          </Route>
        }
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
