import React from 'react';

// local imports
import Timer from './components/Timer';

const Pomodoro = ({ events, settings }) => {

  const { onSave, onDelete} = events;
  // const { countBackwards, focusDuration, breakDuration, longBreakDuration, longBreakFrecuency } = settings;
  const { countBackwards, focusDuration } = settings;

  return (
    <div className="pomodoro">
      <Timer
        countTo={focusDuration}
        countBackwards={countBackwards}
      />
      <div className="pomodoro-controls">
        {onSave &&
        <button
          className="btn"
          onClick={onSave}
        >
          Save Pomodoro
        </button>}
        {onDelete &&
        <button
          className="btn"
          onClick={onDelete}
        >
          Delete Pomodoro
        </button>}
      </div>
    </div>
  );
}
 
export default Pomodoro;