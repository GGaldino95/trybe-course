DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN artista VARCHAR(50))
BEGIN
SELECT art.artista AS 'artista', alb.album AS 'album'
FROM `SpotifyClone`.`Artistas` art
INNER JOIN `SpotifyClone`.`Albuns` alb ON alb.artista_id = art.artista_id
WHERE art.artista LIKE artista
ORDER BY `album` ASC;
END $$

DELIMITER ;
