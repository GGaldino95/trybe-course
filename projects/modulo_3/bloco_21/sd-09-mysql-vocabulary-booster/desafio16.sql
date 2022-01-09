DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE job_history_count INT;
SELECT COUNT(*) FROM `hr`.`job_history` jh
INNER JOIN `hr`.`employees` e ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
INNER JOIN `hr`.`jobs` j ON j.JOB_ID = jh.JOB_ID
WHERE e.EMAIL = email INTO job_history_count;
RETURN job_history_count;
END $$

DELIMITER ;
