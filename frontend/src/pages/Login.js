import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

  const [_, setCookie] = useCookies(["access_token"])

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const responce = await axios.post("http://localhost:1919/auth/login", {
        Username: Username,
        Password: Password
      })

      setCookie("access_token", responce.data.TOKEN);
      window.localStorage.setItem("userID", responce.data.userID);

      navigate("/");      
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="">
      <p> Login </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input type="text" name="username" id="username" placeholder="Username" value={ Username } onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input type="text" name="password" id="password" placeholder="Password" value={ Password } onChange={(event) => setPassword(event.target.value)}/>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Login
