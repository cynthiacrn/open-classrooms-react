import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../assets/styles/user-score-chart.css";
import PropTypes from "prop-types";

/**
 * Returns React Component that displays the user score chart
 * @param { Number } score The user objective score
 * @return  A React component
 */

function UserScoreChart({ userData }) {
  const scoreValue = userData.todayScore * 100;

  // Object used for the chart
  const data = [
    {
      score: scoreValue,
      fill: "#E60000",
    },
  ];

  return (
    <div className="score-chart__container">
      <p className="score-chart__title">Score</p>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="70%"
          data={data}
          startAngle={90} // 90 is for the bar to start at the top of the circle
          endAngle={450} // 450 is for the bar to end at the top of the circle after a 360° (360 + 90)
          barSize={10}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="score" cornerRadius="50%" />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="score-chart__text">
        <span className="score-chart__score">
          {scoreValue}%<br />
        </span>
        de votre
        <br /> objectif
      </p>
    </div>
  );
}

// Use of propTypes to detail every props used in the component
UserScoreChart.propTypes = {
  userData: PropTypes.object,
};

export default UserScoreChart;
