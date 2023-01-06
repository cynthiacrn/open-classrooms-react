import "../assets/styles/user-daily-activity.css";
import DailyActivityChart from "./DailyActivityChart";
import UserAverageDurationSessionChart from "./UserAverageDurationSessionChart";
import UserPerformancesChart from "./UserPerformancesChart";
import UserScoreChart from "./UserScoreChart";
import PropTypes from "prop-types";

/**
 * Returns React Component that displays the user activity charts
 * @return React Component
 */

function UserDailyActivity({
  userData,
  userActivity,
  userSessions,
  userPerformance,
}) {
  return (
    <div className="user-daily-activity__container">
      <div className="user-daily-activity__header">
        <p className="user-daily-activity__header-title">
          Acitivité quotidienne
        </p>
        <div className="user-daily-activity__header-description">
          <div className="user-daily-activity__header-text">
            <img src="/images/black-dot.png" alt="dot"></img>
            <p>Poids (kg)</p>
          </div>
          <div className="user-daily-activity__header-text">
            <img src="/images/red-dot.png" alt="dot"></img>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <DailyActivityChart userActivity={userActivity} />
      <div className="user-daily-activity__charts">
        <UserAverageDurationSessionChart userSessions={userSessions} />
        <UserPerformancesChart userPerformance={userPerformance} />
        <UserScoreChart userData={userData} />
      </div>
    </div>
  );
}

// Use of propTypes to detail every props used in the component
UserDailyActivity.propTypes = {
  userData: PropTypes.object,
  userActivity: PropTypes.object,
  userSessions: PropTypes.object,
  userPerformance: PropTypes.object,
};

export default UserDailyActivity;
