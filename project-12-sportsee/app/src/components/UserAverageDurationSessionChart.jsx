import UserSessionTooltype from "./UserSessionTooltype";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "../assets/styles/user-average-duration-session.css";

/**
 * Returns React Component that displays a line chart
 * @param { number } day The day of the week
 * @param { number } sessionLength The length of the sport session
 * @return  A React component
 */

function UserAverageDurationSessionChart({ userSessions }) {
  const data = userSessions.sessions;
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const avgSessions = []; // Array used to format the data to then use it in the chart

  for (let i = 0; i < data.length; i++) {
    avgSessions.push({
      day: days[i],
      value: data[i].sessionLength,
    });
  }

  return (
    <div className="average-duration__container">
      <p className="average-duration__title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={avgSessions}>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={false}
            tick={{
              fontSize: 14,
              stroke: "rgba(255, 255, 255, 0.7)",
            }}
          />
          <YAxis dataKey="value" domain={[0, "dataMax + 30"]} hide={true} />
          <Tooltip content={UserSessionTooltype} />
          <Line
            type="monotone"
            padding={{ left: 10 }}
            dataKey="value"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Use of propTypes to detail every props used in the component
UserAverageDurationSessionChart.propTypes = {
  userSessions: PropTypes.object,
};

export default UserAverageDurationSessionChart;
