db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "pt" },
);
db.produtos.countDocuments(
  {
    $text: {
      $search: "frango hamburguer",
      $language: "pt",
    },
  },
);