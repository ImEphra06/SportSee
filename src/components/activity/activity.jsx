import React from "react";
import "./activity.css";

import propTypes from "prop-types";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function Activity({ activityData }) {
	const formatXAxis = (day) => {
		return Number(day.slice(8));
	};

	function ActivityTooltip({ active, payload }) {
		if (active && payload) {
			return (
				<div className="activityTooltipStyle">
					<p>{`${payload[0].value}`}kg</p>
					<p>{`${payload[1].value}`}Kcal</p>
				</div>
			);
		}
		return null;
	}

	return (
		<div className="activityContainer">
			<h2 className="activityTitle">Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={activityData}
					margin={{
						top: 10,
						right: 5,
						left: 5,
						bottom: 10,
					}}
					barGap={6}>
					<CartesianGrid vertical={false} strokeDasharray="3 3" />
					<XAxis dataKey="day" tickMargin="20" tickSize="0" tickFormatter={formatXAxis} />
					<YAxis
						datakey="kilogram"
						yAxisId="right"
						orientation="right"
						type="number"
						axisLine={false}
						domain={["dataMin-1", "dataMax"]}
						tickCount="3"
						tickSize="0"
						tickMargin="30"
					/>
					<YAxis hide="true" datakey="calories" yAxisId="left" />
					<Tooltip content={<ActivityTooltip />} wrapperStyle={{ top: -40, left: -5 }} />
					<Legend
						verticalAlign="top"
						height={60}
						align="right"
						iconType="circle"
						iconSize="10"
						formatter={(value, entry, index) => (
							<span className="activityLegendColor">{value}</span>
						)}
					/>
					<Bar
						name={"Poids (kg)"}
						yAxisId="right"
						dataKey="kilogram"
						fill="#282D30"
						barSize={8}
						radius={[5, 5, 0, 0]}
					/>
					<Bar
						name={"Calories brûlées (Kcal)"}
						yAxisId="left"
						dataKey="calories"
						fill="#E60000"
						barSize={8}
						radius={[5, 5, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

Activity.propTypes = {
	activityData: propTypes.array.isRequired,
};

export default Activity;