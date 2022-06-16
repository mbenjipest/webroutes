SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `hash` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `salt` varchar(16) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

INSERT INTO `user` (`user_id`, `hash`, `salt`, `username`) VALUES
(1,	'fffffffff057aaf653a6fa205d9c13662f008d0c3d9ad4d71d5ae639d75f6f280938a8dd3',	'1234567890123456',	'mbenji');

DROP TABLE IF EXISTS `user_endpoints`;
CREATE TABLE `user_endpoint` (
  `user_id` bigint unsigned NOT NULL,
  `endpoint` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_endpoints_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

INSERT INTO `user_endpoints` (`user_id`, `endpoint`) VALUES
(1,	'*/*');