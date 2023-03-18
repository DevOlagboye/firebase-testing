import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const LoggedIn = () => {
    const {data, setData} = useContext(UserContext)

  return (
    <div>
        <h5>LoggedIn</h5>
        
        {data ? <button>Logout</button>: <button>Test</button>}
    </div>
  )
}

export default LoggedIn