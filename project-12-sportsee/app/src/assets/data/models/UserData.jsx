/* It creates a class called UserMainData for use as a model for the API call. */
class UserMainData {
  constructor(userId, userInfos, todayScore, keyData) {
    this.userId = userId;
    this.userInfos = userInfos;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}
export default UserMainData;
