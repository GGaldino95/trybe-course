// Exercicio 09
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-03-01'),
        $lte: ISODate('2020-03-31'),
      },
      status: "EM SEPARACAO",
    },
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60000],
      },
    },
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    },
  },
  {
    $group: {
      _id: null,
      maxDataEntrega: {
        $max: "$dataEntregaPrevista",
      },
      minDataEntrega: {
        $min: "$dataEntregaPrevista",
      },
    },
  },
  {
    $project: {
      _id: 0,
      diasDiferenca: {
        $ceil: {
          $abs: {
            $divide: [
              { $subtract: ["$maxDataEntrega", "$minDataEntrega"] },
              86400000,
            ],
          },
        },
      },
    },
  },
]);