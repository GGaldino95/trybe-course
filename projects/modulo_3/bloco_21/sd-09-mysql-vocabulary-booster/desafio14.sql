SELECT Country AS 'País' FROM `w3schools`.`customers`
UNION
SELECT Country AS 'País' FROM `w3schools`.`suppliers`
GROUP BY `País`
ORDER BY `País` ASC
LIMIT 5;
