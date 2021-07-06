// Checando se existem 3 documentos na coleção
db.movies.count();

// Exercicio 01
db.movies.updateOne(
  { title: "Batman" },
  { $set: { imdbRating: 7.7 } },
);

// Exercicio 02
db.movies.updateOne(
  { title: "Godzilla" },
  { $set: { budget: 1 } },
);

// Exercicio 03
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $set: {
      budget: 15,
      imdbRating: 5.5,
    },
  },
);

// Exercicio 04
db.movies.updateOne(
  { title: "Batman" },
  { $inc: { imdbRating: 2 } },
);

// Exercicio 05
db.movies.updateOne(
  { title: "Home Alone" },
  { $inc: { budget: 5 } },
);

// Exercicio 06
db.movies.updateOne(
  { title: "Batman" },
  { $mul: { imdbRating: 4 } },
);

// Exercicio 07
db.movies.updateOne(
  { title: "Batman" },
  { $rename: { budget: "estimatedBudget" } },
);

// Exercicio 08
db.movies.updateOne(
  { title: "Home Alone" },
  { $min: { budget: 5 } },
);

// Exercicio 09
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $max: { imdbRating: 8.6 },
    $set: { "category.1": "thriller" },
  },
);
x
// Exercicio 10
db.movies.updateOne(
  { title: "Home Alone" },
  {
    currentDate: {
      lastUpdated: { $type: "timestamp" },
    },
  },
);

// Exercicio 11
db.movies.updateMany({},
  { $set: { sequels: 0 } },
);

// Exercicio 12
db.movies.updateMany({},
  {
    $unset: {
      budget: "",
      estimatedBudget: "",
    },
  },
);

// Exercicio 13
db.movies.updateMany(
  {
    $or: [
      { title: "Batman" },
      { title: "Home Alone" },
    ],
  },
  { $max: { imdbRating: 17 } },
);
