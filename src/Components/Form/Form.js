import React from 'react';
import './Form.css';

const Form = ({ name, password, email, accept, send, change, submit, errors }) => (
  <div className="wrapper">
    <h1>Newsletter</h1>
    <form onSubmit={submit} noValidate>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          name="userName"
          value={name}
          onChange={change}
          placeholder="Name"
        />
        {errors.name && <span>*</span>}
      </label>

      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="userPassword"
          value={password}
          onChange={change}
          placeholder="Password"
        />
        {errors.pass && <span>*</span>}
      </label>

      <label htmlFor="email">
        <input
          type="email"
          id="emial"
          name="userEmail"
          value={email}
          onChange={change}
          placeholder="Email"
        />
        {errors.email && <span>*</span>}
      </label>

      <label htmlFor="accept" className="check">
        <input
          type="checkbox"
          name="userAccept"
          id="accept"
          checked={accept}
          onChange={change}
        />
      I accept all rules!
        {errors.accept && <span>*</span>}
      </label>
      <button>Join in!</button>
    </form>
    {send && <h1>Got it!</h1>}
  </div>
)

export default Form;