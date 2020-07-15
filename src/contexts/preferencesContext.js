import React, { createContext, useState, useEffect } from "react";
import { defaultPreferences } from "../config";
import { getFromLocalStorage, saveToLocalStorage } from "../util";

const PreferencesContextProvider = ({ children }) => {
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [foundLocalPreferences, setFoundLocalPreferences] = useState(false)

  useEffect(() => {
    const localPreferences = getFromLocalStorage("preferences");
    if (localPreferences) {
      setPreferences(localPreferences);
      setFoundLocalPreferences(true)
    } else {
      saveToLocalStorage(defaultPreferences);
    }
  }, []);

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        foundLocalPreferences
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContextProvider;
export const PreferencesContext = createContext();
