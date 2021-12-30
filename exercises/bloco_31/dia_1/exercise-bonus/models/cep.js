const connection = require('./connection');
const apiService = require('../services/apiService');

const findCEP = async (cep) => {
  cep = cep.replace('-', '');

  const [cepData] = await connection.execute(
    'SELECT uf, cidade, bairro, logradouro FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  if (!cepData || cepData.length === 0) return null;

  return cepData[0];
}

const saveCEP = async (cepData) => {
  const { uf, cidade, bairro, logradouro, cep } = cepData;

  await connection.execute(
    'INSERT INTO cep_lookup.ceps (uf, cidade, bairro, logradouro, cep) VALUES (?,?,?,?,?)',
    [uf, cidade, bairro, logradouro, cep],
  );
};

const isValid = (cep) => cep && cep.match(/^\d{5}-?\d{3}$/);

const lookup = async (cep) => {
  if (!isValid(cep)) throw new Error('CEP inválido');

  const cepData = await findCEP(cep);
  if (cepData) return cepData;

  const response = await apiService.findCEP(cep);
  await saveCEP(response);

  return response;
};

module.exports = {
  lookup,
};
