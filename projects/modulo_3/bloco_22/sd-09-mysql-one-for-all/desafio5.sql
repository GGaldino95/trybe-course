CREATE VIEW top_2_hits_do_momento AS
SELECT c.cancao AS 'cancao',
(SELECT COUNT(h.cancao_id)) AS 'reproducoes'
FROM `SpotifyClone`.`usuario_historico_cancoes` h
INNER JOIN `SpotifyClone`.`Usuarios` u ON u.usuario_id = h.usuario_id
INNER JOIN `SpotifyClone`.`Cancoes` c ON c.cancao_id = h.cancao_id
GROUP BY `cancao`
ORDER BY `reproducoes` DESC, `cancao` ASC
LIMIT 2;
