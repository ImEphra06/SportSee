import { useState, useEffect } from "react";
import User from "../user/user";
import {
	USER_MAIN_DATA,
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE,
} from "../data/data";

// Data adapter
/* A constant that is used to determine whether to use data or not. */
export const DATA = true;

export function useFetchData(id) {
	const server = "http://localhost:3000";

	const [userData, setUserData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	function isValidData(userData) {
		if (!userData[0].data || !userData[1].data || !userData[2].data || !userData[3].data) {
			return false;
		}
		if (
			userData[0] === "can not get user" ||
			userData[1] === "can not get user" ||
			userData[2] === "can not get user" ||
			userData[3] === "can not get user"
		) {
			return false;
		}
		return true;
	}

	useEffect(() => {
		console.log("Fetching data for user with ID:", id);
	
		if (DATA === true) {
			const mainData = USER_MAIN_DATA;
			const activityData = USER_ACTIVITY;
			const sessionsData = USER_AVERAGE_SESSIONS;
			const performanceData = USER_PERFORMANCE;
	
			const userMainData = mainData.find((element) => element.id.toString() === id);
			const userActivityData = activityData.find((element) => element.userId.toString() === id);
			const userSessionsData = sessionsData.find((element) => element.userId.toString() === id);
			const userPerformanceData = performanceData.find((element) => element.userId.toString() === id);
	
			console.log("Data retrieved:", userMainData, userActivityData, userSessionsData, userPerformanceData);
	
			if (!userMainData || !userActivityData || !userSessionsData || !userPerformanceData) {
				setError(true);
			} else {
				setUserData(new User(userMainData, userActivityData, userSessionsData, userPerformanceData));
				setLoading(false);
			}
		} else {
			const urlMainData = server + "/user/" + id;
			const urlActivityData = server + "/user/" + id + "/activity";
			const urlSessionsData = server + "/user/" + id + "/average-sessions";
			const urlPerformanceData = server + "/user/" + id + "/performance";
	
			Promise.all([
				fetch(urlMainData),
				fetch(urlActivityData),
				fetch(urlSessionsData),
				fetch(urlPerformanceData),
			])
			.then((res) => Promise.all(res.map((r) => r.json())))
			.then((mainData) => {
				console.log("Fetched data from API:", mainData);
				if (isValidData(mainData)) {
					setUserData(
						new User(mainData[0].data, mainData[1].data, mainData[2].data, mainData[3].data)
					);
				} else {
					setError(true);
				}
			})
			.catch((err) => {
				console.log("Error fetching data from API:", err);
				setError(true);
			})
			.finally(() => setLoading(false));
		}
	}, [id]);

	return { userData, isLoading, error };
}

export default useFetchData;