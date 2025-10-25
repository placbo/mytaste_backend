-- Active: 1705783982179@@localhost@3306@mytaste
DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
    `itemId` int UNSIGNED NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `imageURL` varchar(255) DEFAULT NULL, `creator` varchar(100) DEFAULT NULL, `averageRating` double DEFAULT NULL, `averageRatingCount` int DEFAULT NULL, `createdLegacy` varchar(100) DEFAULT NULL, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`itemId`)
);

DROP TABLE IF EXISTS `item_tag`;

CREATE TABLE `item_tag` (
    `itemId` INT UNSIGNED NOT NULL, `tagId` INT UNSIGNED NOT NULL, PRIMARY KEY (`itemId`, `tagId`), -- When starting with user
    INDEX (`tagId`, `itemId`) -- When starting with location
);

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
    `tagId` int unsigned NOT NULL AUTO_INCREMENT, `tag` varchar(255) NOT NULL, PRIMARY KEY (`tagId`)
);

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
    `reviewId` int unsigned NOT NULL AUTO_INCREMENT, `itemId` int unsigned NOT NULL, `user` varchar(255) NOT NULL, `userDisplayName` varchar(255) DEFAULT NULL, `comment` varchar(1000) NOT NULL, `rating` int DEFAULT NULL, PRIMARY KEY (`reviewId`)
);