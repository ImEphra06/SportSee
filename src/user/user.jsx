class User {
	constructor(main, activity, sessions, performance) {
		this.userId = main.id;
		this.firstName = main.userInfos.firstName;
		this.nutrients = main.keyData;
		main.score ? (this.score = main.score) : (this.score = main.todayScore);
		this.activities = activity.sessions;
		this.performance = performance.data;
		this.sessions = sessions.sessions;
	}

	getFirstName = () => this.firstName;
	getActivityData = () => this.activities;
	getSessionsData = () => this.sessions;
	getPerformanceData = () => this.performance;
	getScoreData = () => this.score;
	getNutrientData = () => this.nutrients;
}

export default User;