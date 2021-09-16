// Exercicio 01
db.movies.find({
  category: {
    $all: ["action", "adventure"]
  },
}).pretty();

// Exercicio 02
db.movies.find({
  category: {
    $all: ["action"]
  },
  imdbRating: { $gt: 7 }
}).pretty();

// Exercicio 03
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      ratings: {
        $each: [85, 100, 102, 105],
      },
    },
  },
);

// Exercicio 04
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $push: {
      ratings: {
        $each: [78, 52, 95, 102],
      },
    },
  },
);

// Exercicio 05
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      ratings: {
        $each: [200, 99, 65],
      },
    },
  },
);

// Exercicio 06
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gt: 103 },
    },
  },
  { _id: 0, title: 1, ratings: 1 },
).pretty();

// Exercicio 07
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gte: 100, $lte: 105 },
    },
  },
  { _id: 0, title: 1, ratings: 1 },
).pretty();

// Exercicio 08
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] },
    },
  },
  { _id: 0, title: 1, ratings: 1 },
).pretty();

// Exercicio 09
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gt: 103 },
    },
    category: { $all: ["adventure"] },
  },
  { _id: 0, title: 1, ratings: 1, category: 1 },
).pretty();

// Exercicio 10
db.movies.find(
  { category: { $size: 2 } },
  { _id: 0, title: 1 },
).pretty();

// Exercicio 11
db.movies.find(
  { ratings: { $size: 4 } },
  { _id: 0, title: 1 },
).pretty();

// Exercicio 12
db.movies.find({
  budget: { $mod: [5, 0] },
  category: { $size: 2 },
}).pretty();

// Exercicio 13
db.movies.find(
  {
    $or: [
      { category: { $all: ["sci-fi"] } },
      { ratings: { $elemMatch: { $gt: 199 } } },
    ]
  },
  { _id: 0, title: 1, ratings: 1, category: 1 },
).pretty();

// Exercicio 14
db.movies.find({
  $and: [
    { ratings: { $size: 4 } },
    { category: { $in: ["adventure", "family"] } },
    { imdbRating: { $not: { $lt: 7 } } },
  ],
}).pretty();

// Exercicio 15
db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      description:
        "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    },
  },
);

// Exercicio 16
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $set: {
      description:
        "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.",
    },
  },
);

// Exercicio 17
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $set: {
      description:
        "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
    },
  },
);

// Exercicio 18
db.movies.find({
  description: {
    $regex: /^The/,
  },
}).pretty();

// Exercicio 19
db.movies.find({
  description: {
    $regex: /humanity.$/,
  },
}).pretty();

// Exercicio 20
db.movies.createIndex({ description: "text" });

// Exercicio 21
db.movies.find({
  $text: {
    $search: "vacation",
  },
}).pretty();

// Exercicio 22
db.movies.find({
  $text: {
    $search: "monstrous criminal",
  },
}).pretty();

// Exercicio 23
db.movies.find({
  $text: {
    $search: "\"when he is accidentally\"",
  },
}).pretty();
