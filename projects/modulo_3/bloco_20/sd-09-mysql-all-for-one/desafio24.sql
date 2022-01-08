UPDATE `northwind`.`order_details`
SET discount = 45 WHERE UNIT_PRICE > 10.0000 AND id BETWEEN 30 AND 40;
