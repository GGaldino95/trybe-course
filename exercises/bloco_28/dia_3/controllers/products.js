const createProduct = (req, res) => {
  const { title, price } = req.body;

  if (!title || !price) {
    return res.status(422).json({ message: 'Missing title or price' });
  }

  res.status(200).json({ message: 'Produto criado com sucesso!', user: req.user });
};

module.exports = { createProduct };
