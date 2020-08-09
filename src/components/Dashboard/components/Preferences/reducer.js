import { saveToLocalStorage } from "../../../../util";

export const reducer = (state, action) => {
  const { system, timers } = state.preferences;
  switch (action.type) {
    case "reload-preferences":
      return { ...state, preferences: action.payload }
    case "update-theme":
      system.theme = action.payload;
      return { ...state };
    case "update-enableTic":
      system.enableTic = action.payload;
      return { ...state };
    case "update-countBackwards":
      timers.countBackwards = action.payload;
      return { ...state };
    case "update-focusDuration":
      timers.focusDuration = 1 * action.payload;
      return { ...state };
    case "update-breakDuration":
      timers.breakDuration = 1 * action.payload;
      return { ...state };
    case "update-longBreakDuration":
      timers.longBreakDuration = 1 * action.payload;
      return { ...state };
    case "update-longBreakFrecuency":
      timers.longBreakFrecuency = 1 * action.payload;
      return { ...state };
    case "save-preferences":
      saveToLocalStorage('preferences', state.preferences);
      return { preferencesUpdated: true };
    case "reset-preferences":
      saveToLocalStorage('preferences', action.payload);
      return action.payload;
    default:
      throw new Error();
  }
};
