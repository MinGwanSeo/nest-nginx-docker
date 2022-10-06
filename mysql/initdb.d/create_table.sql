DROP TABLE IF EXISTS `migrations`;
SET character_set_client = utf8mb4 ;

CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `screenshot`;
SET character_set_client = utf8mb4 ;

CREATE TABLE `screenshot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vid` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `vTime` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;