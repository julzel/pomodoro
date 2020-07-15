import React, { useContext } from "react";

// local imports
import eventSubject from "../../../../observers/eventObserver";
import Pomodoro from "../../../../components/Pomodoro";
import { PreferencesContext } from "../../../../contexts/preferencesContext";

const SimplePomodoro = () => {

  const { preferences } = useContext(PreferencesContext);

  const events = {
    onSavePomodoro: () => {
      eventSubject.updateEvents("saving pomodoro");
    },
    onDeletePomodoro: () => {
      eventSubject.updateEvents("deleting pomodoro");
    },
  };

  return (
    <div>
      <Pomodoro events={events} settings={preferences.timers} />
    </div>
  );
};

export default SimplePomodoro;
