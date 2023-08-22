import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post("http://localhost:1919/auth/register", {
        Username: Username,
        Password: Password
      });

      alert('Registration Completed');
      //console.log(rez)
    }
    catch(error) {
      console.log(error)
    }
  }

  const handleSubmit2 = (event) => {
    event.preventDefault()

    const registerUser = { Username, Password }

    fetch("http://localhost:1919/auth/register", {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(registerUser)
    }).then((ress) => console.log(ress))
      .catch((error) => console.error(error))
  }

  return (
    <div className="">
      <p> Register </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input type="text" name="username" id="username" placeholder="Username" value={ Username } onChange={(event) => handleUsername(event)}/>
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

export default Register
