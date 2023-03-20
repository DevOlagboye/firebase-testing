import React, { useState } from "react";
import {message} from 'antd'
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
  const [messageApi, contextHolder] = message.useMessage()
  const loginSuccess = () =>{
    messageApi.open({
        type: 'loading',
        content: 'Confirming Details...',
        duration: 1,
    })
    .then(() => message.success('Login Successful', 1))
  }
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
        messageApi.open({
            type: 'loading',
            content: 'Confirming Details...',
            duration: 1.5,
        })
        .then(() => message.success('Login Successful', 1.5))
        .then(()=> navigate("/loggedIn"))
        
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
      {contextHolder}
      <button onClick={handleSignIn}>SignIn</button>
      {data ? <span>LoggedIn</span> : <span>SignIn</span>}
    </div>
  );
};

export default Login;
