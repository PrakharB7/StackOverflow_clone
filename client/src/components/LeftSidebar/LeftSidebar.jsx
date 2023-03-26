import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import GlobIcon from "../../assests/Globe.svg";
import community from "../../assests/news-svgrepo-com.svg";
import homeIcon from "../../assests/home-alt-svgrepo-com.svg";
import tagIcon from "../../assests/tag-svgrepo-com.svg";
import searchSolid from "../../assests/search-user-interface-symbol-svgrepo-com.svg";
import usersIcon from "../../assests/users-svgrepo-com.svg";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="side-nav">
        <NavLink
          to="/"
          className="side-nav-links home-align"
          activeclass="active"
        >
          <img
            src={homeIcon}
            alt="home"
            width="18"
            className="side-nav-icons"
          />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/Community"
          activeclass="active"
          className="side-nav-links home-align"
        >
          <img
            src={community}
            alt="community"
            width="18"
            className="side-nav-icons"
          />
          <p>Community</p>
        </NavLink>
        <NavLink
          to="/FindPage"
          activeclass="active"
          className="find-friend side-nav-links home-align"
        >
          <img
            src={searchSolid}
            alt="find friend"
            width="18"
            className="side-nav-icons"
          />
          <p>Find Friend</p>
        </NavLink>
      </div>
      <div className="side-nav-div">
        <div className="public">
          <p>PUBLIC</p>
        </div>
        <NavLink
          to="/Questions"
          className="side-nav-links"
          activeclass="active"
        >
          <img src={GlobIcon} alt="Globe" width="20" className="glob" />
          <p style={{ paddingLeft: "10px" }}>Questions</p>
        </NavLink>
        <NavLink to="/Tags" className="side-nav-links" activeclass="active">
          <img src={tagIcon} alt="tags" width="18" className="side-nav-icons" />
          <p>Tags</p>
        </NavLink>
        <NavLink to="/Users" className="side-nav-links" activeclass="active">
          <img
            src={usersIcon}
            alt="Users"
            width="18"
            className="side-nav-icons"
          />
          <p>Users</p>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSidebar;
