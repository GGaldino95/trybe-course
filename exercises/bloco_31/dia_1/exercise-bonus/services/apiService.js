const axios = require('axios');



const headers = {
  Accept: 'application/json',
};

const findCEP = async (cepToBeSearched) => {
  const ENDPOINT = `https://viacep.com.br/ws/${cepToBeSearched}/json/`; // CEP_LA nao esta funcionando, ele retorna um HTML ao inves do objeto.

  try {
    const { data: { logradouro, bairro, localidade, uf, cep } } = await axios.get(ENDPOINT, headers);
    const cepData = {
      uf,
      cidade: localidade,
      bairro,
      logradouro,
      cep: cep.replace('-', ''),
    };

    if (Array.isArray(cepData) && cepData.length === 0) {
      throw new Error('CEP não encontrado');
    }
  
  } catch (err) {
    throw new Error('CEP não encontrado');
  }


  return cepData;
};

module.exports = {
  findCEP,
};
