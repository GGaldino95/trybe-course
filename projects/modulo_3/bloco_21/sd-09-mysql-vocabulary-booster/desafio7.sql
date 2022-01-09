SELECT
UPPER(CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME)) AS 'Nome completo',
jh.START_DATE AS 'Data de início',
e.SALARY AS 'Salário'
FROM `hr`.`job_history` jh
INNER JOIN  `hr`.`employees` e ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
WHERE MONTH(jh.START_DATE) BETWEEN 01 AND 03
ORDER BY `Nome Completo` ASC, `Data de início` ASC;
