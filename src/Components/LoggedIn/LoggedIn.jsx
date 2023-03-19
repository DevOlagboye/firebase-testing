import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const LoggedIn = () => {
    const {data, setData} = useContext(UserContext)
    const logOut = () =>{
        setData(false)
       }
  return (
    <div>
        <h5>LoggedIn</h5>
        
        {data ? <button onClick={logOut}>Logout</button>: <button>Test</button>}
    </div>
  )
}

export default LoggedIn