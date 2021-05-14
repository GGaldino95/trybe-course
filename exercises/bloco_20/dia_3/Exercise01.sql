USE PecasFornecedores;

-- Exercise 01
SELECT * FROM Pecas
WHERE Name LIKE 'GR%';

-- Exercise 02
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;

-- Exercise 03
SELECT peca, preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

-- Exercise 04
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

-- Exercise 05
SELECT COUNT(name) FROM Fornecedores
WHERE name LIKE '%f%';

-- Exercise 06
SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE preco BETWEEN 15 and 40
ORDER BY preco ASC;

-- Exercise 07
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' and '2019-07-30';
