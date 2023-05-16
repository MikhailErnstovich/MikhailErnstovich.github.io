export default function handleGeolocation (
  // successCallback: PositionCallback,
  // errorCallback: PositionErrorCallback,
  options: PositionOptions = { enableHighAccuracy: true, timeout: 2000 }
):Promise<GeolocationPosition|GeolocationPositionError> {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        resolve(pos);
      },
      err => reject(err),
      options
    )
  );
}