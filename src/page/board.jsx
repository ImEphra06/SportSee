import React from "react";
import useFetchData from "./utils/hook";
import { useParams } from "react-router-dom";

import Title from "../components/title/title";

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
