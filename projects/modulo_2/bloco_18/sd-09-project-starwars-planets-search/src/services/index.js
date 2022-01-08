const fetchPlanetsDatabase = async () => {
  const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(API_URL).then((response) => response.json());
  return results;
};

export default fetchPlanetsDatabase;
