import React from "react";
import { format } from "../../util/timeFormat";

export const TimerUI = ({
  seconds,
  children,
}) => (
  <div className="timer-ui">
    <p>{format(seconds, "mm")}</p>
    {children}
  </div>
);
