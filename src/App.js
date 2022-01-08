import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import AppContext from "./context/AppContext";
import { useState, useEffect } from "react";

function App() {
  const msgUrl =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
  const [msg, setMsg] = useState([]);
  useEffect(() => {}, [msg]);
  const updateMsgLine = () => {
    setTimeout(() => {
      fetch(msgUrl)
        .then((responce) => responce.json())
        .then((data) => {
          let sortedMsgData = data.tweets.sort((a, b) => a.date - b.date);
          setMsg(sortedMsgData);
        });
    }, 500);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          updateMsgLine: updateMsgLine,
          msg: msg,
          setMsg: setMsg,
          msgUrl: msgUrl,
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
