import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Login.css";
import { app } from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const Login = () => {
    const {data, setData} = useContext(UserContext)
  let auth = getAuth();
  const navigate = useNavigate();
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {
    
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user.email);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        navigate("/loggedIn")
      })
      .catch((err) => {
        alert(err.message);
      });
  };
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
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleSignIn}>SignIn</button>
      {data ? <span>LoggedIn</span> : <span>SignIn</span>}
    </div>
  );
};

export default Login;
