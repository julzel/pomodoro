const PreferencesSubject = () => {

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
  const updatePreferences = preferences => {
    observers.forEach(o => o(preferences))
  }

  return {
    attach,
    detach,
    updatePreferences
  };
}

const preferencesSubject = PreferencesSubject();

export default preferencesSubject;