import dataAdapters from "./data-adapter.js";

const API_BASE_URL = "http://localhost:3000/user/";

const handleError = () => {
	// Redirect to your custom error page
	window.location.href = "/error";
  };

const fetchData = async (endpoint) => {
	try {
		const response = await fetch(API_BASE_URL + endpoint);
		if (!response.ok) {
			throw new Error(`Erreur HTTP! Statut: ${response.status}`);
		}
		const data = await response.json();
		return data.data; // Supposant que l'API retourne un objet avec une clé "data"
	} catch (error) {
		handleError();
		throw error;
	}
};

const getUser = async (userId) => {
	const data = await fetchData(`${userId}`);
	return dataAdapters.transformUser(data);
};

const getSessions = async (userId) => {
	const data = await fetchData(`${userId}/average-sessions`);
	return dataAdapters.transformSessions(data);
};

const getActivity = async (userId) => {
	const data = await fetchData(`${userId}/activity`);
	return dataAdapters.transformActivity(data);
};

const getPerformance = async (userId) => {
	const data = await fetchData(`${userId}/performance`);
	return dataAdapters.transformPerformance(data);
};

export {getUser, getSessions, getActivity, getPerformance};