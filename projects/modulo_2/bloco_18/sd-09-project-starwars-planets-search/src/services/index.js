const fetchPlanetsDatabase = async () => {
  // Was https://swapi-trybe.herokuapp.com — Trybe's SWAPI mirror, gone since Heroku ended free
  // dynos. swapi.py4e.com is another mirror of the same API: same routes, same response shape.
  const API_URL = 'https://swapi.py4e.com/api/planets/';
  const { results } = await fetch(API_URL).then((response) => response.json());
  return results;
};

export default fetchPlanetsDatabase;
