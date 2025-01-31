const dataAdapters = {
	transformUser: (data) => ({
		id: data.id,
		userInfos: {
			firstName: data.userInfos.firstName,
		},
		keyData: data.keyData,
		score: data.todayScore ?? data.score,
	}),

	transformSessions: (data) => ({
		sessions: data.sessions.map((item) => ({
			day: item.day,
			sessionLength: item.sessionLength,
		})),
	}),

	transformActivity: (data) => ({
		sessions: data.sessions.map((item) => ({
			day: item.day,
			kilogram: item.kilogram,
			calories: item.calories,
		})),
	}),

	transformPerformance: (data) => ({
		data: data.data.map((item) => ({
			value: item.value,
			kind: data.kind[item.kind],
		})),
	}),
};

export default dataAdapters;