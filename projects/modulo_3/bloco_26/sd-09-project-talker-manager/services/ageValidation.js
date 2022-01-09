const ageValidation = (req, res, next) => {
  const { age } = req.body;
  const ageRegex = /^\d+$/i;

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  if (!ageRegex.test(age)) {
    return res.status(400).json({ message: 'not a number' });
  }

  next();
};

module.exports = ageValidation;
