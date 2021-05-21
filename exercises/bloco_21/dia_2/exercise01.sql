USE `Pixar`;

-- Exercise 01
SELECT m.title, box.domestic_sales, box.international_sales
FROM `Movies` m INNER JOIN `BoxOffice` box
ON m.id = box.movie_id;

-- Exercise 02
SELECT m.title, box.domestic_sales, box.international_sales
FROM `Movies` m INNER JOIN `BoxOffice` box
ON m.id = box.movie_id AND box.international_sales > box.domestic_sales;

-- Exercise 03
SELECT m.title, box.rating
FROM `Movies` m INNER JOIN `BoxOffice` box
ON m.id = box.movie_id
ORDER BY box.rating DESC;

-- Exercise 04
SELECT t.`name`, t.location, m.title, m.director, m.`year`, m.length_minutes
FROM `Theater` t LEFT JOIN `Movies` m
ON m.theater_id = t.id
ORDER BY t.`name`;

-- Exercise 05
SELECT m.title, m.director, m.`year`, m.length_minutes, t.`name`, t.location
FROM `Theater` t RIGHT JOIN `Movies` m
ON m.theater_id = t.id
ORDER BY m.title;

-- Exercise 06
SELECT m.title, box.rating
FROM `Movies` m INNER JOIN `BoxOffice` box
ON m.id = box.movie_id AND box.rating > 7.5;

SELECT title FROM `Movies`
WHERE id IN (
    SELECT movie_id from `BoxOffice`
    WHERE rating > 7.5
);

-- Exercise 07
SELECT m.title, box.rating
FROM `Movies` m INNER JOIN `BoxOffice` box
ON m.id = box.movie_id AND m.`year` > 2009;

SELECT rating FROM `BoxOffice`
WHERE movie_id IN (
		SELECT id from `Movies`
    WHERE `year` > 2009
);

-- Exercise 08
SELECT t.`name`, t.location FROM `Theater` t
WHERE EXISTS (
		SELECT * FROM `Movies` m
    WHERE m.theater_id = t.id
);

-- Exercise 09
SELECT t.`name`, t.location FROM `Theater` t
WHERE NOT EXISTS (
		SELECT * FROM `Movies` m
    WHERE m.theater_id = t.id
);
