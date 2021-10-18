module.exports = (err, _req, res, _next) => {
  if (err.status) { // Caso o erro possua uma propriedade `status`, devolvemos esse status, juntamente com a mensagem do erro;
    return res.status(err.stauts).json({ message: err.message });
  }

  if (err.isJoi) { // Caso o erro seja um erro do joi;
    return res.status(400).json({ message: err.details[0].message }); // Devolvemos o status 400 Bad Request com a mensagem de erro que o Joi gerou;
  }

  // Caso o erro não seja de nenhum dos dois tipos acima, ele é um erro desconhecido;
  console.error(err); // Imprimimos o erro no console para que possamos debugá-lo;
  res.status(500).json({ message: 'Erro interno do servidor' }); // Retornamos o status 500 Internal Server Error, e uma mensagem avisando que houve um erro;
};
