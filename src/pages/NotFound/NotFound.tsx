import React from "react";
import "./Notfound.scss";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oops! The page isn't valid</p>
      <NavLink to={"/"}>Go Back to Home</NavLink>
    </div>
  );
};

export default NotFound;
