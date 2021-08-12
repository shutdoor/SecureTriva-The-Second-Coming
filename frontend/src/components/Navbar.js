import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logout from './Logout';

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(undefined);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isValid"));
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
          <Link to={{ pathname: '/edit' }}>
            <h3 style={{ marginRight: "25px" }} className="navText">Edit Information</h3>
          </Link>
        }
        {loggedIn && isAdmin === "true" &&
          <Link to={{ pathname: '/admin' }}>
            <h3 className="navText">Admin Page</h3>
          </Link>
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
