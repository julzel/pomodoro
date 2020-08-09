const UserStatsSubject = () => {

  // private
  const observers = [];

  // public
  const attach = observer => {
    observers.push(observer);
  };

  // public
  const detach = observer => {
    observers.filter(o => o !== observer);
  };

  // public
  const updateUserStats = stats => {
    observers.forEach(o => o(stats))
  }

  return {
    attach,
    detach,
    updateUserStats
  };
}

const userStatsSubject = UserStatsSubject();

export default userStatsSubject;