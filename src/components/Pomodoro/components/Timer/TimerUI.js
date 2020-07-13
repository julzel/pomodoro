import React from 'react';
import { format } from '../../util/timeFormat';

export const TimerUI = ({ seconds, counting, handleStart, handlePause, handleStop }) => (
  <div className="timer-ui">
    {!counting && <button className="btn" onClick={handleStart}>Start</button>}
    {counting && <button className="btn" onClick={handlePause}>Pause</button>}
    <button className="btn" onClick={handleStop}>Stop</button>
    <p>{format(seconds, 'mm')}</p>
  </div>
)