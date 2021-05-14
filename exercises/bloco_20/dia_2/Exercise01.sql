USE Scientists;

-- Exercise 01
SELECT 'This is SQL Exercise, Pratice and Solution';

-- Exercise 02
SELECT 1, 2, 3;

-- Exercise 03
SELECT 10 + 15;

-- Exercise 04
SELECT (900 / 300) * 5;

-- Exercise 05
SELECT * FROM Scientists;

-- Exercise 06
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

-- Exercise 07
SELECT Name FROM Scientists
ORDER BY Name ASC;

-- Exercise 08
SELECT Name FROM Projects
ORDER BY Name DESC;

-- Exercise 09
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluido.') AS Query FROM Projects;

-- Exercise 10
SELECT CONCAT(Name, ' - ', Hours) AS Projetos FROM Projects
ORDER BY Hours DESC
LIMIT 3;

-- Exercise 11
SELECT DISTINCT Project FROM AssignedTo;

-- Exercise 12
SELECT Name FROM Projects
ORDER BY Hours DESC
LIMIT 1;

-- Exercise 13
SELECT Name FROM Projects
ORDER BY Hours
LIMIT 1
OFFSET 1;

-- Exercise 14
SELECT * FROM Projects
ORDER BY Hours
LIMIT 5;

-- Exercise 15
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists') AS Query FROM Scientists;
