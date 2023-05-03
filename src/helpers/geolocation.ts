export default function handleGeolocation (
  successCallback: PositionCallback,
  errorCallback: PositionErrorCallback,
  options: PositionOptions = { enableHighAccuracy: true }
) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
}