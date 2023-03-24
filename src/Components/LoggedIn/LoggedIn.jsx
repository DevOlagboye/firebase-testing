import React from "react";
import { message } from "antd";
import { useContext, useEffect, useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext, logInContext } from "../../UserContext";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../Login/firebaseConfig";

const LoggedIn = () => {
  let auth = getAuth();
  const [moviesList, setMoviesList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");
  const { data, setData } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useContext(logInContext);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("Logged Out");
      messageApi
        .open({
          type: "loading",
          content: "Redirecting...",
          duration: 1,
        })
        .then(() => message.success("LogOut Successful", 1))
        .then(() => navigate("/"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!loggedIn) {
      navigate("/", { replace: true });
    }
    const getMovieList = async () => {
      //READ THE DATA FROM DATABASE
      //SET THE MOVIE LIST = THE DATA
      try {
        const data = await getDocs(moviesCollectionRef);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);
  return (
    <div>
      <h5>LoggedIn as {auth?.currentUser?.email}</h5>
      {contextHolder}
      {data ? <button onClick={logOut}>Logout</button> : <button>Test</button>}
    </div>
  );
};

export default LoggedIn;
