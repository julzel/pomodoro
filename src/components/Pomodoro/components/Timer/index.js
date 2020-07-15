import React, { useReducer, useEffect } from 'react';

// local imports
import { TimerUI } from './TimerUI';
import { reducer } from './reducers/timerReducer';

let timeoutId = null;

const getInitialState = (counting, counter) => {
  return { 
    counting,
    counter: counter * 60,
    started: false
  }
};

const init = initialState => initialState;

const Timer = ({ onStart, onPause, onStop, onEnd, countTo, countBackwards, autoStart }) => {

  const [state, dispatch] = useReducer(reducer, getInitialState(!!autoStart, countBackwards ? countTo : 0), init);

  const handleStart = () => {
    dispatch({ type: 'start' });
    onStart && onStart();
  };

  const handlePause = () => {
    clearTimeout(timeoutId);
    dispatch({ type: 'pause' });
    onPause && onPause();
  };

  const handleStop = () => {
    clearTimeout(timeoutId);
    dispatch({ type: 'stop', payload: getInitialState(!!autoStart, countBackwards ? countTo : 0) });
    onStop && onStop();
  };

  const handleEnd = () => {
    onEnd && onEnd();
  }

  const handleTimeCount = () => {
    if (state.counting) {
      countBackwards ? countDown() : countUp();
    }
  };

  const countUp = () => {
    if (!countTo || state.counter < (countTo * 60) - 1) {
      dispatch({ type: 'increment' }); 
    }
  };

  const countDown = () => {
    if (countTo && state.counter > 0) {
      dispatch({ type: 'decrement' }); 
    }
  };

  useEffect(() => {
    if (state.counting) {
      timeoutId = setTimeout(() => {
        handleTimeCount();
        clearTimeout(timeoutId);
      }, 1000)
    }
  })


  return (
    <TimerUI
      seconds={state.counter}
      counting={state.counting}
      handleStart={handleStart}
      handlePause={handlePause}
      handleStop={handleStop}
      handleEnd={handleEnd}
    />
  );
}
 
export default Timer;