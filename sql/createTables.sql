-- Active: 1679425212084@@192.168.0.90@3306@mytaste

DROP TABLE IF EXISTS `items`;

CREATE TABLE
    `items` (
        `itemId` int unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) NOT NULL,
        `imageURL` varchar(255) DEFAULT NULL,
        `creator` varchar(100) DEFAULT NULL,
        `averageRating` double DEFAULT NULL,
        `averageRatingCount` int DEFAULT NULL,
        `createdLegacy` varchar(100) DEFAULT NULL,
        `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`itemId`)
    );

DROP TABLE IF EXISTS `tags`;

CREATE TABLE
    `tags` (
        `tagId` int unsigned NOT NULL AUTO_INCREMENT,
        `itemId` int unsigned NOT NULL,
        `tag` varchar(255) NOT NULL,
        PRIMARY KEY (`tagId`)
    );

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE
    `reviews` (
        `reviewId` int unsigned NOT NULL AUTO_INCREMENT,
        `itemId` int unsigned NOT NULL,
        `user` varchar(255) NOT NULL,
        `comment` varchar(1000) NOT NULL,
        `rating` int DEFAULT NULL,
        PRIMARY KEY (`reviewId`)
    );