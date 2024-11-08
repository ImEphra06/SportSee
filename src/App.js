import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import useFetchData from "./utils/hook";
//import { useParams } from "react-router-dom";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
//import Title from "./components/title/title";

import './App.css';

function App() {
  /* userId is extracted from the url */
  //const { userId } = useParams();

  /* customized hook is called to retrieve user data */
  //const { userData, isLoading, error } = useFetchData(userId);

  /* Manage loading and error states */
  /*if (isLoading) {
      return <div>Chargement en cours...</div>;
  }

  if (error) {
      return <div>Erreur lors de la récupération des données.</div>;
  }*/

  /* Ensure userData is available before rendering */
  /*if (!userData || typeof userData.getFirstName !== 'function') {
      return <div>Les données de l'utilisateur ne sont pas valides.</div>;
  }*/

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