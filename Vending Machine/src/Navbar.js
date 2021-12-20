import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink
            className={({ isActive }) => isActive ? "Navbar-active" : ""} to='/'>Home
        </NavLink>
            <NavLink  className={({ isActive }) => (isActive ? "Navbar-active" : "")} to='/chips'>
          Chips
        </NavLink>
        <NavLink  className={({ isActive }) =>  (isActive ? "Navbar-active" : "")}  to='/soda'>
          Soda
        </NavLink>
        <NavLink  className={({ isActive }) =>  (isActive ? "Navbar-active" : "")}  to='/sardines'>
          Sardines
        </NavLink>
      </div>
    );
  }
}
export default Navbar;
