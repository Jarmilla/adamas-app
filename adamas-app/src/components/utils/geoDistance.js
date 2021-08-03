function toRadian(degrees) {
  return (degrees * 2 * Math.PI) / 360;
}

export function geoDistance(coordinates1, coordinates2) {
  // Haversine formula: https://en.wikipedia.org/wiki/Haversine_formula
  // Stable formula for short distances
  // Earth is an ellipsoid, so different latitudes have different radiuses
  // Earth radius changes from 6357 km ... 6378 km
  const earthRadiusAtPipishegy = 6366.442 * 1000;
  const lat1 = toRadian(coordinates1.latitude);
  const lon1 = toRadian(coordinates1.longitude);
  const lat2 = toRadian(coordinates2.latitude);
  const lon2 = toRadian(coordinates2.longitude);
  return (
    2 *
    earthRadiusAtPipishegy *
    Math.asin(Math.sqrt(Math.pow(Math.sin((lat2 - lat1) / 2), 2) + Math.cos(lat2) * Math.cos(lat1) * Math.pow(Math.sin((lon2 - lon1) / 2), 2)))
  );
}

export function formatCoords(coords) {
  return "" + coords.latitude.toFixed(6) + ", " + coords.longitude.toFixed(6);
}

export function subsribeToPosition(setCoords) {
  return () => {
    const watchID = navigator.geolocation.watchPosition(
      (position) => setCoords(position.coords),
      (error) => console.log("Error:", error),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchID);
  };
}
