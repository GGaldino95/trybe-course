USE Scientists;

-- Exercise 01
SELECT * FROM Scientists
WHERE Name LIKE '%e%';

-- Exercise 02
SELECT * FROM Projects
WHERE code LIKE 'A%'
ORDER BY Name;

-- Exercise 03
SELECT code, Name FROM Projects
WHERE code LIKE '%3%'
ORDER BY Name;

-- Exercise 04
SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');

-- Exercise 05
SELECT * FROM Projects
WHERE Hours > 500;

-- Exercise 06
SELECT * FROM Projects
WHERE Hours BETWEEN 251 AND 799;

-- Exercise 07
SELECT Name, code FROM Projects
WHERE Name NOT LIKE 'A%';

-- Exercise 08
SELECT Name FROM Projects
WHERE code LIKE '%H%';
