CREATE VIEW historico_reproducao_usuarios AS
SELECT u.usuario AS 'usuario', c.cancao AS 'nome'
FROM `SpotifyClone`.`usuario_historico_cancoes` h
INNER JOIN `SpotifyClone`.`Cancoes` c ON c.cancao_id = h.cancao_id
INNER JOIN `SpotifyClone`.`Usuarios` u ON u.usuario_id = h.usuario_id
ORDER BY u.usuario ASC, c.cancao ASC;
