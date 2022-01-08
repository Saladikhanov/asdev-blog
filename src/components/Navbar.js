import "../App.css";
import { Link, NavLink } from "react-router-dom";
// import AppContext from "../context/AppContext";
// import { useContext } from "react/cjs/react.development";
// import firebase from "../lib/firebase";

function Navbar() {

  return (
    <header className = "header">
      
      <div className="navbar _container">
        
        <NavLink className="nav-item" to="/">Home</NavLink>
        <NavLink className="nav-item" to="/profile">Profile</NavLink>
        <NavLink className="nav-item" to="/login">Login</NavLink>
        <NavLink className="nav-item" to="/signup">Sign up</NavLink>
               
      </div>
      

    </header>
    
      
  );
}

export default Navbar;
