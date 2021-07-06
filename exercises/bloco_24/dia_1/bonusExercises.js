// Exercicio 14
db.xmen.updateMany(
  { class: "unknown" },
  {
    currentDate: { lastUpdate: { $type: "timestamp" } },
    $unset: { class: "" },
  },
);

// Exercicio 15
db.xmen.updateMany({},
  {
    currentDate: { lastUpdate: { $type: "timestamp" } },
    $rename: {
      name: "hero_name",
      true_name: "full_name",
    },
    $set: { power: 100 },
  },
);

// Exercicio 16
db.xmen.updateMany(
  { class: { $in: ["omega", "gama"] } },
  {
    currentDate: { lastUpdate: { $type: "timestamp" } },
    $max: { power: 500 },
  },
);

// Exercicio 17
db.xmen.updateMany(
  { class: "gama" },
  {
    currentDate: { lastUpdate: { $type: "timestamp" } },
    $min: { power: 300 },
  },
);

// Exercicio 18
db.xmen.updateMany(
  { class: { $exists: false } },
  {
    currentDate: { lastUpdate: { $type: "timestamp" } },
    $inc: { power: -100 },
  },
);

// Exercicio 19
db.xmen.updateMany(
  {
    $or: [
      { occupation: "Senior Staff", power: { $gt: 100 } },
      { occupation: "Junior Staff", power: { $gt: 200 } },
    ],
  },
  {
    currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Students Room"] },
  },
);

// Exercicio 20
db.xmen.updateMany(
  { areas: { $exists: false }, occupation: "Junior Staff" },
  {
    currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Outside"] },
  },
);
