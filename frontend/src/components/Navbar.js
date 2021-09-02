import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logout from './Logout';
import axios from "axios";
import { useCookies } from "react-cookie";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);

  useEffect(() => {
    async function getIsAdmin() {
      let url = "http://10.0.115.231:3001/user/isAdmin";
      const res = await axios.get(url, {headers: {
        "x-auth-token": cookie.token 
      }});
      console.log(res.data);
      setIsAdmin(res.data);
    }
    // setIsAdmin(localStorage.getItem("isValid"));
    getIsAdmin();
  }, [!isAdmin]);

  return (
    <div className="navbar">
      <div className="leftNav">
        <Link to={{ pathname: '/' }} >
          <h3 className="navText">Home</h3>
        </Link>
        {loggedIn &&
          <Link to={{ pathname: '/submit' }} >
            <h3 className="navText">Submit Question</h3>
          </Link>
        }
      </div>
      <div className="rightNav">
        {loggedIn &&
          <>
            <Link to={{ pathname: '/edit' }}>
              <h3 style={{ marginRight: "25px" }} className="navText">Edit Information</h3>
            </Link>
            {isAdmin === true &&
              <Link to={{ pathname: '/admin' }}>
                <h3 className="navText">Admin Page</h3>
              </Link>
            }
          </>
        }
        
        {loggedIn &&
          <Logout />
        }
        {!loggedIn &&
          <Link to={{ pathname: '/login' }}>
            <h3 style={{ marginRight: "25px" }} className="navText">Log In</h3>
          </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
