import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import { UserContext } from "./UserContext";


function App() {
  return (
    <div className="App">
      <Router>
      <UserContext.Provider value="Hello from Context">
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
