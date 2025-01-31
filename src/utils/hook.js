import { useState, useEffect } from "react";
import { getUser, getSessions, getActivity, getPerformance } from "./service.js";
import User from "../user/user";

/* A constant that is used to determine whether to use data or not. */
export function useFetchData(id) {
	const [userData, setUserData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// On récupère toutes les données en parallèle
				const [user, sessions, activity, performance] = await Promise.all([
					getUser(id),
					getSessions(id),
					getActivity(id),
					getPerformance(id),
				]);

				// Création de l'instance User
				setUserData(new User(user, activity, sessions, performance));
			} catch (err) {
				console.error("Erreur lors du chargement des données :", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	return { userData, isLoading, error };
}

export default useFetchData;