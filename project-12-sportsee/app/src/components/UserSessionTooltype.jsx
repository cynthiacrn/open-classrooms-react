import "../assets/styles/user-session-tooltype.css";
import PropTypes from "prop-types";

/** create a custom tooltype for the user average duration session chart
 * @param  {bool} active
 * @param  {array} payload
 * @return A React component
 */

function UserSessionTooltype({ active, payload }) {
  if (active) {
    return (
      <div className="user-session-tooltype__container">
        <p className="user-session-tooltype__text">{payload[0].value}min</p>
      </div>
    );
  }
  return null;
}

// Use of propTypes to detail every props used in the component
UserSessionTooltype.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
export default UserSessionTooltype;
