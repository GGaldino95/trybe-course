const CEP = require('../models/cep');

const lookupCEP = async (req, res) => {
  try {
    const response = await CEP.lookup(req.query.cep);
    res.render('cep', { cep: response, message: null });
  } catch (err) {
    res.render('cep', { cep: null, message: err.message });
  }
};

module.exports = {
  lookupCEP,
};
