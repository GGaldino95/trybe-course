// Exercicio 01
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: "superhero" } },
);

// Exercicio 02
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      category: {
        each: ["villain", "comic-based"],
      },
    },
  },
);

// Exercicio 03
db.movies.updateOne(
  { title: "Batman" },
  { $pull: { category: "action" } },
);

// Exercicio 04
db.movies.updateOne(
  { title: "Batman" },
  { $pop: { category: -1 } },
);

// Exercicio 05
db.movies.updateOne(
  { title: "Batman" },
  { $pop: { category: 1 } },
);

// Exercicio 06
db.movies.updateOne(
  { title: "Batman" },
  { $addToSet: { category: "action" } },
);

// Exercicio 07
db.movies.updateMany(
  {
    title: {
      $in: ["Batman", "Home Alone"],
    },
  },
  { $push: { category: "90's" } },
);

// Exercicio 08
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      cast: {
        each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin",
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry",
          },
          {
            "actor": "Daniel Stern",
          },
        ],
      },
    },
  },
);

// Exercicio 09
db.movies.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  { $set: { "cast.$.character": "Marv" } },
);

// Exercicio 10
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      cast: {
        each: [
          {
            "character": "Batman",
          },
          {
            "character": "Alfred",
          },
          {
            "character": "Coringa",
          },
        ],
      },
    },
  },
);

// Exercicio 11.1
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  { $push: { "cast.$.actor": "Christian Bale" } },
);

// Exercicio 11.2
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Alfred",
  },
  { $push: { "cast.$.actor": "Michael Caine" } },
);

// Exercicio 11.3
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Coringa",
  },
  { $push: { "cast.$.actor": "Heath Ledger" } },
);

// Exercicio 12
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: {
      "cast.$.actor": {
        each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
        sort: 1,
      },
    },
  },
);