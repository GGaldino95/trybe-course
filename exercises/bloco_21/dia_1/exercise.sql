USE `hr`;
SELECT * FROM `employees`;

-- Exercise 01
SELECT MAX(SALARY) AS 'Highest Salary' FROM `employees`;

-- Exercise 02
SELECT MAX(SALARY) - MIN(SALARY) AS 'Salary difference' FROM `employees`;

-- Exercise 03
SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS 'Average Salary' FROM `employees`
GROUP BY JOB_ID
ORDER BY 'Average Salary' DESC;

-- Exercise 04
SELECT SUM(SALARY) AS 'Amount Needed to Pay Everyone' FROM `employees`;

-- Exercise 05
SELECT
	ROUND(MAX(SALARY), 2) AS 'Highest Salary',
  ROUND(MIN(SALARY), 2) AS 'Lowest Salary',
  ROUND(SUM(SALARY), 2) AS 'Salary Sum',
  ROUND(AVG(SALARY), 2) AS 'Average Salary'
FROM `employees`;

-- Exercise 06
SELECT JOB_ID, COUNT(*) AS 'Number of Employees' FROM `employees`
WHERE JOB_ID LIKE 'IT_PROG';

-- Exercise 07
SELECT JOB_ID, SUM(SALARY) AS 'Amount to Pay Everyone' FROM `employees`
GROUP BY JOB_ID;

-- Exercise 08
SELECT JOB_ID, SUM(SALARY) AS 'Amount to Pay Everyone' FROM `employees`
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Exercise 09
SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS 'Average Salary' FROM `employees`
WHERE JOB_ID != 'IT_PROG'
GROUP BY JOB_ID
ORDER BY 'Average Salary' DESC;

-- Exercise 10
SELECT DEPARTMENT_ID, AVG(SALARY) 'Average Salary', COUNT(*) AS 'Number of Employees' FROM `employees`
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) > 10;

-- Exercise 11
UPDATE `employees`
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

-- Exercise 12
SELECT * FROM `employees`
WHERE LENGTH(FIRST_NAME) >= 8;

-- Exercise 13
SELECT EMPLOYEE_ID, FIRST_NAME, LEFT(HIRE_DATE, 4) AS 'HIRE_YEAR' FROM `employees`;

-- Exercise 14
SELECT EMPLOYEE_ID, FIRST_NAME, RIGHT(HIRE_DATE, 2) AS 'HIRE_DAY' FROM `employees`;

-- Exercise 15
SELECT EMPLOYEE_ID, FIRST_NAME, MID(HIRE_DATE, 6, 2) AS 'HIRE_MONTH' FROM `employees`;

-- Exercise 16
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS 'FULL NAME' FROM `employees`;

-- Exercise 17
SELECT LAST_NAME, HIRE_DATE FROM `employees`
WHERE LEFT(HIRE_DATE, 7) = '1987-07';

-- Exercise 18
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(NOW(), HIRE_DATE) AS 'Days worked' FROM `employees`;
