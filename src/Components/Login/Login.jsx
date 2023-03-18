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
    const message = useContext(UserContext)
  let auth = getAuth();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
        navigate("/loggedIn")
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const logOut = () =>{
   setData(false)
  }
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
      <h5>{message}</h5>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleSignIn}>SignIn</button>
      <button onClick={logOut}>Logout</button>
      {data ? <span>LoggedIn</span> : <span>SignIn</span>}
    </div>
  );
};

export default Login;
