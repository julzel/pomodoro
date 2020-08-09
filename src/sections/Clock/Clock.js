import React, { useContext, useEffect, useState } from 'react';

// local imports
import { PreferencesContext } from '../../contexts/preferencesContext';
import Timer from './components/Timer/Timer';
import './Clock.scss';

const Clock = ({ events }) => {

  const { preferences } = useContext(PreferencesContext);
  const [settings, setSettings] = useState(preferences.timers);

  useEffect(() => {
    setSettings(preferences.timers);
  }, [preferences, settings]);

  const onEnd = () => {
    alert('Chill now')
  }

  return (
    <div className="clock">
      <h1>Clock</h1>
      <Timer
        countTo={settings.focusDuration}
        countBackwards={settings.countBackwards}
        onEnd={onEnd}
      />
      <div className="clock-controls">
        {events && events.onSave &&
        <button
          className="btn"
          onClick={events.onSave}
        >
          Save Clock
        </button>}
        {events && events.onDelete &&
        <button
          className="btn"
          onClick={events.onDelete}
        >
          Delete Clock
        </button>}
      </div>
    </div>
  );
}
 
export default Clock;