db.trips.aggregate([
  {
    $match: {
      birthYear: { $exists: true, $ne: "" },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
]);
