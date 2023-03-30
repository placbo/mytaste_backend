DROP TABLE IF EXISTS `items`;

CREATE TABLE
    `items` (
        `id` int unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) NOT NULL,
        `imageURL` varchar(255) DEFAULT NULL,
        `creator` varchar(100) DEFAULT NULL,
        `averageRating` double DEFAULT NULL,
        `averageRatingCount` int DEFAULT NULL,
        `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 61 DEFAULT CHARSET = utf8mb3;