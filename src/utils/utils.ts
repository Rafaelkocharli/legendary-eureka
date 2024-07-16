export function timestampToTime(timestamp: number) {
  let hours = Math.floor(timestamp / 3600);
  let minutes = Math.floor(timestamp / 60);
  let seconds = Math.floor(timestamp - minutes * 60);
  return hours
    ? `${hours}ч ${minutes}м ${seconds}с`
    : minutes
    ? `${minutes}м ${seconds}с`
    : `${seconds}с`;
}
