CREATE VIEW perfil_artistas AS
SELECT
art.artista AS 'artista',
alb.album AS 'album',
(SELECT COUNT(s.usuario_id)) AS 'seguidores'
FROM `SpotifyClone`.`usuario_seguindo_artistas` s
INNER JOIN `SpotifyClone`.`Artistas` art ON art.artista_id = s.artista_id
INNER JOIN `SpotifyClone`.`Usuarios` u ON u.usuario_id = s.usuario_id
INNER JOIN `SpotifyClone`.`Albuns` alb ON alb.artista_id = art.artista_id
GROUP BY `artista`, `album`
ORDER BY `seguidores` DESC, `artista` ASC, `album` ASC;
