import React from "react";
import clap from "../../assets/clap.png";
import propTypes from "prop-types";
import "./title.css";

function Title({ firstname }) {
	return (
		<div className="titleContainer">
			<h1> Bonjour <span>{firstname}</span></h1>
			<p>	Félicitation ! vous avez explosé vos objectifs hier{" "} <img src={clap} className="Clap" alt="bravo" /> </p>
		</div>
	);
}

Title.propTypes = {
	firstname: propTypes.string.isRequired,
};

export default Title;