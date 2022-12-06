import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setStoredToken }) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
      Welcome to the website signup to add a school
    </div>
  );
};

export default Home;
