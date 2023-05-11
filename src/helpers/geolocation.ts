export default function handleGeolocation (
  successCallback: PositionCallback,
  errorCallback: PositionErrorCallback,
  options: PositionOptions = { enableHighAccuracy: true, timeout: 2000 }
) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
}