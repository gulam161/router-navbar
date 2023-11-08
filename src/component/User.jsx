// function User({ match }) {
//   return (
//     <>
//       <h1>user{match.params.name} page</h1>
//     </>
//   );
// }

import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function User() {
  const { fname, lname } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <h1>
        user {fname} {lname} page
      </h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === `/user/mohsin/shaikh` ? (
        <div style={{ display: "flex", gap: "25px", justifyContent: "center" }}>
          <button onClick={() => alert("That's great!")}>Click Me</button>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      ) : null}
    </>
  );
}

export default User;
