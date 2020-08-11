const getTrips = async () => {
  const result = await fetch('https://fierce-taiga-99651.herokuapp.com/list');
  const data = await result.json();

  return data;
};

export default getTrips;
