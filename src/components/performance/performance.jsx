import React from "react";
import "./performance.css";

import { 
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
  ResponsiveContainer
} from "recharts";

function Performance({ performanceData }) {
  const formatXAxis = (tickItem) => {
    switch (tickItem.toLowerCase()) {
      case 'cardio':
        return "Cardio";
      case 'energy':
        return "Energie";
      case 'endurance':
        return "Endurance";
      case 'strength':
        return "Force";
      case 'speed':
        return "Vitesse";
      case 'intensity':
        return "Intensité";
      default:
        return "";
    }
  };

  function reverseArray(Array) {
    const reversedArray = [];
    for (let i = 0; i < Array.length; i++) {
      reversedArray[5 - i] = Array[i];
    }
    return reversedArray;
  }

  return (
    <div className="PerformanceContainer">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius={window.innerWidth > 1340 ? "70%" : "55%"}
          data={reverseArray(performanceData)}
        >
          <PolarGrid 
            radialLines={false} 
            stroke="white" 
            strokeOpacity={0.7} 
          />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false}
            dy={4}
            tick={{ 
              fontSize: 12, 
              fontWeight: 500, 
              fill: "white", 
              opacity: 0.9 
            }}
            stroke="white"
            tickFormatter={formatXAxis}
          />
          <Radar 
            dataKey="value" 
            fill="#FF0101" 
            fillOpacity={0.7} 
            stroke="#FF0101" 
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;