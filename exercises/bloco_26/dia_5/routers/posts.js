const router = require('express').Router();

const posts = [
  { id: 1, author: 'Gabriel', comment: 'Teste postagem 1' },
  { id: 2, author: 'Galdino', comment: 'Teste postagem 2' },
  { id: 3, author: 'Nogueira', comment: 'Teste postagem 3' },
]

router.get('/', (_req, res) => res.status(200).json({ posts }));

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((item) => item.id === parseInt(id));

  return !post
    ? next({ statusCode: 404, message: 'post not found' })
    : res.status(200).json(post);
});

module.exports = router;
