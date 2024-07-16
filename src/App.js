import { Routes, Route } from "react-router-dom"
import './App.css';
import Login from './Components/login/Login.component';
import HomePage from "./Pages/Homepage.component";
import Dashboard from "./Pages/Dashboard.component";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="home" element={ <HomePage/> } />
        <Route path="/dashboard/*" element={ <Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;

