SELECT
c.ContactName AS 'Nome de contato',
s.ShipperName AS 'Empresa que fez o envio',
o.OrderDate AS 'Data do pedido'
FROM `w3schools`.`customers` c
JOIN  `w3schools`.`orders` o ON o.CustomerID = c.CustomerID
JOIN `w3schools`.`shippers` s ON s.ShipperID = o.ShipperID
WHERE s.ShipperName LIKE 'Speedy Express' OR s.ShipperName LIKE 'United Package'
ORDER BY `Nome de contato` ASC, `Empresa que fez o envio` ASC, o.OrderDate ASC;
