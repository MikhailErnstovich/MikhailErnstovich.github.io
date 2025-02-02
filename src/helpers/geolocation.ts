export default function handleGeolocation(
  options: PositionOptions = { enableHighAccuracy: true, timeout: Infinity },
): Promise<GeolocationPosition | GeolocationPositionError> {
  const isAvalable = 'navigator' in window && 'geolocation' in navigator;
  return new Promise((resolve, reject) => {
    if (isAvalable) {
      return navigator.geolocation.getCurrentPosition(
        (pos: GeolocationPosition) => resolve(pos),
        (err: GeolocationPositionError) => reject(err),
        options,
      );
    }
  });
}
