import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">NYTSEARCH</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/search" && "active"}>
          <Link to="/search">Search</Link>
        </li>
        <li className={location.pathname === "/saved" && "active"}>
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
