DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON `SpotifyClone`.`Usuarios`
FOR EACH ROW
BEGIN
DELETE FROM `SpotifyClone`.`usuario_seguindo_artistas` WHERE usuario_id = OLD.usuario_id;
DELETE FROM `SpotifyClone`.`usuario_historico_cancoes` WHERE usuario_id = OLD.usuario_id;
END $$

DELIMITER ;
