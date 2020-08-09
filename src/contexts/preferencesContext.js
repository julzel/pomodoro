import React, { createContext, useState, useEffect } from "react";

// local imports
import preferencesSubject from "../observers/preferencesObserver";
import { getFromLocalStorage, saveToLocalStorage } from "../util";
import { defaultPreferences } from "../config";

const PreferencesContextProvider = ({ children }) => {
  const [preferences, setPreferences] = useState(defaultPreferences);
  const onPreferencesUpdate = (preferences) =>
    setPreferences({ ...preferences });

  useEffect(() => {
    const localPreferences = getFromLocalStorage("preferences");
    if (localPreferences) {
      setPreferences(localPreferences);
    } else {
      setPreferences(defaultPreferences);
      saveToLocalStorage("preferences", defaultPreferences);
    }
    preferencesSubject.attach(onPreferencesUpdate);
    return () => preferencesSubject.detach(onPreferencesUpdate);
  }, []);

  return (
    <PreferencesContext.Provider value={{ preferences, defaultPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContextProvider;
export const PreferencesContext = createContext();
