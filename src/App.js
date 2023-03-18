import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
      <Route exact path="/" element={<Login/>}/>
     </Routes>
     
     </Router>
    </div>
  );
}

export default App;
