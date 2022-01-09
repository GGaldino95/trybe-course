db.movies.aggregate([
  {
    $match: {
      countries: { $eq: "USA" },
      "tomatoes.viewer.rating": { $gte: 3 },
      cast: { $exists: true },
    },
  },
  {
    $addFields: {
      num_favs: {
        $let: {
          vars: {
            fav_actors: ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"],
          },
          in: {
            $size: { $setIntersection: ["$cast", "$$fav_actors"] },
          },
        },
      },
    },
  },
  {
    $sort: {
      num_favs: -1,
      "tomatoes.viewer.rating": -1,
      title: -1,
    },
  },
  {
    $skip: 24,
  },
  {
    $limit: 1,
  },
  {
    $project: {
      _id: 0,
      title: 1,
    },
  },
]);
