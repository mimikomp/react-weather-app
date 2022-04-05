export default function Sunset(props) {
  let locationTimezone = props.timezone * 1000;
  let localTimezone = props.localTimestamp.getTimezoneOffset() * -60000;
  let timezoneOffset = locationTimezone - localTimezone;
  let sunsetTime = props.time * 1000;
  let sunsetOffset = new Date(sunsetTime + timezoneOffset);

  let hours = sunsetOffset.getHours();
  let minutes = sunsetOffset.getMinutes();
  let amOrPm = "AM";

  if (hours > 12) {
    amOrPm = "PM";
    hours = hours - 12;
  }
  if (hours === 0) {
    hours = "12";
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return ` ${hours}:${minutes}${amOrPm}`;
}
