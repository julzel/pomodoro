/***
 * state snapshot
  state = {
    preferences: {
      system: {
        theme: string,
        enableTic: boolean,
      },
      timers: {
        countBackwards: boolean,
        focusDuration: number,
        breakDuration: number,
        longBreakDuration: number,
        longBreakFrecuency: number
      }
    },
    preferencesUpdated: boolean
  }
*/

import React, { useReducer, useContext, useEffect } from 'react';
import { reducer } from './reducer';
import { themeOptions } from '../../../../config';
import PreferecesUI from './PreferencesUI';
import { PreferencesContext } from '../../../../contexts/preferencesContext';

const Preferences = () => {

  const { preferences, foundLocalPreferences } = useContext(PreferencesContext);
  const [state, dispatch] = useReducer(reducer, { preferences, preferencesUpdated: false });

  useEffect(() => {
    foundLocalPreferences && dispatch({ type: 'reload-preferences', payload: preferences })
  }, [foundLocalPreferences, preferences]);

  const onSetTheme = e => {
    dispatch({ type: "update-theme", payload: e.target.value });
  }
  
  const onEnableTic = e => {
    dispatch({ type: "update-enableTic", payload: e.target.checked });
  }
  
  const onCountBackwards = e => {
    dispatch({ type: "update-countBackwards", payload: e.target.checked });
  }
  
  const onSetFocusDuration = e => {
    dispatch({ type: "update-focusDuration", payload: e.target.value });
  }
  
  const onSetBreakDuration = e => {
    dispatch({ type: "update-breakDuration", payload: e.target.value });
  }
  
  const onSetLongBreakDuration = e => {
    dispatch({ type: "update-longBreakDuration", payload: e.target.value });
  }
  
  const onSetLongBreakFrecuency = e => {
    dispatch({ type: "update-longBreakFrecuency", payload: e.target.value });
  }
  
  const onFormSubmit = e => {
    e.preventDefault();
    dispatch({ type: "save-preferences" });
  }

  const onFormReset = e => {
    e.preventDefault();
    dispatch({ type: "reset-preferences" });
  }

  return (
    <PreferecesUI
      onSetTheme={onSetTheme}
      onEnableTic={onEnableTic}
      onCountBackwards={onCountBackwards}
      onSetFocusDuration={onSetFocusDuration}
      onSetBreakDuration={onSetBreakDuration}
      onSetLongBreakDuration={onSetLongBreakDuration}
      onSetLongBreakFrecuency={onSetLongBreakFrecuency}
      onFormSubmit={onFormSubmit}
      onFormReset={onFormReset}
      state={state}
      themeOptions={themeOptions}
    />
  );
}
 
export default Preferences;