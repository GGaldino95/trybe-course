USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movie_insert BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER trigger_movie_log_insert AFTER INSERT ON movies
FOR EACH ROW
BEGIN
INSERT INTO movies_logs(movie_id, executed_action, log_date)
VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;