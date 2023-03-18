import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const LoggedIn = () => {
    const message = useContext(UserContext)

  return (
    <div>
        <h5>{message}</h5>
        LoggedIn
    </div>
  )
}

export default LoggedIn