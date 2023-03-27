import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { app } from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useContext } from "react";
import { logInContext, UserContext } from "../../UserContext";

const Login = () => {
  const { data, setData } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useContext(logInContext);
  let auth = getAuth();
  let goggleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        messageApi
          .open({
            type: "loading",
            content: "Confirming Details...",
            duration: 1.5,
          })
          .then(() => message.success("Login Successful", 1.5))
          .then(() => localStorage.setItem("loginKey", setLoggedIn(true)))
          .then(() => console.log(auth.currentUser.email))
          .then(() => navigate("/loggedIn"));
      })
      .catch((err) => {
        if (err.message) {
          messageApi
            .open({
              type: "loading",
              content: "Confirming Details...",
              duration: 1,
            })
            .then(() => message.error("Login Error", 1));
        }
        console.log(err.message);
      });
  };
  const signUpWithGoogle = () => {
    signInWithPopup(auth, goggleProvider);
  };
  return (
    <div className="login-container">
      <input
        name="email"
        placeholder="Input Email"
        onChange={(event) => handleInput(event)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Input Password"
        onChange={(event) => handleInput(event)}
        required
      />
      <button onClick={handleSubmit}>Register</button>
      {contextHolder}
      <button onClick={handleSignIn}>Login</button>
      <button onClick={signUpWithGoogle}>Login with Goggle</button>
    </div>
  );
};

export default Login;
