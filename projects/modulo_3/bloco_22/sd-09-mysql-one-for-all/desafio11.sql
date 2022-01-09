CREATE VIEW  cancoes_premium AS
SELECT
c.cancao AS 'nome',
(SELECT COUNT(h.usuario_id)) AS 'reproducoes'
FROM `SpotifyClone`.`usuario_historico_cancoes` h
INNER JOIN `SpotifyClone`.`Cancoes` c ON c.cancao_id = h.cancao_id
INNER JOIN `SpotifyClone`.`Usuarios` u ON u.usuario_id = h.usuario_id
INNER JOIN `SpotifyClone`.`Planos` p ON p.plano_id = u.plano_id
WHERE p.plano LIKE 'Familiar' OR p.plano LIKE 'Universitario'
GROUP BY `nome`
ORDER BY `nome` ASC;
