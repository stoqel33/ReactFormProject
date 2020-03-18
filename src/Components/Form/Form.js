import React from 'react';
import './Form.css';

const Form = ({ name, password, email, accept, send, change, submit, errors }) => (
  <>
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
        {errors.name && <span> bład </span>}
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
        {errors.pass && <span> błąd </span>}
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
        {errors.email && <span> błąd </span>}
      </label>

      <label htmlFor="accept">
        <input
          type="checkbox"
          name="userAccept"
          id="accept"
          checked={accept}
          onChange={change}
        />
        {errors.accept && <span> błąd </span>}
      I accept all rules!
    </label>

      <button>Join in!</button>

    </form>
    {send && <h1>Wysłano</h1>}
  </>
)

export default Form;