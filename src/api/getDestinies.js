const getDestinies = async () => {
  const result = await fetch('https://fierce-taiga-99651.herokuapp.com/index');
  const data = await result.json();

  return data;
};

export default getDestinies;
