/* It creates a class called UserActivity for use as a model for the API call. */
class UserActivity {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}
export default UserActivity;
