import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <h1 style={{ color: "red" }}>404</h1>
      <p>OOps! Page Not Found</p>
      <p>Sorry! This page does not exist</p>
      <NavLink to="/">Go Back</NavLink>
    </>
  );
}

export default Error;
