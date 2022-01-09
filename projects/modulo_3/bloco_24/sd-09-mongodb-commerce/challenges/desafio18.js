db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "pt" },
);
db.produtos.countDocuments(
  {
    $text: {
      $search: "feito com",
      $language: "pt",
    },
  },
);