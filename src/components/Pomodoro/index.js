import React from 'react';

// local imports
import Timer from './components/Timer';

const Pomodoro = ({ onSave, onDelete }) => {

  return (
    <div className="pomodoro">
      <Timer
        countTo={25}
        countBackwards={true}
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