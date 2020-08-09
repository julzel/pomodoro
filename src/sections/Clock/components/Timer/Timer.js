/*** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * 
 * 
 * state snapshot
  state = {
    counting: boolean,
    counter: int,
    started: boolean
  }
 * 
 * 
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ***/

import React, { useReducer, useEffect } from "react";

// local imports
import { reducer } from "./reducer";
import { TimerUI } from "./components/TimerUI/TimerUI";
import { TimerContols} from "./components/TimerControls/TimerControls";

let timeoutId = null;

const setInitialState = (counting, counter) => {
  return {
    counting,
    counter: counter * 60,
    started: false,
  };
};

const init = (initialState) => initialState;

const Timer = ({
  onStart,
  onPause,
  onStop,
  onEnd,
  countTo,
  countBackwards,
  autoStart,
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    setInitialState(!!autoStart, countBackwards ? countTo : 0),
    init
  );

  const handleStart = () => {
    dispatch({ type: "start" });
    onStart && onStart();
  };

  const handlePause = () => {
    clearTimeout(timeoutId);
    dispatch({ type: "pause" });
    onPause && onPause();
  };

  const handleStop = () => {
    clearTimeout(timeoutId);
    dispatch({
      type: "stop",
      payload: setInitialState(!!autoStart, countBackwards ? countTo : 0),
    });
    onStop && onStop();
  };

  const handleEnd = () => {
    onEnd && onEnd();
  };

  const handleTimeCount = () => {
    if (state.counting) {
      countBackwards ? countDown() : countUp();
    }
  };

  const countUp = () => {
    if (!countTo || state.counter < countTo * 60 - 1) {
      dispatch({ type: "increment" });
    } else {
      handleEnd();
    }
  };

  const countDown = () => {
    if (countTo && state.counter > 0) {
      dispatch({ type: "decrement" });
    } else {
      handleEnd();
    }
  };

  useEffect(() => {
    if (state.counting) {
      timeoutId = setTimeout(() => {
        handleTimeCount();
        clearTimeout(timeoutId);
      }, 10);
    }
  });

  useEffect(() => {
    dispatch({ type: "update-counter", payload: countBackwards ? countTo : 0 });
  }, [countBackwards, countTo]);

  return (
    <TimerUI seconds={state.counter}>
      <TimerContols
        counting={state.counting}
        handleStart={handleStart}
        handlePause={handlePause}
        handleStop={handleStop}
      />
    </TimerUI>
  );
};

export default Timer;
