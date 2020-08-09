import React from 'react';

export const TimerContols = ({ counting, handleStart, handlePause, handleStop }) => {
  return (
    <div className="timer-controls">
      {!counting && (
        <button className="btn" onClick={handleStart}>
          Start
        </button>
      )}
      {counting && (
        <button className="btn" onClick={handlePause}>
          Pause
        </button>
      )}
      <button className="btn" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}