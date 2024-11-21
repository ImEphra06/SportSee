import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Board from "./page/board";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideBar />
        <Routes>
          {/* Route dynamique avec :userId */}
          <Route path="/user/:userId" element={<Board />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;