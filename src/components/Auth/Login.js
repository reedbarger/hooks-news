import React from "react";

import useFormValidation from './useFormValidation';

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
}

function Login(props) {
  const [login, setLogin] = React.useState(true);
  const {handleChange, handleSubmit, values} = useFormValidation(INITIAL_STATE);

  return (
    <div>
      <h2 className="mv3">{login ? 'Login' : 'Create Account'}</h2>
      <form onSubmit={handleSubmit} className="flex flex-column">
        {!login && (
          <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
          autoComplete="off"
          />
        )}
        <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Your email"
        autoComplete="off"
        />
        <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Choose a secure password"
        />
        <div className="flex mt3">
          <button type="submit" className="button pointer mr2">Submit</button>
          <button type="button" className="button pointer" onClick={() => setLogin(prevLogin => !prevLogin)}>
            {login ? "need to create an accout ?" : "already have an account?"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
