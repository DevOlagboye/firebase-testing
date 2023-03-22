import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import { UserContext, logInContext } from "./UserContext";

function App() {
  const [data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <Router>
      <UserContext.Provider value={{data, setData}}>
        <logInContext.Provider value={[loggedIn, setLoggedIn]}>
        <Routes> 
          <Route exact path="/" element={<Login />} />
          <Route exact path="/loggedIn" element={<LoggedIn />} />
        </Routes>
        </logInContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
