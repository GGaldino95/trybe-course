SELECT
CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
j.JOB_TITLE AS 'Cargo',
jh.START_DATE AS 'Data de início do cargo',
d.DEPARTMENT_NAME AS 'Departamento'
FROM `hr`.`job_history` jh
JOIN `hr`.`jobs` j ON j.JOB_ID = jh.JOB_ID
JOIN `hr`.`employees` e ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
JOIN `hr`.`departments` d ON d.DEPARTMENT_ID = jh.DEPARTMENT_ID
ORDER BY `Nome Completo` DESC, `Cargo` ASC;
