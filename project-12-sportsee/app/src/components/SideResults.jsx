import PropTypes from "prop-types";
import "../assets/styles/side-results.css";

/**
 * Returns React Component that displays the side results of the web page
 * @param {string} icon - The icon of the SideResults.
 * @param {string} title - The title of the SideResults.
 * @param {string} text - The text of the SideResults.
 * @return  A React component
 */

function SideResults({ icon, title, text }) {
  return (
    <div className="side-results__container">
      <img className="side-results__image" src={icon} alt="icon"></img>
      <div className="side-results__content">
        <p className="side-results__text">{text}</p>
        <p className="side-results__title">{title}</p>
      </div>
    </div>
  );
}

// Use of propTypes to detail every props used in the component
SideResults.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default SideResults;
