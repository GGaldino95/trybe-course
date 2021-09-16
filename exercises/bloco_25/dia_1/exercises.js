// Exercicio 01
db.clientes.aggregate([
  {
    $match: {
      sexo: "MASCULINO"
    },
  },
]);

// Exercicio 02
db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-12-31'),
      },
    },
  },
]);

// Exercicio 03
db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-12-31')
      },
    },
  },
  { $limit: 5 },
]);

// Exercicio 04
db.clientes.aggregate([
  {
    $match: {
      "endereco.uf": "SC",
    },
  },
  {
    $group: {
      _id: "SC",
      total: { $sum: 1 },
    },
  },
]);

// Exercicio 05
db.clientes.aggregate([
  {
    $group: {
      _id: "$sexo",
      total: { $sum: 1 },
    },
  },
]);

// Exercicio 06
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf",
      },
      total: { $sum: 1 },
    },
  },
]);

// Exercicio 07
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf",
      },
      total: { sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      "estado": "$_id.uf",
      "sexo": "$_id.sexo",
      "total": 1
    },
  },
]);

// Exercicio 08
db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] },
    },
  },
  {
    $group: {
      _id: "$clienteId",
      valorTotal: {
        sum: "$valorTotal",
      },
    },
  },
  {
    $sort: {
      valorTotal: -1,
    },
  },
  { $limit: 5 },
]);

// Exercicio 09
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31'),
      },
    },
  },
  {
    $group: {
      _id: "$clienteId",
      valorTotal: { $sum: "$valorTotal" },
    },
  },
  {
    $sort: {
      valotTotal: -1,
    },
  },
  { $limit: 10 },
]);

// Exercicio 10 - $group e $project
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: { $sum: 1 },
    },
  },
  {
    $match: {
      totalCompras: { $gt: 5 },
    },
  },
  {
    $group: {
      _id: null,
      clientes: { $sum: 1 },
    },
  },
  { $project: { _id: 0 } },
]);

// Exercicio 10 - $count
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: { $sum: 1 },
    },
  },
  {
    $match: {
      totalCompras: { $gt: 5 },
    },
  },
  { $count: 'clientes' },
]);

// Exercicio 11
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-03-31'),
      },
    },
  },
  {
    $group: {
      _id: "$clienteId",
      totalCompras: { $sum: 1 },
    },
  },
  {
    $match: {
      totalCompras: { $lt: 3 },
    },
  },
  { $count: 'clientes' },
]);

// Exercicio 12
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
      },
    },
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente',
    },
  },
  { $unwind: "$dadosCliente" },
  {
    $group: {
      _id: "$dadosCliente.endereco.uf",
      totalVendas: { $sum: 1 },
    },
  },
  {
    $sort: {
      totalVendas: -1
    },
  },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1,
    },
  },
]);

// Exercicio 13
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31'),
      },
    },
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente',
    },
  },
  { $unwind: "$cliente" },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      mediaVendas: 1,
      totalVendas: 1,
    },
  },
  {
    $sort: {
      uf: 1,
    }
  }
]);
