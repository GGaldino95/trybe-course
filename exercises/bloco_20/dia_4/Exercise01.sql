USE Pixar;

-- Exercise 01
INSERT INTO `Movies`
	(title, director, year, length_minutes)
VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
  ('Procurando Nemo', 'John Lasseter', 2003, 107),
  ('Os Incriveis', 'Brad Bird', 2004, 116),
  ('WALL-E', 'Pete Docter', 2008, 104);

-- Exercise 02
INSERT INTO `BoxOffice`
	(movie_id, rating, domestic_sales, international_sales)
VALUES
	(9, 6.8, 450000000, 370000000);

-- Exercise 03
SET SQL_SAFE_UPDATES = 0;

UPDATE `Movies`
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';

-- Exercise 04
UPDATE `Movies`
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';

-- Exercise 05
INSERT INTO `BoxOffice`
	(movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
  (10, 7.4, 460000000, 510000000),
  (11, 9.9, 290000000, 280000000);
  
-- Exercise 06
DELETE FROM `BoxOffice` -- Relacao de Chave-Primaria/Chave-Estrangeira
WHERE movie_id = 11;

DELETE FROM `Movies`
WHERE title = 'WALL-E';

-- Exercise 07
DELETE FROM `BoxOffice`
WHERE movie_id IN (2, 9);

DELETE FROM `Movies`
WHERE director = 'Andrew Staton';
