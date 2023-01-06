import { Link } from "react-router-dom";
import "../assets/styles/home.css";

/**
 * Returns a React component that displays the homepage
 * @returns A React component.
 */

function Home() {
  return (
    <div className="home-page__container">
      <Link className="home-page__user" to="/profile/12">
        User 12
      </Link>
      <Link className="home-page__user" to="/profile/18">
        User 18
      </Link>
    </div>
  );
}

export default Home;
