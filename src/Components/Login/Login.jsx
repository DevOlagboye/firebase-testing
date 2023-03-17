import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState([]);
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {};
  return (
    <div className="login-container">
      <input
        name="email"
        placeholder="Input Email"
        onChange={(event) => handleInput(event)}
      />
      <input
        type="password"
        name="password"
        placeholder="Input Password"
        onChange={(event) => handleInput(event)}
      />
      <button>Submit</button>
    </div>
  );
};

export default Login;
