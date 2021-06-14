use('class');

// Exercise 01
db.superheroes.findOne();

// Exercise 02
db.superheroes.find({ "aspects.height": { $lt: 180 } });

// Exercise 03
db.superheroes.countDocuments({ "aspects.height": { $lt: 180 } });

// Exercise 04
db.superheroes.countDocuments({ "aspects.height": { $lte: 180 } });

// Exercise 05
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });

// Exercise 06
db.superheroes.countDocuments({ "aspects.height": { $gte: 200 } });

// Exercise 07
db.superheroes.find({ "aspects.eyeColor": { $eq: "green" } });

// Exercise 08
db.superheroes.countDocuments({ "aspects.eyeColor": { $eq: "blue" } });

// Exercise 09
db.superheroes.find({ "aspects.hairColor": { $in: ["Black", "No Hair"] } });

// Exercise 10
db.superheroes.countDocuments({ "aspects.hairColor": { $in: ["Black", "No Hair"] } });

// Exercise 11
db.superheroes.countDocuments({ "aspects.hairColor": { $nin: ["Black", "No Hair"] } });

// Exercise 12
db.superheroes.countDocuments({ "aspects.height": { $not: { $gt: 180 } } });

// Exercise 13
db.superheroes.find({
    $nor: [
      { race: { $eq: "human" } },
      { "aspects.height": { $gt: 180 } },
    ],
  });

// Exercise 14
db.superheroes.find({
    "aspects.height": { $in: [180, 200] },
    publisher: { $eq: "Marvel Comics" },
});

// Exercise 15
db.superheroes.find({
    $and: [
      { "aspects.weight": { $gte: 80, $lte: 100 } },
      { $or: [
          { race: "Human" },
          { race: "Mutant" }
        ],
      },
      { publisher: { $ne: "DC Comics" } },
    ]
  });

// Exercise 16
db.superheroes.countDocuments({ race: { $exists: false } });

// Exercise 17
db.superheroes.countDocuments({ "aspects.hairColor": { $exists: true } });

// Exercise 18
db.superheroes.deleteOne({ publisher: { $eq: "Sony Pictures" } });

// Exercise 19
db.superheroes.deleteMany({ publisher: { $eq: "George Lucas" } });
