import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/create-swimmer">Create a swimmer</Link>
    </div>
  )
}

export default Navbar
