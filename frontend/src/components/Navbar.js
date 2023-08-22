import React from 'react'
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [cookies, setCookies] = useCookies("access-token");
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access-token", "");
    window.localStorage.removeItem("userID");
    navigate("/login");
  }
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/create-swimmer">Create a swimmer</Link>
      {!cookies.access_token ? 
        (<Link to="/login">Login</Link>) :
        <button onClick={logout}>LogOut</button>}
    </div>
  )
}

export default Navbar
