import React from "react";
import propTypes from "prop-types";
import "./score.css";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

function Score({ scoreData }) {
	const scoreAngle = 225 - Math.round(scoreData * 360);

	function ObjectivPerCent() {
		return Math.round(scoreData * 100);
	}

	return (
		<div className="scoreContainer">
			<h2 className="scoreTitle">Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={[{ score: scoreData }]}
						dataKey="score"
						startAngle={225}
						endAngle={scoreAngle}
						innerRadius="70%"
						outerRadius="80%"
						cornerRadius="50%"
						fill="#ff0000"
					/>

					<Pie
						data={[{ name: "circle", score: 100 }]}
						dataKey="score"
						startAngle={225}
						endAngle={-135}
						outerRadius="70%"
						fill="white"
					/>
				</PieChart>
			</ResponsiveContainer>
			<div className="objectivContainer">
				<p>
					<strong>{ObjectivPerCent()}%</strong>
					<br />
					de votre
					<br />
					objectif
				</p>
			</div>
		</div>
	);
}

Score.propTypes = {
	scoreData: propTypes.number.isRequired,
};

export default Score;