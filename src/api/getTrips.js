const getTrips = async () => {
  const result = await fetch('http://localhost:3001/list');
  const data = await result.json();

  return data;
};

export default getTrips;