USE Pixar;

-- Exercise 08
UPDATE `BoxOffice`
SET rating = 9.0
WHERE domestic_sales > 400000000;

-- Exercise 09
UPDATE `BoxOffice`
SET rating = 6.0
WHERE international_sales < 300000000 AND domestic_sales > 200000000;

-- Exercise 10
SELECT id, length_minutes FROM `Movies`
WHERE length_minutes < 100; -- Localizar ID's dos filmes a serem removidos (1, 6, 7, 8, 12)

DELETE FROM BoxOffice -- Relacao de Chave-Primaria/Chave-Estrangeira
WHERE movie_id IN (1, 6, 7, 8, 12);
 
DELETE FROM Movies
WHERE length_minutes < 100;