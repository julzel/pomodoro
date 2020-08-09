function getFormattedValue(val) {
  if (val < 10) {
    return `0${val}`;
  } else if (val < 60) {
    return `${val}`;
  }
}

function secondsToMinutes(seconds) {
  return {
    minutes: Math.floor(seconds / 60),
    seconds: seconds % 60,
  };
}

function secondsToHours(seconds) {
  const mins = secondsToMinutes(seconds % 3600);

  return {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor(mins.minutes),
    seconds: mins.seconds,
  };
}

export function noFormat (seconds) {
  const time = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (seconds < 60) {
    time.seconds = seconds
  } else if (seconds < 3600) {
    const { seconds: secs, minutes } = secondsToMinutes(seconds);

    time.seconds = secs;
    time.minutes = minutes;
  } else {
    const { seconds: secs, minutes, hours } = secondsToHours(seconds);

    time.seconds = secs;
    time.minutes = minutes;
    time.hours = hours;
  }

  return time;
}

export function format(seconds, displayType) {
  let formattedSeconds = "00",
    formattedMinutes = "00",
    formattedHours = "00";

  if (seconds < 60) {
    formattedSeconds = getFormattedValue(seconds);
  } else if (seconds < 3600) {
    const { seconds: secs, minutes } = secondsToMinutes(seconds);

    formattedMinutes = getFormattedValue(minutes);
    formattedSeconds = getFormattedValue(secs);
  } else {
    const { seconds: secs, minutes, hours } = secondsToHours(seconds);

    formattedHours = getFormattedValue(hours);
    formattedMinutes = getFormattedValue(minutes);
    formattedSeconds = getFormattedValue(secs);
  }

  switch (displayType) {
    case 'hh':
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    case 'mm':
      return `${formattedMinutes}:${formattedSeconds}`;
    case 'ss':
      return `${formattedSeconds}`;
    default:
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
