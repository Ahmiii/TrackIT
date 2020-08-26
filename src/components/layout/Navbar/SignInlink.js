import React from "react";
import { NavLink } from "react-router-dom";

const SingInlinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/addComplain">Add Complain</NavLink>
        </li>
        <li>
          <NavLink to="/">LogOut</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            AF
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default SingInlinks;
