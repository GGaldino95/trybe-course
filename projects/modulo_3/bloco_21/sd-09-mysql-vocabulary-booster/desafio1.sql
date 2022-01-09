SELECT c.COUNTRY_NAME AS 'País', IF(c.REGION_ID = r.REGION_ID, 'incluído', 'não incluído') AS 'Status Inclusão'
FROM `hr`.`countries` c
JOIN `hr`.`regions` r ON r.REGION_NAME LIKE 'Europe'
ORDER BY `País` ASC;
