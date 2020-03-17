import React from 'react'

const Form = ({ name, password, email, change }) => (
  <form action="">
    <label htmlFor="name">
      Name:
      <input
        type="text"
        id="name"
        name="userName"
        value={name}
        onChange={change}
      />
    </label>

    <label htmlFor="password">
      Password:
      <input
        type="password"
        id="password"
        name="userPassword"
        value={password}
        onChange={change}
      />
    </label>

    <label htmlFor="email">
      Email:
      <input
        type="email"
        id="emial"
        name="userEmail"
        value={email}
        onChange={change}
      />
    </label>

    <button>Join in!</button>

  </form>
)

export default Form;