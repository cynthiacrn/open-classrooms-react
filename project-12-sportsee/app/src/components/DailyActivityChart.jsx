import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import UserDailyActivityTooltype from "./UserDailyActivityTooltype";

/**
 * Returns React Component that displays a daily activity chart
 * @param {object} userActivity The data of the activity's user
 * @param {string} day The day of measurement
 * @param {number} kilogram The mass of the user
 * @param {number} calories The amount of calories burnt by the user
 * @return  A React component
 */

function DailyActivityChart({ userActivity }) {
  const data = userActivity.sessions;
  const userData = []; // Array used to format the data to then use it in the chart

  // In this loop, we push the data taken from the prop into the newly created array to better match the data of the mockup
  for (let i = 0; i < data.length; i++) {
    userData.push({
      index: i + 1,
      kilogram: data[i].kilogram,
      calories: data[i].calories,
    });
  }

  // Getting the min and max values of the data to set the domain of the Y axis.
  const kgArray = data.map((kilogram) => kilogram.kilogram);
  const minKg = Math.min(...kgArray);
  const maxKg = Math.max(...kgArray);

  const calArray = data.map((calories) => calories.calories);
  const minCal = Math.min(...calArray);
  const maxCal = Math.max(...calArray);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={userData} barGap={8} barCategoryGap={1}>
        <CartesianGrid vertical={false} strokeDasharray="1 1" />
        <XAxis
          dataKey="index"
          tickLine={false}
          tick={{ fontSize: 14, stroke: "#9B9EAC" }}
          dy={15}
        />
        <YAxis
          yAxisId="kilogram"
          dataKey="kilogram"
          type="number"
          domain={[minKg - 2, maxKg + 1]}
          tickCount="3"
          axisLine={false}
          orientation="right"
          tickLine={false}
          tick={{ fontSize: 14, stroke: "#9B9EAC" }}
          dx={15}
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          type="number"
          domain={[minCal - 20, maxCal + 10]}
          hide={true}
        />
        <Tooltip content={<UserDailyActivityTooltype />} />
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Use of propTypes to detail every props used in the component
DailyActivityChart.propTypes = {
  userActivity: PropTypes.object,
};

export default DailyActivityChart;
