CREATE VIEW top_3_artistas AS
SELECT a.artista AS 'artista',
(SELECT COUNT(s.usuario_id)) AS 'seguidores'
FROM `SpotifyClone`.`usuario_seguindo_artistas` s
INNER JOIN `SpotifyClone`.`Artistas` a ON a.artista_id = s.artista_id
INNER JOIN `SpotifyClone`.`Usuarios` u ON u.usuario_id = s.usuario_id
GROUP BY `artista`
ORDER BY `seguidores` DESC, `artista` ASC
LIMIT 3;
