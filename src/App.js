import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideBar />
      </div>
    </Router>
  );
}

export default App;