import "../assets/styles/side-navigation.css";

/**
 * Returns React Component that displays the side navigation of the web page
 * @return  A React component
 */
function SideNavigation() {
  return (
    <div className="side-navigation__container">
      <div className="side-navigation__logo-container">
        <img
          src="/images/zen.png"
          alt="zen logo"
          className="side-navigation__logo"
        />
        <img
          src="/images/swim.png"
          alt="swim logo"
          className="side-navigation__logo"
        />
        <img
          src="/images/bike.png"
          alt="bike logo"
          className="side-navigation__logo"
        />
        <img
          src="/images/dumbbell.png"
          alt="dumbbell logo"
          className="side-navigation__logo"
        />
      </div>
      <p className="side-navigation__copyright">Copyright, SportSee 2020</p>
    </div>
  );
}

export default SideNavigation;
