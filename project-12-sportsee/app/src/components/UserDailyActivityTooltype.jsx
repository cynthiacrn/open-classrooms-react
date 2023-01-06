import "../assets/styles/user-daily-activity-tooltype.css";
import PropTypes from "prop-types";

/** create a custom tooltype for the user daily activity chart
 * @param  {bool} active
 * @param  {array} payload
 * @return A React component
 */

function UserDailyActivityTooltype({ active, payload }) {
  if (active) {
    return (
      <div className="custom-tooltype__container">
        <p className="custom-tooltype__text">{payload[0].value}kg</p>
        <p className="custom-tooltype__text">{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
}

// Use of propTypes to detail every props used in the component
UserDailyActivityTooltype.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
export default UserDailyActivityTooltype;
