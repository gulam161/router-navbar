import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="menu">
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/about"
      >
        AboutUS
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/service"
      >
        Services
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/contact"
      >
        ContactUs
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/user/mohsin/shaikh"
      >
        User
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/search"
      >
        Search
      </NavLink>
    </div>
  );
}

export default Navbar;
