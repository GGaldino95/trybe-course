USE `Pixar`;

-- Exercise 10
SELECT m.id, m.title, m.director, m.`year`, m.length_minutes, m.theater_id
FROM `Movies` m INNER JOIN `BoxOffice` box
ON m.id = box.movie_id AND box.rating > 8;

-- Exercise 11
SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes
FROM `Movies` m1, `Movies` m2
WHERE m1.director = m2.director AND m1.title != m2.title;

-- Exercise 12
SELECT m.title FROM `Movies` m INNER JOIN `BoxOffice` box
ON m.id = box.movie_id
WHERE (box.domestic_sales > 500000000 OR box.international_sales > 500000000) AND
m.length_minutes > 110;

SELECT m.title FROM `Movies` m
WHERE (
		SELECT movie_id FROM `BoxOffice` box
    WHERE
			box.movie_id = m.id AND
      (box.domestic_sales > 500000000 OR box.international_sales > 500000000) AND
      m.length_minutes > 110
	);