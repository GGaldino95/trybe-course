SELECT
c1.ContactName AS 'Nome',
c1.Country AS 'País',
(
SELECT COUNT(c2.Country) - 1 FROM `w3schools`.`customers` c2
GROUP BY Country HAVING c2.Country = c1.Country
) AS 'Número de compatriotas'
FROM `w3schools`.`customers` c1
WHERE (
SELECT COUNT(c2.Country) - 1 FROM `w3schools`.`customers` c2
GROUP BY Country HAVING c2.Country = c1.Country
) > 0
ORDER BY `Nome` ASC;
