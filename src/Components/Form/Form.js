import React from 'react'

const Form = ({ name, password, email, accept, change, submit }) => (
  <form onSubmit={submit} noValidate>
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

    <label htmlFor="accept">
      <input
        type="checkbox"
        name="userAccept"
        id="accept"
        checked={accept}
        onChange={change}
      />
      I agree all rules!
    </label>

    <button>Join in!</button>

  </form>
)

export default Form;