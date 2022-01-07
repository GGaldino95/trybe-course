const fetchAllCurrencyData = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesList = await response.json();
    return currenciesList;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllCurrencyData;
