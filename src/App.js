import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import { UserContext } from "./UserContext";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <UserContext.Provider value="Hello from Context">
          <Route exact path="/" element={<Login />} />
          <Route exact path="/loggedIn" element={<LoggedIn />} />
          </UserContext.Provider>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
