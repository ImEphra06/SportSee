import React from "react";
import Card from "../nutritionCard/card";
import propTypes from "prop-types";
import "./nutrition.css";

function Nutrition({ nutritionData }) {
	return (
		<div className="nutritionContainer">
			<Card item="Calories" data={nutritionData.calorieCount} />
			<Card item="Proteines" data={nutritionData.proteinCount} />
			<Card item="Glucides" data={nutritionData.carbohydrateCount} />
			<Card item="Lipides" data={nutritionData.lipidCount} />
		</div>
	);
}

Nutrition.propTypes = {
	nutritionData: propTypes.object.isRequired,
};

export default Nutrition;