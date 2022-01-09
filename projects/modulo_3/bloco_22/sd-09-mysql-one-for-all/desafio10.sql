DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantidade_musicas_no_historico INT;
SELECT COUNT(*)
FROM `SpotifyClone`.`usuario_historico_cancoes` h
INNER JOIN `SpotifyClone`.`Cancoes` c ON c.cancao_id = h.cancao_id
INNER JOIN `SpotifyClone`.`Usuarios` u ON u.usuario_id = h.usuario_id
WHERE h.usuario_id = id
INTO quantidade_musicas_no_historico;
RETURN quantidade_musicas_no_historico;
END $$

DELIMITER ;
