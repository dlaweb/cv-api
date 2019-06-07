-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `cv`;
CREATE TABLE `cv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `cv` (`id`, `name`, `firstName`, `mail`, `phone`, `description`, `createdAt`, `updatedAt`) VALUES
(1,	'LABBE',	'David',	'contact@davidlabbe.fr',	782424826,	NULL,	'2019-06-07 22:51:08',	'2019-06-07 22:51:08');

DROP TABLE IF EXISTS `cv_competences`;
CREATE TABLE `cv_competences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `cvExperienceId` int(11) DEFAULT NULL,
  `cvFormationId` int(11) DEFAULT NULL,
  `cvId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cvExperienceId` (`cvExperienceId`),
  KEY `cvFormationId` (`cvFormationId`),
  KEY `cvId` (`cvId`),
  CONSTRAINT `cv_competences_ibfk_1` FOREIGN KEY (`cvExperienceId`) REFERENCES `cv_experience` (`id`),
  CONSTRAINT `cv_competences_ibfk_2` FOREIGN KEY (`cvFormationId`) REFERENCES `cv_formation` (`id`),
  CONSTRAINT `cv_competences_ibfk_3` FOREIGN KEY (`cvId`) REFERENCES `cv` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


DROP TABLE IF EXISTS `cv_experience`;
CREATE TABLE `cv_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cvId` int(11) NOT NULL,
  `from` datetime NOT NULL,
  `to` datetime NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cvId` (`cvId`),
  CONSTRAINT `cv_experience_ibfk_1` FOREIGN KEY (`cvId`) REFERENCES `cv` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


DROP TABLE IF EXISTS `cv_formation`;
CREATE TABLE `cv_formation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cvId` int(11) NOT NULL,
  `from` datetime NOT NULL,
  `to` datetime NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cvId` (`cvId`),
  CONSTRAINT `cv_formation_ibfk_1` FOREIGN KEY (`cvId`) REFERENCES `cv` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


DROP TABLE IF EXISTS `cv_langage`;
CREATE TABLE `cv_langage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `langage` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `cvId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cvId` (`cvId`),
  CONSTRAINT `cv_langage_ibfk_1` FOREIGN KEY (`cvId`) REFERENCES `cv` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- 2019-06-07 20:54:57