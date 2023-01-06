import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/styles/profile.css";
import SideResults from "../components/SideResults";
import Error from "./Error";
import UserDailyActivity from "../components/UserDailyActivty";
import { useNavigate } from "react-router-dom";

/* Importing the functions that call the API from the service.js file. */
import fetchData from "../assets/data/services/services";
import mock from "../assets/data/mock"; // This JSON file mocks a user profile

/* The above code is a React component that is used to fetch data from an API. The data is then passed
to the Content component. */
/**
 * Returns a React component that displays an error message if the user ID is invalid
 * @param {string} id The user ID
 * @returns A React component.
 */

function Profile() {
  const { id } = useParams();

  /* Setting the state of the component. */
  const [userFetchedData, setUserFetchedData] = useState(null);
  const [userFetchedActivity, setUserFetchedActivity] = useState(null);
  const [userFetchedAvgSessions, setUserFetchedAvgSessions] = useState(null);
  const [userFetchedPerformance, setUserFetchedPerformance] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  /* A boolean that is used to switch between the mocked data and the real data. */
  const useMockedData = false;

  useEffect(() => {
    if (useMockedData) {
      setUserFetchedData(mock.USER_MAIN_DATA[0]); // The commented code is for the mocked data
      setUserFetchedActivity(mock.USER_ACTIVITY[0]);
      setUserFetchedAvgSessions(mock.USER_AVERAGE_SESSIONS[0]);
      setUserFetchedPerformance(mock.USER_PERFORMANCE[0]);
      setIsLoaded(true);
    } else {
      async function fetchApi() {
        const data = await fetchData(id, "");
        if (!data) {
          navigate("/error");
        }
        setUserFetchedData(data);
        setUserFetchedActivity(await fetchData(id, "activity"));
        setUserFetchedAvgSessions(await fetchData(id, "average-sessions"));
        setUserFetchedPerformance(await fetchData(id, "performance"));
        setIsLoaded(true);
      }
      fetchApi();
    }
  }, [
    setUserFetchedData,
    setUserFetchedActivity,
    setUserFetchedAvgSessions,
    setUserFetchedPerformance,
    id,
    useMockedData,
  ]);

  // console.log(
  //   userFetchedData,
  //   userFetchedActivity,
  //   userFetchedAvgSessions,
  //   userFetchedPerformance
  // );

  return isLoaded ? (
    <div className="profile-page__container">
      <div>
        <h1 className="profile-page__title">
          Bonjour
          <span className="profile-page__name">
            {" "}
            {userFetchedData.userInfos.firstName}
          </span>
        </h1>
        <p className="profile-page__content">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="profile-page__body">
        <section className="profile-page__activity-section">
          <UserDailyActivity
            userData={userFetchedData}
            userActivity={userFetchedActivity}
            userSessions={userFetchedAvgSessions}
            userPerformance={userFetchedPerformance}
          />
        </section>
        <aside className="profile-page__side-results">
          <SideResults
            icon="/images/calories-icon.png"
            text={`${userFetchedData.keyData.calorieCount}kCal`}
            title="Calories"
          />
          <SideResults
            icon="/images/protein-icon.png"
            text={`${userFetchedData.keyData.proteinCount}g`}
            title="Proteines"
          />
          <SideResults
            icon="/images/carbs-icon.png"
            text={`${userFetchedData.keyData.carbohydrateCount}g`}
            title="Glucides"
          />
          <SideResults
            icon="/images/fat-icon.png"
            text={`${userFetchedData.keyData.lipidCount}g`}
            title="Lipides"
          />
        </aside>
      </div>
    </div>
  ) : (
    <Error />
  );
}

export default Profile;
