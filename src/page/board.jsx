import React from "react";
import useFetchData from "../utils/hook";
import { useParams } from "react-router-dom";
import './board.css';

import Title from "../components/title/title";
import Nutrition from "../components/nutrition/nutrition";
import Sessions from "../components/sessions/sessions";
import Performance from "../components/performance/performance";
import Score from "../components/score/score";
import Activity from "../components/activity/activity";

function Board() {
    const { userId } = useParams(); //userId is extracted from the url

    const { userData, error } = useFetchData(userId); //customized hook is called to retrieve user data

    if (error) {
        return <div>Erreur lors de la récupération des données.</div>;
    }
    
    //Ensure userData is available before rendering 
    if (!userData || typeof userData.getFirstName !== 'function') {
        return <div>Les données de l'utilisateur ne sont pas valides.</div>;
    }

    return (
    <div className="UserContainer">
        <Title firstname={userData.getFirstName()} />
        <div className="AllChartsContainer">
            <div className="GraphicalsContainer">
                <Activity activityData={userData.getActivityData()} />
                <div className="SquaresContainer">
                    <Sessions sessionsData={userData.getSessionsData()} />
                    <Performance performanceData={userData.getPerformanceData()} />
                    <Score scoreData={userData.getScoreData()} />
                </div>
            </div>
            <Nutrition nutritionData={userData.getNutrientData()} />
        </div>
    </div>
	);
}

export default Board;