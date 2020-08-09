import React, { useContext, useState, useEffect } from "react";

// local imports
import eventSubject from "../../../../observers/eventObserver";
import Clock from "../../../../components/Clock";
import { PreferencesContext } from "../../../../contexts/preferencesContext";

const SimpleClock = () => {

  const { preferences } = useContext(PreferencesContext);

  const [settings, setSettings] = useState(preferences.timers);

  useEffect(() => {
    setSettings(preferences.timers);
  }, [preferences])

  const events = {
    onSave: () => {
      eventSubject.updateEvents("saving Clock");
    },
    onDelete: () => {
      eventSubject.updateEvents("deleting Clock");
    },
  };

  return (
    <div>
      <Clock events={events} settings={settings} />
    </div>
  );
};

export default SimpleClock;
