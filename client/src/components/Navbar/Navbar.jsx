import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assests/logo.png";
import { useNavigate } from "react-router-dom";
import search from "../../assests/search.png";
import decode from "jwt-decode";
import Avatar from "../../components/Avatar/Avatar";

import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" width="120" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Product
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search.." />
          <img
            src={search}
            alt="search"
            width="18"
            className="search-icon"
          ></img>
        </form>
        <div>
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="0px"
                py="7px"
                borderRadius="200%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>

              <button className="nav-item nav-links" onClick={handleLogout}>
                {" "}
                Log Out{" "}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
