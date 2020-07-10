const findStartingPosition = (trips = []) => {
  const startingPlaces = new Set();
  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];
    startingPlaces.add(trip[0]);
  }
  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];
    if (startingPlaces.has(trip[1])) {
      startingPlaces.delete(trip[1]);
    }
  }
  return [...startingPlaces].join('');
};

if (process.env.NODE_ENV !== 'test') {
  console.log(findStartingPosition([3, 2, 3]));
}

export default findStartingPosition;
