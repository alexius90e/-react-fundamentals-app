function formatDuration(duration: number): string {
  const MINUTES_IN_HOUR = 60;

  const minutes = duration % MINUTES_IN_HOUR;
  const minutesString = minutes >= 10 ? `${minutes}` : `0${minutes}`;

  const hours = Math.floor(duration / MINUTES_IN_HOUR);
  const hoursString = hours >= 10 ? `${hours}` : `0${hours}`;

  return `${hoursString}:${minutesString} ${hours > 1 ? 'hours' : 'hour'}`;
}

export default formatDuration;
