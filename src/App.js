import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import { UserContext } from "./UserContext";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Router>
      <UserContext.Provider value={{data, setData}}>
        <Routes> 
          <Route exact path="/" element={<Login />} />
          <Route exact path="/loggedIn" element={<LoggedIn />} />
        </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
