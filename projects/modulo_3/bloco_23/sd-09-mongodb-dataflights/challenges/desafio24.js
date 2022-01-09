db.voos.find(
  {
    $and: [
      { litrosCombustivel: { $not: { $gt: 600 } } },
      {
        $or: [
          { "empresa.nome": { $ne: "GOL" } },
          { "empresa.nome": { $ne: "AZUL" } },
        ],
      },
      { litrosCombustivel: { $exists: true } },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
  },
).limit(1);