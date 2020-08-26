import React from "react";
import { NavLink } from "react-router-dom";

const SingOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/Signup">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/Signin">SignIn</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default SingOutLinks;
