const getDestinies = async () => {
  const result = await fetch('http://localhost:3001/index');
  const data = await result.json();

  return data;
};

export default getDestinies;
