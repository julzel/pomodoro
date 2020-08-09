import React from "react";

// local imports
import FormBlock from "../../../../components/FormBlock";

const PreferecesUI = ({
  onSetTheme,
  onEnableTic,
  onCountBackwards,
  onSetFocusDuration,
  onSetBreakDuration,
  onSetLongBreakDuration,
  onSetLongBreakFrecuency,
  onFormSubmit,
  onFormReset,
  state,
  themeOptions
}) => {
  const { theme, enableTic } = state.preferences.system;
  const {
    countBackwards,
    focusDuration,
    breakDuration,
    longBreakDuration,
    longBreakFrecuency,
  } = state.preferences.timers;

  return (
    <div className="preferences">
      <h2>Preferences</h2>
      
      <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
        <div className="preferences-system">
          <FormBlock
            id="select-theme"
            type="select"
            label="Theme"
            value={theme}
            onChange={onSetTheme}
            options={themeOptions}
          />

          <FormBlock
            id="enable-tic"
            type="checkbox"
            label={`Clock ticking sound (${enableTic ? "Yes" : "No"}):`}
            onChange={onEnableTic}
            checked={enableTic}
          />
        </div>
        
        <div className="preferences-timers">
          <FormBlock
            id="count-backwards"
            type="checkbox"
            label={`Count Backwards (${countBackwards ? "Yes" : "No"}):`}
            onChange={onCountBackwards}
            checked={countBackwards}
          />

          <FormBlock
            id="count-backwards"
            type="text"
            label="Focus Duration"
            value={focusDuration}
            onChange={onSetFocusDuration}
          />

          <FormBlock
            id="break-duration"
            type="text"
            label="Break Duration"
            value={breakDuration}
            onChange={onSetBreakDuration}
          />

          <FormBlock
            id="long-break-duration"
            type="text"
            label="Long Break Duration"
            value={longBreakDuration}
            onChange={onSetLongBreakDuration}
          />

          <FormBlock
            id="long-break-frecuency"
            type="text"
            label="Long Break Frecuency"
            value={longBreakFrecuency}
            onChange={onSetLongBreakFrecuency}
          />
        </div>
        <div className="form_block">
          <button type="submit" className="form-block_button">
            Save Changes
          </button>
          <button type="reset" className="form-block_button">
            Default
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreferecesUI;
