// Exercicio 01
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
]);

// Exercicio 02
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $match: {
      idade: { $gte: 18, $lte: 25 },
    },
  },
  { $count: 'totalClientes' },
]);

// Exercicio 03
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    },
  },
]);

// Exercicio 04
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        gte: ISODate('2019-06-01'),
        lte: ISODate('2020-03-31'),
      },
    },
  },
]);

// Exercicio 05
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31'),
      },
    },
  },
]).itcount();

// Exercicio 06
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31'),
      },
    },
  },
  {
    $addFields: {
      totalCompras: {
        $size: "$compras",
      },
    },
  },
  {
    $sort: {
      totalCompras: -1,
    },
  },
  { $limit: 10 },
  { $unwind: "$compras" },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $subtract: [
          "$compras.valorTotal",
          { $multiply: ["$compras.valorTotal", 0.10] },
        ],
      },
    },
  },
  {
    $group: {
      _id: "$endereco.uf",
      totalCompras: { $sum: 1 },
    },
  },
  {
    $sort: {
      totalCompras: -1,
    },
  },
  { $limit: 5 },
]);

// Exercicio 07
db.vendas.aggregate([
  {
    $match: {
      "itens.nome": "QUEIJO PRATO",
    },
  },
  { $unwind: "$itens" },
  {
    $match: {
      "itens.nome": "QUEIJO PRATO",
    },
  },
  {
    $group: {
      _id: "$clienteId",
      totalConsumido: {
        $sum: "$itens.quantidade",
      },
    },
  },
  {
    $sort: {
      totalConsumido: -1,
    },
  },
  { $limit: 1 },
  {
    $lookup: { // Seleciona todos os clientes com as suas respectivas transações feitas;
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'cliente',
    },
  },
  { $unwind: "$cliente" },
  {
    $project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0,
    },
  },
]);

// Exercicio 08
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
]);
