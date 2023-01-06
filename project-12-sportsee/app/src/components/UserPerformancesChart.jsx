import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../assets/styles/user-performances.css";
import PropTypes from "prop-types";

/**
 * Returns React Component that displays the user performances chart
 * @param { array } data An array of objects that contains two keys : value and kind. Their values are numbers
 * @param { object } kind An object that contains strings which are the titles of the kinds
 * @return  A React component
 */

function UserPerformancesChart({ userPerformance }) {
  const performances = userPerformance;
  const { data, kind } = performances; // Splitting the two type of data used to create the chart
  let userData = []; // Initialization of the array that will serve as the data used by the chart
  let kindName = []; // Initialization of the array that will contain the names of each axis
  // The use of this array isn't necessary but it allows a better customisation of axis names

  // In this loop, we push the data taken from the prop into the newly created array and the corresponding kind name
  for (let i = 0; i < data.length; i++) {
    kindName.push(kind[i + 1]);
    userData.push({
      name: kindName[i],
      value: data[i].value,
    });
  }

  return (
    <div className="user-performances__container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={userData}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="name"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Use of propTypes to detail every props used in the component
UserPerformancesChart.propTypes = {
  userPerformance: PropTypes.object,
};

export default UserPerformancesChart;
