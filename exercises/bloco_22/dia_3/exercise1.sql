-- Task 1
CREATE VIEW film_with_categories AS
    SELECT f.title, fc.category_id, c.name
    FROM sakila.film_category fc
    INNER JOIN sakila.film f ON f.film_id = fc.film_id
    INNER JOIN sakila.category c ON fc.category_id = c.category_id
    ORDER BY f.title;

-- Task 2
CREATE VIEW film_info AS
    SELECT
        fa.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS actor,
        f.title
    FROM sakila.film_actor fa
    INNER JOIN sakila.film f ON f.film_id = fa.film_id
    INNER JOIN sakila.actor a ON a.actor_id = fa.actor_id
    ORDER BY actor;

-- Task 3
CREATE VIEW address_info AS
    SELECT a.address_id, a.address, a.district, a.city_id, c.city
    FROM sakila.address a
    INNER JOIN sakila.city c ON c.city_id = a.city_id
    ORDER BY c.city;

-- Task 4
CREATE VIEW movies_languages AS
    SELECT f.title, f.language_id, l.name AS language
    FROM sakila.film f
    INNER JOIN sakila.language l ON l.language_id = f.language_id;