DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario (IN email VARCHAR(50))
BEGIN
SELECT CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
d.DEPARTMENT_NAME 'Departamento',
j.JOB_TITLE AS 'Cargo'
FROM `hr`.`job_history` jh
INNER JOIN `hr`.`employees` e ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
INNER JOIN `hr`.`departments` d ON d.DEPARTMENT_ID = jh.DEPARTMENT_ID
INNER JOIN `hr`.`jobs` j ON j.JOB_ID = jh.JOB_ID
WHERE e.EMAIL = email
ORDER BY `Departamento` ASC, `Cargo` ASC;
END $$

DELIMITER ;
