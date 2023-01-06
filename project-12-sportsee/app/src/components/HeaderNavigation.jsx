import "../assets/styles/header-navigation.css";
import { Link } from "react-router-dom";

/**
 * Returns React Component that displays the header of the web page
 * @return  A React component
 */
function HeaderNavigation() {
  return (
    <div className="header-navigation__container">
      <img
        src="/images/sportsee-logo.png"
        alt="sportsee logo"
        className="header-navigation__logo"
      />
      <div className="header-navigation__navigation">
        <Link to="/" className="header-navigation__link">
          Accueil
        </Link>
        <Link to="/profile/:id" className="header-navigation__link">
          Profil
        </Link>
        <Link to="" className="header-navigation__link">
          Réglage
        </Link>
        <Link to="" className="header-navigation__link">
          Communauté
        </Link>
      </div>
    </div>
  );
}

export default HeaderNavigation;
