const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^([\w./+-]+)@([\w-]+\.)+([\w]{2,})$/i;

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

module.exports = emailValidation;
