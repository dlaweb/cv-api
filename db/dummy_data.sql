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
(1,	'LABBE',	'David',	'contact@davidlabbe.fr',	782424826,	NULL,	'2019-06-07 17:59:15',	'2019-06-07 17:59:15');

DROP TABLE IF EXISTS `cv_competences`;
CREATE TABLE `cv_competences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `cvExperienceId` int(11) DEFAULT NULL,
  `cvFormationId` int(11) DEFAULT NULL,
  `cvId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cvExperienceId` (`cvExperienceId`),
  KEY `cvFormationId` (`cvFormationId`),
  KEY `cvId` (`cvId`),
  CONSTRAINT `cv_competences_ibfk_1` FOREIGN KEY (`cvExperienceId`) REFERENCES `cv_experience` (`id`),
  CONSTRAINT `cv_competences_ibfk_2` FOREIGN KEY (`cvFormationId`) REFERENCES `cv_formation` (`id`),
  CONSTRAINT `cv_competences_ibfk_3` FOREIGN KEY (`cvId`) REFERENCES `cv` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `cv_competences` (`id`, `name`, `level`, `cvExperienceId`, `cvFormationId`, `cvId`) VALUES
(1,	'php',	3,	1,	NULL,	1),
(2,	'JS',	NULL,	NULL,	1,	1);

DROP TABLE IF EXISTS `cv_experience`;
CREATE TABLE `cv_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cvId` int(11) NOT NULL,
  `from` datetime NOT NULL,
  `to` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cvId` (`cvId`),
  CONSTRAINT `cv_experience_ibfk_1` FOREIGN KEY (`cvId`) REFERENCES `cv` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `cv_experience` (`id`, `company`, `cvId`, `from`, `to`) VALUES
(1,	'Zip',	1,	'2017-12-04 00:00:00',	'2019-06-28 00:00:00');

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

INSERT INTO `cv_formation` (`id`, `school`, `cvId`, `from`, `to`, `createdAt`, `updatedAt`) VALUES
(1,	'WDS',	1,	'2017-09-12 00:00:00',	'2019-06-28 00:00:00',	'2019-06-07 18:00:40',	'2019-06-07 18:00:40'),
(2,	'test post ecole',	1,	'2002-02-01 23:00:00',	'2003-03-02 23:00:00',	'2019-06-07 16:01:29',	'2019-06-07 16:01:29');

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


INSERT INTO `SequelizeMeta` (`name`) VALUES
('20190603212651-create-cv.js'),
('20190604171926-create-experience.js'),
('20190604193239-create-formation.js'),
('20190604203309-create-competences.js'),
('20190604213015-create-langage.js');

-- 2019-06-07 16:01:56