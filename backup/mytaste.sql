-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: mytaste
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `item_tag`
--

DROP TABLE IF EXISTS `item_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_tag` (
  `itemId` int unsigned NOT NULL,
  `tagId` int unsigned NOT NULL,
  PRIMARY KEY (`itemId`,`tagId`),
  KEY `tagId` (`tagId`,`itemId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_tag`
--

LOCK TABLES `item_tag` WRITE;
/*!40000 ALTER TABLE `item_tag` DISABLE KEYS */;
INSERT INTO `item_tag` VALUES (1,9),(2,1),(2,3),(3,2),(4,4),(5,5),(6,4),(7,4),(8,6),(9,4),(10,5),(11,7),(13,5),(14,8),(15,10),(16,11),(16,12),(17,4),(18,9),(20,4),(21,13),(22,14),(22,15),(22,16),(24,4),(26,17),(27,4),(28,8),(29,5),(30,4),(32,9),(33,18),(34,9),(35,9),(35,19),(36,9),(37,4),(51,20),(52,4),(54,4),(55,21),(56,22),(57,21),(58,24),(58,25),(59,11),(59,20),(59,26),(60,27),(60,28),(60,29),(61,30),(62,4),(63,30),(64,21),(65,21),(66,30),(67,30);
/*!40000 ALTER TABLE `item_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `itemId` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `imageURL` varchar(255) DEFAULT NULL,
  `creator` varchar(100) DEFAULT NULL,
  `averageRating` double DEFAULT NULL,
  `averageRatingCount` int DEFAULT NULL,
  `createdLegacy` varchar(100) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`itemId`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Stobi flips','2aba4f73-bca3-42ca-9409-89870c6e6fa8.jpg','perbjester@gmail.com',2.5,2,'17.06.2021','2024-01-21 00:04:31',NULL),(2,'Grønnsaksuppe Rema1000','6e7aa98f-3f7c-4bb9-871c-409b98043a22.jpg','perbjester@gmail.com',2,1,'12.10.2020','2024-01-21 00:04:31',NULL),(3,'Pizza Grandiosa','072500d8-85c5-4ebb-a461-d9db2773394e.jpg','nraanes2@gmail.com',3,3,'06.10.2020','2024-01-21 00:04:31',NULL),(4,'Greenland Garada \"Rice balls Cuttlefish flavoured\" ','54dd01be-10f8-4a91-b0f2-ce9a3328cf59.jpg','perbjester@gmail.com',3.5,4,'05.10.2020','2024-01-21 00:04:31',NULL),(5,'Tilt Carolina style mustard sauce','d5124583-4be7-4afc-b890-1f20545e0f0d.jpg','perbjester@gmail.com',2,1,'18.05.2021','2024-01-21 00:04:31',NULL),(6,'Cheetos Pandilla','16f1d477-2059-40b3-854f-bd7f1fdbea6d.jpg','perbjester@gmail.com',3,1,'26.02.2020','2024-01-21 00:04:31',NULL),(7,'Bondens havsalt og balsamico','ed697750-31c1-4d9e-8039-f0efa0238a22.jpg','perbjester@gmail.com',3,1,'11.10.2021','2024-01-21 00:04:31',NULL),(8,'Delikat julesild','397b8cb8-d589-48e6-9ef9-d1f4bb3760e6.jpg','perbjester@gmail.com',2,1,'17.02.2020','2024-01-21 00:04:31',NULL),(9,'Maui onion style potato chips. Sticky fingers','78174c7d-95a1-4ca1-a05d-e6bd2a3b9174.jpg','perbjester@gmail.com',3,2,'08.12.2020','2024-01-21 00:04:31',NULL),(10,'Pataks Jalfrezi curry sauce','a0fc1cbc-d302-44b0-b7c8-ac4a255c347a.jpg','perbjester@gmail.com',2,1,'21.11.2020','2024-01-21 00:04:31',NULL),(11,'Gilde karbonader','bdefa625-863d-424c-9f0c-0e76a2befa1c.jpg','perbjester@gmail.com',1,1,'13.02.2020','2024-01-21 00:04:31',NULL),(12,'Poppa quinoa chips crème fraiche','00eb41d5-5c8d-494d-9a38-08c027a5b691.jpg','perbjester@gmail.com',3,1,'09.10.2020','2024-01-21 00:04:31',NULL),(13,'Idun honey mustard','1996a870-6518-4953-8521-d1811d9834cf.jpg','perbjester@gmail.com',3,1,'18.05.2021','2024-01-21 00:04:31',NULL),(14,'Nesquik sjokolade','fa962765-cfeb-4c20-b078-3cd750ebb66c.jpg','perbjester@gmail.com',3,2,'30-.01.2020','2024-01-21 00:04:31',NULL),(15,'Fun light strawberry passion','90da5f6e-4d2f-4166-a36a-34e7a0476405.jpg','perbjester@gmail.com',2,2,'09.10.2020','2024-01-21 00:04:31',NULL),(16,'Rema proteinpudding, Vanilje','ccae8026-ec49-4763-a717-580bb1c55e30.jpg','perbjester@gmail.com',4,1,'20.02.2020','2024-01-21 00:04:31',NULL),(17,'Sørlandschips. Champagne med stjernedryss','58a26bac-619e-4ce4-80e7-267eafae7b65.jpg','perbjester@gmail.com',2,1,'06.11.2020','2024-01-21 00:04:31',NULL),(18,'Cheetos xtra flamin hot (Mexico import) ','3e3167d1-0f45-4f61-a648-4ae62fb35f17.jpg','perbjester@gmail.com',5,1,'30.10.2020','2024-01-21 00:04:31',NULL),(19,'Coop linsechips med havsalt','0e230f16-be0f-4611-8e1c-97ed583aefd8.jpg','perbjester@gmail.com',2,1,'09.10.2020','2024-01-21 00:04:31',NULL),(20,'Tyrells sea salt and cider vinegar','4bc79bf6-33d6-4885-9a56-3566bea45d24.jpg','perbjester@gmail.com',4,2,'02.09.2021','2024-01-21 00:04:31',NULL),(21,'Meny leverpostei','70fb1eb1-c8be-40f6-925e-dbe350709d00.jpg','perbjester@gmail.com',3,1,'','2024-01-21 00:04:31',NULL),(22,'Flying Goose Sriracha Mayo Sauce','5e0df5a7-6274-477f-ac61-29f1cb2aa482.jpg','perbjester@gmail.com',5,1,'13.02.2020','2024-01-21 00:04:31',NULL),(23,'Maarud Cashewmiks','1040942c-8692-4146-856c-ee7f7f90cce6.jpg','perbjester@gmail.com',5,1,'30.01.2022','2024-01-21 00:04:31',NULL),(24,'Cheetos crunchos sweet chili','59e03c28-3f79-4faf-92b0-695c50ad9fd7.jpg','perbjester@gmail.com',2,1,'30.01.2022','2024-01-21 00:04:31',NULL),(25,'Kiddylicious bringebær Crispy fruktfisk','9764b66d-b702-4461-bf14-670878120736.jpg','perbjester@gmail.com',3,2,'29.01.2020','2024-01-21 00:04:31',NULL),(26,'Maarud Potetgull, Sourcream & Onion','07012d2e-46c3-4db3-9aea-32b01cabd530.jpg','perbjester@gmail.com',4,1,'02.03.2020','2024-01-21 00:04:31',NULL),(27,'Nice flerkornchips Jalaoeno','dd769483-51fb-468e-b108-871e83566e38.jpg','perbjester@gmail.com',4,3,'09.10.2020','2024-01-21 00:04:31',NULL),(28,'Sweet switch Belgia Milk chocolate','2a6e6b61-c7ed-4021-a149-0d3cdfd4eb99.jpg','perbjester@gmail.com',2,1,'19.02.2020','2024-01-21 00:04:31',NULL),(29,'Pataks korma','7aaff852-1d14-4ab2-87e2-7cb7535538da.jpg','perbjester@gmail.com',3,1,'12.10.2020','2024-01-21 00:04:31',NULL),(30,'Jans Sea Salt Sweet potato chips','ad53f228-be78-4034-a868-aaa41d1649b9.jpg','perbjester@gmail.com',3,1,'27.02.2020','2024-01-21 00:04:31',NULL),(31,'REMA chilisnacks ferdig preppa','6dfdd271-03f2-4e3e-88f1-b8d488824155.jpg','perbjester@gmail.com',2,1,'20.02.2021','2024-01-21 00:04:31',NULL),(32,'Tesco Cheese balls','2fb8ae34-fde2-44c8-8a2a-3beb407c49bc.jpg','perbjester@gmail.com',5,2,'24.01.2020','2024-01-21 00:04:31',NULL),(33,'Snyders og hanover Pretzel ','0ac5ef34-efa6-47c1-a2b4-be719f834652.jpg','perbjester@gmail.com',4.5,2,'31.01.2020','2024-01-21 00:04:31',NULL),(34,'Cheetos spirals','615dc255-9c5a-4e9d-ab04-67aaf27b41b2.jpg','perbjester@gmail.com',2,2,'','2024-01-21 00:04:31',NULL),(35,'Captain Chrup','f0ac81fd-12df-457a-8d7a-9319e7d518d6.jpg','perbjester@gmail.com',1,2,'25.01.2020','2024-01-21 00:04:31',NULL),(36,'Rin-Bee cheese sticks ','bf3b4bd0-2fee-4d77-8bbc-dd507a531d0d.jpg','perbjester@gmail.com',4,2,'18.05.2021','2024-01-21 00:04:31',NULL),(37,'Greenland Garada Nugget \"chicken spicy\" ','a02cd235-3235-4f77-be29-81a0a398c2dc.jpg','perbjester@gmail.com',3.5,3,'09.10.2020','2024-01-21 00:04:31',NULL),(54,'Takis Dragon Sweet Chilli','0a231bc0-2587-4e94-ac8a-1b25569a4a76.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-08-31 12:52:23','Kjøpt på Normal'),(55,'Rhino Red Rage','f1067758-168f-4741-868b-5eb0d04ac55c.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-08-31 14:18:25','Kjøpt på holdbart. Lite info på boksen'),(56,'Lady Boba Taro Bubble Tea','3957b668-6b69-4d61-9a85-4d284ba1ef7b.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-08-31 14:19:17','Kjøpt på holdbart'),(57,'TØRST Hunter Taylor','6276e02d-2e9f-4a4f-a7bc-81638ad0d6e4.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-08-31 14:19:47','Grapefrukt. Kjøpt på Sport Outlet'),(58,'Abba Tunfiskpostei','f6baae09-df33-4a42-9303-2194e27379af.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-09-08 11:09:41',''),(59,'Yt Banan og Jordbær','2e9fcd53-f14f-43bd-b963-04e922eb2e6c.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-09-11 19:50:56',''),(61,'Mega Force','e5e4d634-c354-48e8-bd48-00ca7f0d2613.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-09-14 09:49:08','Energidrikk.  Kjøpt på Storlien. '),(62,'La La Tempura Shrimp Flavoured Snack','6e06f5e6-d0bd-4b41-98dd-510ebea4df3a.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-09-14 17:46:24','Kjøpt på mango'),(63,'Monster Juiced Bad Apple','4403ace7-44b9-491d-9f89-3d73066d70ce.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-09-19 14:20:03',''),(64,'PowerKing Lemon Lime','8819bf59-3e10-4bd8-98f2-b034f10014fa.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-09-21 09:29:29','Kjøpt på Storlien '),(65,'Red Bull Iced Cotton Candy','a7443683-1857-4976-88a5-0e25155d63d3.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-09-22 21:25:23','Winter edition'),(66,'TØRST Tropical Mango','39db83ee-bc9b-4b4a-9af2-c3f51815bbb4.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-09-26 18:21:17','Kjøpt på holdbart'),(67,'Rhino Blue Berzerker','758d1254-4832-4dfc-8a6e-3a9d8a951923.jpg','perbjester@gmail.com',NULL,NULL,NULL,'2024-10-16 07:38:39','');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `reviewId` int unsigned NOT NULL AUTO_INCREMENT,
  `itemId` int unsigned NOT NULL,
  `user` varchar(255) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`reviewId`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,'perbjester@gmail.com','Litt papp. Litt off-taste',2),(2,1,'nraanes2@gmail.com','',3),(3,2,'perbjester@gmail.com','Slimete, litt tyggemotstand. Ikke god smak',2),(4,6,'perbjester@gmail.com','Litt tam, grei nok. Smaker mye som kims bamser. Litt sur i ettersmaken.',3),(5,7,'perbjester@gmail.com','Lite eddiksmak. Ganske kjedelig.',3),(6,8,'perbjester@gmail.com','Smaker bare veldig salt. Lite sødme eller andre smaker. ',2),(7,3,'perbjester@gmail.com','En klassiker på middagsfatet i de tusen hjem',2),(8,3,'nraanes2@gmail.com','',5),(9,3,'emma.olivia.sindre@gmail.com','',2),(10,9,'perbjester@gmail.com','Mye løk. Søt. Bra til dip? ',3),(11,9,'gabriel.gregor@gmail.com','',3),(12,4,'perbjester@gmail.com','Veldig søte, litt chili, bare antydning til sjømstsmak. Helt sprø, ikke harde.',4),(13,4,'nraanes2@gmail.com','',3),(14,4,'stine.bechmann@gmail.com','',2),(15,4,'gabriel.gregor@gmail.com','',4),(16,5,'perbjester@gmail.com','Litt off-taste. Gurkemeiesmaken? ',2),(17,10,'perbjester@gmail.com','For sur. Funket med ekstra salt og sødme',2),(18,11,'perbjester@gmail.com','Ingen likte. Kjenpesterk lukt. Tett, slintrete konsistens. Nesten litt stram smak.',1),(19,12,'perbjester@gmail.com','',3),(20,13,'perbjester@gmail.com','God med skinke. Ikke like god alene',3),(21,14,'perbjester@gmail.com','Vel søt melkesjokolade med ekstra søtt hvit sjokoladefyll. Veldig lik kinder-sjokolade.',4),(22,14,'gabriel.gregor@gmail.com','',2),(23,16,'perbjester@gmail.com','Godteri. Deilig konsistens. God smak  litt emmen ettersmak. 15g protein pr boks. 9g karb. (Konsistensen har blitt hardere ved senere kjøp)',4),(24,15,'perbjester@gmail.com','',2),(25,15,'emma.olivia.sindre@gmail.com','',2),(26,17,'perbjester@gmail.com','Smaker fyll. Med glitter',2),(27,18,'perbjester@gmail.com',' Veldig sterke, crunch og fargesterke. Eneste minus at msg-smaken trenger litt igjennom',5),(28,19,'perbjester@gmail.com','Tørr, smakløs. Smaker linser',2),(29,20,'perbjester@gmail.com','',3),(30,20,'gabriel.gregor@gmail.com','',5),(31,21,'perbjester@gmail.com','God, men vel tørr. Ikke så mye smak.',3),(32,22,'perbjester@gmail.com','Perfekt blanding av chilisaus og majones. Funker på det meste. ',5),(33,24,'perbjester@gmail.com','Sprø, litt vel msg- ikke spes god',2),(34,23,'perbjester@gmail.com','Søtt og salt og knas. God honningsmak. Myyye kalorier ',5),(35,26,'perbjester@gmail.com','God, samtidig ikke masse smak. Laget for massekonsum. Lett å spise mye, perfekt for dip.',4),(36,25,'perbjester@gmail.com','Ganske god. Litt emmen ettersmak. Godt med knas. Smaker litt tykningsmiddel',3),(37,25,'nraanes2@gmail.com','',3),(38,27,'perbjester@gmail.com','Sterke. Bra crunch. Mye smak',4),(39,27,'nraanes2@gmail.com','',4),(40,27,'gabriel.gregor@gmail.com','',4),(41,28,'perbjester@gmail.com','Tørr, lite smak. Hjalp neppe at den var gått ut på dato. Kjøpt på Holdbart',2),(42,29,'perbjester@gmail.com','Grei nok. Litt mye konserveringssmak',3),(43,31,'perbjester@gmail.com','Sprø men feil smak',2),(44,30,'perbjester@gmail.com','God men kjedelig . Lite smak. Spesielt mangler den salt. Bra crunch.',3),(45,32,'perbjester@gmail.com','Veldig sprø. God ostesmak. Ikke for sure. God maissmak',5),(46,32,'nraanes2@gmail.com','',5),(47,33,'perbjester@gmail.com','Bra crunch. Bra styrke. God smak. Litt fettete. God eddiksmak. Mye smak',5),(48,33,'nraanes2@gmail.com','',4),(49,34,'perbjester@gmail.com','Lite crunch. Fin form. Lite smak',2),(50,34,'emma.olivia.sindre@gmail.com','',2),(51,35,'perbjester@gmail.com','Tørt, smakløs. Kanskje fin til dip. Kun mais. Ikke veldig sprø. Som Tempur. Ikke ost (selvsagt)',1),(52,35,'nraanes2@gmail.com','',1),(53,36,'perbjester@gmail.com','Ikke så salt. Heller ikke sterk ostesmak. Vanedannende ',4),(54,36,'nraanes2@gmail.com','',4),(55,37,'perbjester@gmail.com','Veldig søt, ikke mye smak. Bra crunch.',4),(56,37,'nraanes2@gmail.com','',3),(57,37,'gabriel.gregor@gmail.com','',3),(58,51,'perbjester@gmail.com','nope',1),(59,52,'perbjester@gmail.com','Litt søte, passe sterke og god crunch',4),(60,53,'perbjester@gmail.com','',0),(61,54,'perbjester@gmail.com','Søt, passe sterk, bra crunch',4),(62,55,'perbjester@gmail.com','For søt og fake smak. Blanding av jordbær og andre bær',2),(63,56,'perbjester@gmail.com','Veldig god drikke. Men kulene hadde virkelig nasty konsistens',4),(66,57,'perbjester@gmail.com','perfekt balansert',5),(68,59,'perbjester@gmail.com','Smakte mest bananmelk nesen nasty bismak',2),(69,60,'perbjester@gmail.com','fsmndklfgmnds',3),(70,58,'perbjester@gmail.com','Perfekt tunfiskpålegg',5),(71,61,'perbjester@gmail.com','Ubestemmelig bærsmak.  Alt for søt, men billig.',3),(72,62,'perbjester@gmail.com','Rekechips med god smak',5),(73,63,'perbjester@gmail.com','Smaker som søt cider. ',5),(74,64,'perbjester@gmail.com','Ikke balansert.  Føles for søt og for mye lime',3),(75,65,'perbjester@gmail.com','Forferdelig.  Men klarte å drikke den opp.  Tenkte først kirsebær, men ikke like vond som Prime',2),(76,66,'perbjester@gmail.com','Vondeste hittil.  Nesten bitter.  Minnet ikke om mango ',1),(77,67,'perbjester@gmail.com','Blåbærsmak? Smakte fun light ',2);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `tagId` int unsigned NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  PRIMARY KEY (`tagId`),
  UNIQUE KEY `tag` (`tag`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (22,'bubble tea'),(14,'chili'),(16,'chilisaus'),(4,'chips'),(20,'drikke'),(30,'Energidrikk'),(21,'energidrikke'),(23,'energidrikke2'),(1,'ferdigrett'),(29,'gd'),(28,'gdf'),(27,'gdfgdf'),(7,'karbonader'),(13,'leverpostei'),(19,'mais'),(26,'melk'),(9,'ostepop'),(25,'pålegg'),(2,'pizza'),(17,'potetgull'),(11,'protein'),(12,'proteinpudding'),(10,'saft'),(5,'saus'),(6,'sild'),(8,'sjokolade'),(18,'snacks'),(15,'sriracha'),(3,'suppe'),(24,'Tunfisk');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-16 18:42:14
