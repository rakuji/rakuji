-- Adminer 4.8.1 MySQL 8.0.28 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `best_meal_vote`;
CREATE TABLE `best_meal_vote` (
  `id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '餐點編號',
  `men_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '餐點名稱',
  `men_title` varchar(10) NOT NULL COMMENT '餐點標題',
  `men_desc` varchar(30) NOT NULL COMMENT '餐點內容',
  `men_img` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '餐點照片',
  `time` datetime NOT NULL COMMENT '時間',
  KEY `id` (`id`),
  CONSTRAINT `best_meal_vote_ibfk_1` FOREIGN KEY (`id`) REFERENCES `product` (`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='最佳餐點票選資料表(待確認項目)';


DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '訂位編號',
  `member_id` int NOT NULL COMMENT '會員編號',
  `booking_date` date NOT NULL COMMENT '訂位日期',
  `people_adult` int NOT NULL COMMENT '人數(大人)',
  `people_kid` int NOT NULL COMMENT '人數(小孩)',
  `meal_time` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用餐時段',
  `booking_time` varchar(5) NOT NULL COMMENT '用餐時間',
  `statue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '備註',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '創建時間',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `booking` (`id`, `member_id`, `booking_date`, `people_adult`, `people_kid`, `meal_time`, `booking_time`, `statue`, `created_at`) VALUES
(58,	1,	'2022-03-26',	2,	0,	'中午',	'12:00',	'慶生',	'2022-03-21 03:02:37'),
(59,	2,	'2022-03-23',	4,	0,	'晚上',	'19:00',	'哈哈哈哈哈哈',	'2022-03-21 03:03:49'),
(60,	3,	'2022-03-31',	2,	2,	'晚上',	'18:30',	'需要兒童座椅',	'2022-03-21 03:53:05'),
(63,	1,	'2022-03-31',	10,	10,	'晚上',	'19:00',	'普渡拜拜',	'2022-03-21 08:45:52'),
(64,	9,	'2022-03-26',	2,	1,	'晚上',	'18:30',	'你好',	'2022-03-24 05:22:55');

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '編號',
  `member_id` int NOT NULL COMMENT '會員編號',
  `product_id` varchar(10) NOT NULL COMMENT '商品編號',
  `product_img` varchar(255) NOT NULL COMMENT '商品圖片',
  `product` varchar(255) NOT NULL COMMENT '商品名稱',
  `quantity` int NOT NULL COMMENT '餐點數量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `cart` (`id`, `member_id`, `product_id`, `product_img`, `product`, `quantity`) VALUES
(1,	5,	'MB-001',	'',	'黃金豬排定食',	10),
(2,	8,	'MB-002',	'',	'唐揚雞歐姆蛋咖哩飯',	5),
(3,	4,	'PF-002',	'',	'骰子牛調理包',	3),
(4,	4,	'MA-001',	'',	'日式溏心蛋沙拉',	6),
(5,	4,	'MB-001',	'',	'黃金豬排定食',	9);

DROP TABLE IF EXISTS `creative_recipes`;
CREATE TABLE `creative_recipes` (
  `cr_id` int NOT NULL AUTO_INCREMENT,
  `cr_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '料理名稱',
  `match_id` int NOT NULL COMMENT '食材搭配ID	',
  `photo_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '料理照片',
  `cm_text` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '調理方法',
  `member_id` int NOT NULL COMMENT '會員系統ID',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '創建日期',
  PRIMARY KEY (`cr_id`),
  KEY `match_id` (`match_id`),
  KEY `member_id` (`member_id`),
  CONSTRAINT `creative_recipes_ibfk_1` FOREIGN KEY (`match_id`) REFERENCES `recipes_match` (`match_id`),
  CONSTRAINT `creative_recipes_ibfk_2` FOREIGN KEY (`member_id`) REFERENCES `member` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='創意食譜';

INSERT INTO `creative_recipes` (`cr_id`, `cr_name`, `match_id`, `photo_id`, `cm_text`, `member_id`, `created_at`) VALUES
(1,	'蕃茄燉牛楠 ',	1,	'https://tokyo-kitchen.icook.network/uploads/recipe/cover/264257/3d25ad22c8813624.jpg',	'1',	1,	'2022-03-07 08:42:16'),
(2,	'起司炸雞排 ',	2,	'https://cdn2.ettoday.net/images/5155/5155718.jpg',	'2',	1,	'2022-03-07 08:42:33'),
(3,	'日式炸豬排 ',	3,	'https://img.ltn.com.tw/Upload/food/page/2016/11/25/161125-4960-000-4WQJH.jpg',	'3',	3,	'2022-03-10 04:51:59'),
(4,	'宮保雞丁 ',	4,	'https://d3l76hx23vw40a.cloudfront.net/recipe/gy47-040.jpg',	'4',	5,	'2022-03-10 04:51:59'),
(7,	'骰子牛調理包',	3,	'https://b.ecimg.tw/items/DBCP2QA900BGGYD/000002_1623402378.jpg',	'3',	3,	'2022-03-16 02:52:44'),
(11,	'唐揚雞歐姆蛋咖哩飯',	2,	'https://live.staticflickr.com/65535/51401244071_de93f10122_c.jpg',	'2',	1,	'2022-03-16 02:54:31'),
(13,	'黃金豬排定食',	1,	'https://lh3.googleusercontent.com/VAOVC9iEn462At0yjVGMeGedCqqxkYHll5qwCQZEeV-nnQfW5vObieTlc0VZJPq-dasXdmb7oe3pHuY=w800',	'1',	1,	'2022-03-16 02:57:31'),
(14,	'日式溏心蛋沙拉',	1,	'https://tokyo-kitchen.icook.network/uploads/recipe/cover/343417/b98e322e1bb51124.jpg',	'1',	1,	'2022-03-16 05:16:44'),
(17,	'12',	1,	'1',	'1',	1,	'2022-03-18 08:30:45'),
(20,	'全麥漢堡麵包佐香料豬漢堡排',	1,	'https://img-global.cpcdn.com/recipes/528b18e6a26a05f7/680x482cq70/%E5%85%A8%E9%BA%A5%E6%BC%A2%E5%A0%A1%E9%BA%B5%E5%8C%85%E4%BD%90%E9%A6%99%E6%96%99%E8%B1%AC%E6%BC%A2%E5%A0%A1%E6%8E%92-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp',	'1',	1,	'2022-03-21 06:03:05'),
(21,	'烏龍麵',	1,	'https://567324-1830343-7-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/%E7%83%8F%E9%BE%8D%E9%BA%B5.png',	'1',	1,	'2022-03-21 06:07:34'),
(24,	'2',	2,	'2',	'2',	2,	'2022-03-21 06:30:47'),
(26,	'2',	2,	'2',	'1',	1,	'2022-03-21 06:30:56');

DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments` (
  `department_id` int unsigned NOT NULL,
  `department_name` varchar(30) NOT NULL,
  PRIMARY KEY (`department_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `departments` (`department_id`, `department_name`) VALUES
(1,	'外場'),
(2,	'內場'),
(3,	'管理');

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `employee_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(25) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `hire_date` date NOT NULL,
  `job_id` varchar(10) NOT NULL,
  `salary` int NOT NULL,
  `department_id` int unsigned DEFAULT NULL,
  `birthday` date NOT NULL,
  `age` char(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `education` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `job_id` (`job_id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`job_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `employees_ibfk_2` FOREIGN KEY (`department_id`) REFERENCES `departments` (`department_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `employees` (`employee_id`, `name`, `email`, `phone_number`, `hire_date`, `job_id`, `salary`, `department_id`, `birthday`, `age`, `education`, `address`, `created_at`) VALUES
(8,	'阮月嬌',	'da123@gmail.com',	'0955888999',	'2022-03-21',	'2',	1,	2,	'1992-02-18',	'30',	'台灣大學',	'高雄市XX區XX路',	'2022-03-21'),
(9,	'王曉明',	'aadad@gmail.com',	'0912345678',	'2022-03-20',	'1',	1000000,	3,	'2001-07-16',	'30',	'國小',	'高雄火車站火字招牌下',	'2022-03-21'),
(12,	'林來福',	'da123@gmail.com',	'0925654895',	'2022-03-24',	'1',	500,	3,	'2000-06-05',	'22',	'台灣大學',	'高雄市',	'2022-03-24');

DROP TABLE IF EXISTS `hour_day`;
CREATE TABLE `hour_day` (
  `day_id` int NOT NULL COMMENT '午間營業時間編號',
  `day_content` varchar(100) NOT NULL COMMENT '午間營業時間內容',
  PRIMARY KEY (`day_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='午間營業時間資料表';

INSERT INTO `hour_day` (`day_id`, `day_content`) VALUES
(1,	'午間 - 11:00 ~ 14:30 (最後點餐時間 14:00)');

DROP TABLE IF EXISTS `hour_night`;
CREATE TABLE `hour_night` (
  `night_id` int NOT NULL COMMENT '晚間營業時間編號',
  `night_content` varchar(100) NOT NULL COMMENT '晚間營業時間內容',
  PRIMARY KEY (`night_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='晚間營業時間資料表';

INSERT INTO `hour_night` (`night_id`, `night_content`) VALUES
(1,	'晚間 - 17:30 ~ 21:30 (最後點餐時間 20:30)');

DROP TABLE IF EXISTS `inv_unit`;
CREATE TABLE `inv_unit` (
  `unit_id` int NOT NULL AUTO_INCREMENT,
  `unit_name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='庫存單位';

INSERT INTO `inv_unit` (`unit_id`, `unit_name`) VALUES
(1,	'份'),
(2,	'包'),
(3,	'個'),
(4,	'公克'),
(5,	'公斤'),
(6,	'隻'),
(7,	'尾'),
(8,	'盒'),
(9,	'組');

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `job_id` varchar(10) NOT NULL,
  `job_title` varchar(35) NOT NULL,
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `jobs` (`job_id`, `job_title`) VALUES
('1',	'外場人員'),
('2',	'內場人員');

DROP TABLE IF EXISTS `latest_news`;
CREATE TABLE `latest_news` (
  `sid` int NOT NULL AUTO_INCREMENT COMMENT '最新消息編號',
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '最新消息標題',
  `img_id` varchar(500) DEFAULT NULL COMMENT '最新消息圖片',
  `timestart` date NOT NULL COMMENT '時間起',
  `timeend` date NOT NULL COMMENT '時間結',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '最新消息內容',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `latest_news` (`sid`, `name`, `img_id`, `timestart`, `timeend`, `content`) VALUES
(4,	'123123',	'111',	'2022-03-17',	'2022-03-25',	'4242'),
(5,	'123123',	'111',	'2022-03-17',	'2022-03-25',	'4242'),
(6,	'123123',	'111',	'2022-03-16',	'2022-03-18',	'111'),
(7,	'111',	'111',	'2022-03-16',	'2022-03-18',	'111'),
(8,	'123',	'1111',	'2022-03-09',	'2022-03-26',	'111'),
(9,	'資策安管中',	'225',	'2022-03-04',	'2022-03-23',	'123'),
(12,	'123123',	NULL,	'2022-03-10',	'2022-03-30',	'111'),
(13,	'123123',	NULL,	'2022-03-10',	'2022-03-30',	'111'),
(14,	'123123',	NULL,	'2022-03-02',	'2022-03-31',	'SAD'),
(15,	'123123',	NULL,	'2022-03-02',	'2022-03-31',	'SAD'),
(16,	'123123',	NULL,	'2022-03-02',	'2022-03-31',	'SAD'),
(17,	'123123',	NULL,	'2022-03-02',	'2022-03-31',	'SAD'),
(18,	'123123',	NULL,	'2022-03-02',	'2022-03-31',	'SAD'),
(19,	'123123',	NULL,	'2022-03-02',	'2022-03-31',	'SAD'),
(20,	'123123',	NULL,	'2022-03-02',	'2022-03-31',	'SAD'),
(21,	'123123',	NULL,	'2022-03-02',	'2022-03-31',	'SAD'),
(22,	'1資策安管中',	NULL,	'2022-03-18',	'2022-03-19',	'10.2'),
(23,	'1資策安管中',	NULL,	'2022-03-18',	'2022-03-19',	'10.2'),
(24,	'1111資策安管中',	NULL,	'2022-03-04',	'2022-03-31',	'1111'),
(25,	'123資策安管中',	'',	'2022-03-18',	'2022-03-19',	'123'),
(26,	'123資策安管中',	NULL,	'2022-03-18',	'2022-03-19',	'123'),
(27,	'123資策安管中',	NULL,	'2022-03-18',	'2022-03-19',	'123'),
(28,	'123資策安管中',	NULL,	'2022-03-18',	'2022-03-19',	'123'),
(29,	'123123',	NULL,	'2022-03-11',	'2022-04-01',	'1111'),
(30,	'123123',	NULL,	'2022-03-10',	'2022-03-23',	'asdaeawe'),
(31,	'123123',	NULL,	'2022-03-11',	'2022-03-24',	'asdasd'),
(32,	'123123',	'',	'2022-03-17',	'2022-03-24',	'asdadasd'),
(33,	'123123',	'',	'2022-03-10',	'2022-03-25',	'123123123'),
(39,	'123123',	'',	'2022-03-18',	'2022-03-19',	'12.12.'),
(40,	'123123',	'',	'2022-03-18',	'2022-03-19',	'12.12.'),
(41,	'123123',	'',	'2022-03-18',	'2022-03-19',	'12.12.'),
(42,	'123123',	'',	'2022-03-18',	'2022-03-19',	'12.12.'),
(43,	'資策安管中',	'',	'2022-03-11',	'2022-03-25',	'ADADSD'),
(44,	'資策安管中',	'',	'2022-03-11',	'2022-03-22',	'ASDFAFASD'),
(45,	'資策安管中',	'',	'2022-03-10',	'2022-03-25',	'ADAD'),
(46,	'123123',	'',	'2022-03-04',	'2022-03-31',	'asdad'),
(47,	'123123',	'',	'2022-03-04',	'2022-03-31',	'asdad'),
(48,	'123123',	NULL,	'2022-03-18',	'2022-03-23',	'123123'),
(49,	'123123',	NULL,	'2022-03-18',	'2022-03-23',	'123123'),
(50,	'123123',	NULL,	'2022-03-18',	'2022-03-23',	'123123'),
(51,	'123123',	NULL,	'2022-03-19',	'2022-03-22',	'123132'),
(52,	'fghfgh',	NULL,	'2022-03-04',	'2022-03-24',	'fghfhgfgh'),
(53,	'fghfgh',	NULL,	'2022-03-04',	'2022-03-24',	'fghfhgfgh'),
(54,	'123',	NULL,	'2022-03-17',	'2022-03-31',	'hjkhjk'),
(55,	'sfsdfs',	'',	'2022-03-16',	'2022-03-09',	'sdfsdfsdf'),
(56,	'sfsdf',	'',	'2022-03-18',	'2022-03-24',	'sdfsdfsdf'),
(57,	'sfsdfsdf',	'',	'2022-03-12',	'2022-03-24',	'sdfsdf'),
(58,	'sdfsdfsdf',	'',	'2022-03-03',	'2022-03-23',	'sdfsdfsdf'),
(59,	'sdfsdf',	'',	'2022-03-10',	'2022-03-31',	'sdfsdfsdf'),
(60,	'12312313',	'',	'2022-03-03',	'2022-03-24',	'123123'),
(61,	'asdadsa',	'',	'2022-03-10',	'2022-03-18',	'asdasd'),
(62,	'0.0.0.',	'',	'2022-03-11',	'2022-03-25',	'0.0.0.'),
(63,	'123123123',	NULL,	'2022-03-19',	'2022-03-26',	'123123'),
(64,	'64',	NULL,	'2022-03-12',	'2022-03-19',	'646464'),
(65,	'dgfdgf',	NULL,	'2022-03-03',	'2022-03-17',	'dgdgf'),
(66,	'123123',	NULL,	'2022-03-10',	'2022-03-25',	'fhfghfgh'),
(67,	'asdasdasd',	NULL,	'2022-03-09',	'2022-03-23',	'adasdasd'),
(68,	'12323231',	NULL,	'2022-03-04',	'2022-03-16',	'123123132'),
(69,	'1111111',	NULL,	'2022-03-11',	'2022-03-25',	'11111'),
(70,	'123123',	NULL,	'2022-03-11',	'2022-03-25',	'asdasd'),
(71,	'123123',	'',	'2022-03-12',	'2022-03-25',	'123123'),
(72,	'qwfwwe',	NULL,	'2022-03-03',	'2022-03-07',	'wedwed'),
(73,	'qwfwwe',	'4f7102ec61ade9be487ff613da490a2a93702be2.png',	'2022-03-03',	'2022-03-07',	'wedwed'),
(75,	'123123',	'85169b482e1fd1ea1829748ee999571a9dc522db.png',	'2022-03-17',	'2022-04-01',	'12'),
(76,	'123123',	'96418121c91e248925848f7297427de052f6ff99.png',	'2022-03-19',	'2022-03-25',	'111'),
(77,	'123123',	'a0a62313475b71cd711b90d3db6b7063391cd334.png',	'2022-03-18',	'2022-03-26',	'012345'),
(78,	'abc',	'c57ad6872e787ef591c2cb9a652aff67594a6157.jpg',	'2022-03-18',	'2022-03-31',	'0318'),
(79,	'1234457',	'2d7b6d68a755208755752075edb81518c04c5b4b.png',	'2022-03-21',	'2022-03-22',	'75375321'),
(80,	'test',	'8faa02f7b7e99e729d854162112e28cac43ef890.png',	'2022-03-15',	'2022-03-24',	'test'),
(81,	'fasfasfsadsfdasfa',	'0a130a75c981e8c61c8f36ddf100f63f9fafaf37.png',	'2022-03-19',	'2022-03-25',	'0000'),
(83,	'sdfsdf',	'd2d224a3a1addcb66e21e381436adbcb249d22a5.png',	'2022-03-25',	'2022-03-19',	'sdfsdf'),
(84,	'154',	'',	'2022-03-16',	'2022-03-24',	''),
(86,	'123123',	'',	'2022-03-09',	'2022-03-25',	''),
(87,	'123123',	'',	'2022-03-09',	'2022-03-25',	'123');

DROP TABLE IF EXISTS `main_class`;
CREATE TABLE `main_class` (
  `mclass_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '主類別編號',
  `mclass_name` varchar(50) NOT NULL COMMENT '主類別名稱',
  PRIMARY KEY (`mclass_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='品號主類別';

INSERT INTO `main_class` (`mclass_id`, `mclass_name`) VALUES
('C',	'外購商品commodity'),
('G',	'食材ingredient'),
('M',	'餐點meal'),
('P',	'自製包裝商品package food');

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `MID` int NOT NULL AUTO_INCREMENT COMMENT '會員編碼',
  `Mcreate_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '會員創建日期',
  `Mpic` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '大頭照',
  `Mname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '會員名稱',
  `Midentity` char(15) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '會員身分證',
  `Msex` enum('男','女') CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '會員性別',
  `Mvocation` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '會員職業',
  `Mbirthday` date DEFAULT NULL COMMENT '會員生日',
  `Mcity` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '居住城市',
  `Maddress` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '居住地址',
  `Mmarry` enum('已婚','未婚') CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '婚姻狀況',
  `Mchild` enum('有小孩','無小孩') CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '有無子嗣',
  `Memail` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '電子郵件',
  `Mphone` int DEFAULT NULL COMMENT '手機號碼',
  `Mpassword` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '會員密碼',
  PRIMARY KEY (`MID`) USING BTREE,
  UNIQUE KEY `Mpassword` (`Mpassword`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `member` (`MID`, `Mcreate_date`, `Mpic`, `Mname`, `Midentity`, `Msex`, `Mvocation`, `Mbirthday`, `Mcity`, `Maddress`, `Mmarry`, `Mchild`, `Memail`, `Mphone`, `Mpassword`) VALUES
(1,	'2022-03-04 01:54:16',	'',	'吳建凡',	'A193871609',	'男',	'工程師',	'1983-03-10',	'彰化縣',	'伸港鄉埤墘一路13號',	'已婚',	'有小孩',	'B7nLV30f@gmail.com',	912479060,	'PB4jgdNFc'),
(2,	'2022-03-06 11:19:20',	'  ',	'吳俊能',	'E196895954',	'男',	'廚師',	'2001-01-17',	'宜蘭縣',	'宜蘭市南橋二路5號',	'未婚',	'無小孩',	'jlWgZaQMeYP@gmail.com',	978605291,	'CqrV82e'),
(3,	'2022-04-01 20:36:35',	'',	'許志文',	'H196059137',	'男',	'學生',	'2003-01-11',	'屏東縣',	'新埤鄉振南路15號',	'未婚',	'無小孩',	'pOVhgofwbCb1Kj@gmail.com',	963596423,	'GBWnS5D'),
(4,	'2022-04-21 14:04:53',	'',	'藍淑芬',	'B291167381',	'女',	'學生',	'2006-04-08',	'新竹縣',	'湖口鄉南窩路15號',	'未婚',	'無小孩',	'L7LsZHgMRUEPi@gmail.com',	925629306,	'Xa0t3nuw7Wjd'),
(5,	'2022-04-25 12:25:42',	'',	'黃雅坤',	'G194796887',	'男',	'家管',	'1962-11-20',	'臺北市',	'中山區大直街16號',	'已婚',	'有小孩',	'wprJwD8E8uWk@gmail.com',	918701487,	'ZHO0x4T6iu'),
(6,	'2022-05-10 17:26:15',	'',	'陳筱婷',	'G299803923',	'女',	'公務員',	'1978-02-12',	'宜蘭縣',	'五結鄉公園三路33號',	'未婚',	'無小孩',	'g7wQ7o0ia33FJk@gmail.com',	988772938,	'VDaGUMY'),
(7,	'2022-05-21 12:29:50',	'',	'王怡映',	'H195038134',	'女',	'翻譯',	'1986-01-09',	'臺中市',	'東區東英五街14號',	'已婚',	'有小孩',	'X9t9aa0@gmail.com',	900956712,	'Pico7fPs'),
(8,	'2022-06-21 16:19:15',	'',	'朱亮志',	'F199146324',	'男',	'建築師',	'1994-03-18',	'桃園市',	'新屋區四維街14號',	'已婚',	'無小孩',	'Zt06stWgoji@gmail.com',	913418875,	'REL01K08'),
(9,	'2022-07-08 12:29:50',	'',	'彭依添',	'D295331736',	'女',	'學生',	'2008-07-15',	'南投縣',	'草屯鎮玉成路31號',	'未婚',	'無小孩',	'b8WDjADilw@gmail.com',	947417119,	'E5lS7HrL8'),
(10,	'2022-07-20 11:10:45',	'',	'謝美玲',	'F291189905',	'女',	'行銷',	'1953-09-18',	'苗栗縣',	'大湖鄉舊糖廠12號',	'已婚',	'有小孩',	'IS93za0qX@gmail.com',	996096953,	'XsvoSuIde'),
(12,	'2022-03-15 18:31:41',	'33333',	'242424',	'32twewt',	'女',	'wewtw',	'2022-03-17',	'r3ii',	'rkwerwe',	'未婚',	'有小孩',	'wetw@gmail.com',	912345678,	'2r0204910'),
(14,	'2022-03-15 18:33:12',	'33333',	'242424',	'32twewt',	'男',	'wewtw',	'2022-03-11',	'r3ii',	'rkwerwe',	'已婚',	'無小孩',	'wetw@gmail.com',	2,	'11111'),
(15,	'2022-03-15 18:33:53',	'33333',	'242424',	'32twewt',	'男',	'wewtw',	'2022-03-11',	'r3ii',	'rkwerwe',	'已婚',	'無小孩',	'wetw@gmail.com',	2,	'1351561561'),
(16,	'2022-03-15 18:34:05',	'33333',	'242424',	'32twewt',	'男',	'wewtw',	'2022-03-11',	'r3ii',	'rkwerwe',	'已婚',	'無小孩',	'wetw@gmail.com',	2,	'2545425'),
(17,	'2022-03-15 18:35:24',	'33333',	'242424',	'32twewt',	'女',	'wewtw',	'2022-03-17',	'r3ii',	'rkwerwe',	'已婚',	'無小孩',	'wetw@gmail.com',	923659765,	'sasasasas'),
(18,	'2022-03-16 17:05:09',	'2222',	'222',	'222',	'女',	'22',	'2022-03-09',	' ',	' ',	'已婚',	'有小孩',	'',	912123123,	'2R2RWQW'),
(19,	'2022-03-16 17:06:33',	'Q',	'1',	'2',	'女',	' 2E2E',	'2022-03-17',	'',	'',	'已婚',	'無小孩',	'',	912123123,	'DEWWER'),
(20,	'2022-03-16 18:44:20',	'1112',	'',	'111',	'女',	'11',	'2022-03-10',	'111',	'111',	'未婚',	'無小孩',	'1',	1111111,	'fsdwetwt'),
(21,	'2022-03-18 17:15:16',	'hfgf1',	'gggg1',	'2',	'男',	'aaaa',	'2022-03-18',	'aaa',	'',	'已婚',	'有小孩',	'ijfitj@wjrpq.com',	912333444,	'24124'),
(29,	'2022-03-21 13:13:45',	'2213',	'12312',	'123123',	'女',	'32123',	'2022-03-21',	'1123',	'123123',	'未婚',	'無小孩',	'1231',	5465546,	'fgweer'),
(30,	'2022-03-21 13:24:27',	'eeee1',	'eeee2',	'eee',	'女',	'eee',	'2022-03-21',	'ee',	'ee',	'已婚',	'有小孩',	'eee',	157485,	'rgdeed'),
(32,	'2022-03-21 17:36:54',	'www1',	'wqf',	'wqwfq',	'男',	'qwe',	'2022-03-21',	'r3ii',	'wfw',	'已婚',	'有小孩',	'wf@2e2e',	54545656,	'gerggweg');

DROP TABLE IF EXISTS `nutrition_label`;
CREATE TABLE `nutrition_label` (
  `nl_id` int NOT NULL AUTO_INCREMENT,
  `fnl_name` varchar(50) NOT NULL COMMENT '食材名稱',
  `fnl_photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '食材圖片',
  `fnl_kcal` float DEFAULT NULL COMMENT '熱量(每100g)',
  `fnl_Fat` float DEFAULT NULL COMMENT '脂肪(每100g)',
  `fnl_protein` float DEFAULT NULL COMMENT '蛋白質(每100g)',
  `fnl_carbohydrate` float DEFAULT NULL COMMENT '碳水化合物(每100g)',
  `fnl_sodium` float DEFAULT NULL COMMENT '鈉(每100g有多少mg)',
  `fnl_Potassium` float DEFAULT NULL COMMENT '鉀(每100g有多少mg)	',
  `fnl_iron` float DEFAULT NULL COMMENT '鐵(每100g有多少mg)',
  PRIMARY KEY (`nl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='營養標示';

INSERT INTO `nutrition_label` (`nl_id`, `fnl_name`, `fnl_photo`, `fnl_kcal`, `fnl_Fat`, `fnl_protein`, `fnl_carbohydrate`, `fnl_sodium`, `fnl_Potassium`, `fnl_iron`) VALUES
(1,	'牛楠 ',	'https://y3.yooho.com.tw/images/201803/goods_img/3855_G_1521685631499.jpg',	155,	7,	21,	0,	79,	330,	1.9),
(2,	'薑 ',	'',	79,	0.8,	1.8,	18,	13,	415,	0.6),
(3,	'蒜 ',	'',	148,	0.5,	6,	33,	17,	401,	1.7),
(4,	'蔥 ',	'',	33,	0.4,	1.9,	7,	17,	212,	1.2),
(5,	'紅蘿蔔 ',	'',	41,	0.2,	0.9,	10,	69,	320,	0.3),
(6,	'洋蔥 ',	'',	39,	0.1,	1.1,	9,	4,	146,	0.2),
(7,	'蕃茄 ',	'',	17,	0.2,	0.9,	3.9,	5,	237,	0.3),
(8,	'雞胸肉 ',	'',	164,	3.6,	31,	0,	74,	256,	1),
(9,	'莫扎瑞拉起司 ',	'',	280,	17,	28,	3.1,	16,	95,	0.3),
(10,	'台畜三明治火腿 ',	'',	149,	5,	16,	10,	640,	NULL,	NULL),
(11,	'麵粉 ',	'',	364,	1,	10,	76,	2,	107,	1.2),
(12,	'玉米粉 ',	'',	381,	0.1,	0.3,	91,	9,	3,	0.5),
(13,	'台鹽高級碘鹽',	'',	NULL,	NULL,	NULL,	NULL,	39143,	NULL,	NULL),
(14,	'台糖貳號砂糖',	'',	398.4,	NULL,	NULL,	99.2,	3,	NULL,	NULL),
(15,	'龜甲萬甘醇醬油',	'',	109.7,	NULL,	9.1,	11.7,	5104,	NULL,	NULL),
(16,	'白胡椒粉 ',	'',	357,	2.2,	9.6,	76.9,	NULL,	NULL,	NULL),
(17,	'黑胡椒粉 ',	'',	372,	6.7,	67.7,	7,	NULL,	NULL,	NULL),
(18,	'黑胡椒鹽 ',	'',	162,	1.6,	14.4,	22,	22970,	NULL,	NULL),
(19,	'黑胡椒粗粒 ',	'',	380,	10,	10,	7,	7,	NULL,	NULL),
(20,	'可果美番茄醬 ',	'',	111,	NULL,	1.3,	26.2,	1230,	NULL,	NULL),
(21,	'辣椒粉 ',	'',	387,	14.1,	14.7,	59.1,	12,	NULL,	NULL),
(22,	'東泉辣椒醬 ',	'',	30,	NULL,	2,	6,	2470,	NULL,	NULL),
(23,	'油 ',	'',	884,	100,	NULL,	NULL,	NULL,	NULL,	NULL),
(24,	'米酒 ',	'',	123.2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(25,	'台糖晶冰糖 ',	'',	400,	NULL,	NULL,	100,	NULL,	NULL,	NULL),
(26,	'大蒜粉 ',	'',	331,	0.7,	17,	73,	60,	1193,	5.7),
(27,	'薑黃粉 ',	'',	354,	10,	8,	65,	38,	2525,	41.4),
(28,	'咖哩粉 ',	'',	417,	14.1,	13.9,	58.5,	552,	NULL,	NULL),
(29,	'洋蔥粉 ',	'',	341,	1,	10,	79,	73,	985,	NULL),
(32,	'不測試',	'5',	5,	1,	1,	1,	1,	1,	1),
(33,	'測試',	'5',	5,	5,	5,	5,	5,	5,	5),
(34,	'測試',	'5',	5,	5,	5,	5,	5,	5,	5),
(35,	'測試',	'1',	1,	1,	1,	1,	1,	1,	1),
(38,	'333',	NULL,	1,	1,	1,	1,	1,	1,	1),
(39,	'1',	NULL,	1,	1,	1,	1,	1,	1,	1);

DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '訂單編號',
  `member_id` int NOT NULL COMMENT '會員編號',
  `meal_method` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '取餐方式',
  `address` varchar(255) NOT NULL COMMENT '外送地址',
  `total` int NOT NULL COMMENT '總計',
  `deliverfee` int NOT NULL COMMENT '運費',
  `grandtotal` int NOT NULL COMMENT '含運費總計',
  `paytype` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '付款方式',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '訂購時間',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '狀態',
  PRIMARY KEY (`id`),
  KEY `member_id` (`member_id`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`MID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `order` (`id`, `member_id`, `meal_method`, `address`, `total`, `deliverfee`, `grandtotal`, `paytype`, `created_at`, `status`) VALUES
(35,	1,	'外帶',	'',	1000,	0,	1000,	'信用卡',	'2022-03-21 02:54:36',	'已完成'),
(36,	2,	'外送',	'高雄市前金區',	1000,	100,	1100,	'信用卡',	'2022-03-21 03:27:35',	'已完成'),
(37,	3,	'外送',	'高雄市前金區',	100,	100,	200,	'現金',	'2022-03-21 03:53:52',	'準備中'),
(39,	4,	'外送',	'高雄市左營區',	100,	100,	200,	'現金',	'2022-03-21 05:30:49',	'準備中'),
(41,	9,	'外帶',	'',	5000,	0,	5000,	'信用卡',	'2022-03-24 05:23:37',	'準備中');

DROP TABLE IF EXISTS `orderdetail`;
CREATE TABLE `orderdetail` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '編號',
  `order_id` int NOT NULL COMMENT '訂單編號',
  `product_id` varchar(10) NOT NULL COMMENT '商品編號',
  `product` varchar(255) NOT NULL COMMENT '商品名稱',
  `price` int NOT NULL COMMENT '價格',
  `quantity` int NOT NULL COMMENT '餐點數量',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `orderdetail` (`id`, `order_id`, `product_id`, `product`, `price`, `quantity`) VALUES
(1,	1,	'MB-001',	'黃金豬排定食',	210,	10),
(2,	2,	'MB-002',	'唐揚雞歐姆蛋咖哩飯',	199,	5),
(3,	3,	'PG-002',	'骰子牛調理包',	680,	3),
(4,	3,	'MA-001',	'日式溏心蛋沙拉',	59,	6),
(5,	3,	'MB-001',	'黃金豬排定食',	210,	9);

DROP TABLE IF EXISTS `period`;
CREATE TABLE `period` (
  `period_id` int NOT NULL AUTO_INCREMENT COMMENT '供應時段編號',
  `period_name` varchar(10) DEFAULT NULL COMMENT '供應時段名稱',
  PRIMARY KEY (`period_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='餐點/商品供應時段';

INSERT INTO `period` (`period_id`, `period_name`) VALUES
(1,	'不分時段'),
(2,	'午餐'),
(3,	'晚餐'),
(4,	'午晚餐');

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` varchar(10) NOT NULL COMMENT '餐點/商品品號',
  `product_name` varchar(50) DEFAULT NULL COMMENT '餐點/商品名稱',
  `product_desc` varchar(100) DEFAULT NULL COMMENT '餐點/商品敘述',
  `product_price` int DEFAULT NULL COMMENT '餐點/商品單價',
  `period_id` int DEFAULT NULL COMMENT '供應時段編號',
  `unit_id` int DEFAULT NULL COMMENT '單位編號',
  `product_image` varchar(100) DEFAULT NULL COMMENT '餐點/商品照片',
  `product_cal` int DEFAULT NULL COMMENT '餐點/商品熱量:kcal',
  `vendor_id` int DEFAULT NULL COMMENT '供應商編號',
  PRIMARY KEY (`product_id`),
  KEY `period_id` (`period_id`),
  KEY `unit_id` (`unit_id`),
  KEY `vendor_id` (`vendor_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`period_id`) REFERENCES `period` (`period_id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`unit_id`) REFERENCES `inv_unit` (`unit_id`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='餐點及商品主檔';

INSERT INTO `product` (`product_id`, `product_name`, `product_desc`, `product_price`, `period_id`, `unit_id`, `product_image`, `product_cal`, `vendor_id`) VALUES
('MA-001',	'日式溏心蛋沙拉',	'日式醬油糖心蛋佐清爽生菜',	59,	4,	1,	'MA-001.jpg',	100,	1),
('MA-002',	'小魚豆腐沙拉',	'小魚乾佐鮮嫩豆腐沙拉，搭配日式醬汁。',	79,	4,	1,	'MA-002.png',	150,	1),
('MA-003',	'和風野菜沙拉',	'新鮮野菜佐和風沙拉醋汁，給你清爽開胃的口感。',	59,	4,	1,	'MA-003.jpg',	100,	1),
('MA-004',	'牛肉沙拉',	'嫩煎進口牛肉丁搭配爽口生菜及紅酒醋，是您開胃前菜的首選。',	99,	4,	1,	'MA-004.jpg',	350,	1),
('MA-005',	'炒鮮菇綠蘆筍',	'嫩炒鮮菇及綠蘆筍，是生菜之外的另一種選擇。',	59,	4,	1,	'MA-005.jpg',	120,	1),
('MA-006',	'海鮮玉子燒',	'整條明太子捲進玉子燒裡，每咬一口都有滿滿明太子，又是滿足的一餐！',	119,	4,	1,	'MA-006.webp',	350,	1),
('MA-007',	'日式唐揚雞',	'鹹酥香脆的外皮，多汁肉嫩的雞肉，酥脆外皮一咬，充滿日式風味的口感瞬間在嘴裡蔓延開。',	120,	4,	1,	'MA-007.jpg',	500,	1),
('MA-008',	'可樂餅',	'超人氣日式可樂餅， 吃完真的充滿幸福感唷~(每份兩顆)',	99,	4,	1,	'MA-008.jpg',	490,	1),
('MA-009',	'煎餃子',	'色澤金黃又有卡滋脆皮的煎餃，是非吃不可的一道日式小點。',	79,	4,	1,	'MA-009.jpg',	550,	1),
('MA-010',	'和風薯條',	'外脆內軟的完美薯條，佐日式美乃滋，是大人小孩的最愛。',	69,	4,	1,	'MA-010.jpg',	510,	1),
('MB-001',	'黃金豬排丼飯',	'台灣人氣No.1重磅級豬排',	210,	4,	1,	'MB-001.jpeg',	850,	1),
('MB-002',	'唐揚雞歐姆蛋咖哩飯',	'本店人氣No.1,保證好吃,8種食材精心熬製咖哩醬',	199,	4,	1,	'MB-002.jpeg',	600,	1),
('MB-003',	'天婦羅丼',	'天婦羅麵衣酥鬆帶點微軟的口感，半熟蛋裹覆的米飯增添些許溫潤風味，是許多人難以抗拒的美味。',	290,	4,	1,	'MB-003.jpg',	890,	1),
('MB-004',	'文青花魚飯',	'魚肉本身的鹹香與多汁，搭配Q彈的白飯，喜歡海鮮的饕客非常值得試試。',	319,	4,	1,	'MB-004.jpg',	750,	1),
('MB-005',	'親子丼',	'口感滑嫩的親子丼，是男女老少都喜歡的一道日式家庭料理。',	200,	4,	1,	'MB-005.jpg',	600,	1),
('MB-006',	'裝蒜牛五花飯',	'使用新鮮的炸蒜片進行調味，搭配牛五花的油花特有的香氣與溏心蛋濃郁的蛋香更是絕配，想來點風味濃郁的特色丼飯，「裝蒜牛五花」相信你會愛上！',	330,	4,	1,	'MB-006.jpg',	770,	1),
('MB-007',	'熔岩唐揚雞飯',	'將新鮮醃製後的雞肉裹粉油炸，大口咬下金黃酥脆的麵衣，還聽的見清脆過癮的回響，仔細看唐揚雞的橫切面，還能看見雞汁汨汨流出，最後淋上的黃芥末醬酸甜滋味交雜，整體風味非常棒。',	300,	4,	1,	'MB-007.jpg',	775,	1),
('MB-008',	'寶島燒豚飯',	'燒肉油脂比例恰到好處、口感軟嫩不乾柴，搭配特色醬汁烘烤過，鹹甜交織的美味讓人欲罷不能，溏心蛋與酸白菜等配菜也讓整體風味更有層次，綜合來說是個CP值相當高的人氣商品！',	300,	4,	1,	'MB-008.jpg',	795,	1),
('MB-009',	'月見海鮮丼',	'簡單的生鮪魚丁及滑嫩酪梨丁，搭配黃澄澄的蛋黃及醋飯，月見海鮮丼是夏日裡受歡迎的爽口主餐。',	310,	4,	1,	'MB-009.jpg',	600,	1),
('MB-010',	'炊飯',	'這道用蔬菜高湯炊煮的炊飯，蔬菜香氣四溢，是您搭配其他餐點的好搭檔。',	120,	4,	1,	'MB-010.jpg',	200,	1),
('MB-011',	'蛋包飯',	'大人小孩都喜歡的蛋包飯!',	150,	4,	1,	'MB-011.jpg',	350,	1),
('MB-012',	'漢堡排',	'漢堡肉是嚴選「進口澳洲牛」，新鮮原肉搭配特製醬汁，黃金比例完美呈現，手工現作。',	250,	4,	1,	'MB-012.jpg',	550,	1),
('MB-013',	'明太子義大利麵',	'使用義式奶油拌入橘紅色的明太子，還有檸檬獨特的清香風味，搭配鮭魚和鮮蝦，吃起來微鹹又涮嘴！',	270,	4,	1,	'MB-013.jpg',	510,	1),
('MC-001',	'味噌湯',	'味噌湯',	49,	4,	1,	'MC-001.jpg',	150,	1),
('MC-002',	'南瓜濃湯',	'南瓜濃湯',	69,	4,	1,	'MC-002.jpg',	150,	1),
('MC-003',	'烤鮭魚蘿蔔味增湯',	'烤鮭魚丁搭配蘿蔔熬煮，魚脂蔬香融合在一碗之中。',	79,	4,	1,	'MC-003.jpg',	200,	1),
('MC-004',	'豬肉湯',	'豬肉湯',	69,	4,	1,	'MC-004.jpg',	180,	1),
('MD-001',	'抹茶拿鐵',	'抹茶拿鐵',	120,	4,	1,	'MD-001.jpg',	120,	1),
('MD-002',	'可爾必思',	'可爾必思',	90,	4,	1,	'MD-002.jpg',	100,	1),
('MD-003',	'藍色氣泡飲',	'藍色氣泡飲',	110,	4,	1,	'MD-003.jpg',	50,	1),
('MD-004',	'季節果汁',	'季節果汁',	90,	4,	1,	'MD-004.PNG',	50,	1),
('MD-005',	'紅茶',	'紅茶',	79,	4,	1,	'MD-005.PNG',	30,	1),
('MD-006',	'美式咖啡',	'美式咖啡',	100,	4,	1,	'MD-006.PNG',	50,	1),
('MD-007',	'拿鐵',	'拿鐵',	110,	4,	1,	'MD-007.PNG',	80,	1),
('ME-001',	'抹茶冰淇淋',	'抹茶冰淇淋',	80,	4,	1,	'ME-001.jpg',	150,	1),
('ME-002',	'紅豆湯圓',	'紅豆湯圓',	75,	4,	1,	'ME-002.jpg',	150,	1),
('ME-003',	'焦糖布丁',	'焦糖布丁',	69,	4,	1,	'ME-003.jpg',	90,	1),
('ME-004',	'起士蛋糕',	'起士蛋糕',	90,	4,	1,	'ME-004.jpg',	100,	1),
('ME-005',	'提拉米蘇',	'提拉米蘇',	120,	4,	1,	'ME-005.jpg',	200,	1),
('ME-006',	'義式奶酪',	'義式奶酪',	90,	4,	1,	'ME-006.jpg',	180,	1),
('ME-007',	'鬆餅',	'鬆餅',	120,	4,	1,	'ME-007.jpg',	250,	1),
('PG-001',	'日式咖哩調理包',	'8種食材精心熬製咖哩醬,讓您快速上桌享用',	150,	1,	2,	'PG-001.jpg',	700,	1),
('PG-002',	'骰子牛調理包',	'嚴選梅花牛肉，將每塊牛肉切至黃金比例的骰子大小，一口就可吃出肉汁甘甜滋味，富有嚼勁的肉質，口感厚實。商品規格:1kg/盒。',	680,	1,	2,	'PG-002.webp',	1200,	1),
('PG-003',	'冷凍可樂餅',	'酥炸可樂餅急凍冷藏，保留香酥美味。商品規格:每包6顆。',	180,	1,	2,	'PG-003.jpg',	900,	1),
('PH-001',	'綜合樂食寶寶粥組(28入/4盒)',	'寶寶粥食品28入(心干貝貝粥7入,乖乖豬豬粥7入,原淬寶寶粥7入,南瓜飽飽粥7入)',	2000,	1,	9,	'PH-001.jpg',	500,	1),
('PH-002',	'心干貝貝粥7入/盒',	'最多網友好評推薦的常溫寶寶粥',	420,	1,	8,	'PH-002.jpg',	500,	1),
('PH-003',	'乖乖豬豬粥7入/盒',	'純天然、無添加，用愛烹煮的美味',	420,	1,	8,	'PH-003.jpg',	500,	1),
('PH-004',	'南瓜飽飽粥7入/盒',	'優質蛋白質搭配多色蔬果，營養均衡',	420,	1,	8,	'PH-004.jpg',	500,	1),
('PH-005',	'原淬寶寶粥7入/盒',	'公開檢驗報告，從原料製程到成品都安心',	420,	1,	8,	'PH-005.jpg',	500,	1);

DROP TABLE IF EXISTS `recipes_match`;
CREATE TABLE `recipes_match` (
  `match_id` int NOT NULL AUTO_INCREMENT,
  `cr_id` int NOT NULL COMMENT '食譜ID',
  `nl_id` int NOT NULL COMMENT '食材ID',
  `Food_dosage` int DEFAULT NULL COMMENT '食材用量',
  PRIMARY KEY (`match_id`),
  KEY `fnl_id` (`nl_id`),
  KEY `cr_id` (`cr_id`),
  CONSTRAINT `recipes_match_ibfk_1` FOREIGN KEY (`cr_id`) REFERENCES `creative_recipes` (`cr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='食譜~食材用量';

INSERT INTO `recipes_match` (`match_id`, `cr_id`, `nl_id`, `Food_dosage`) VALUES
(1,	1,	1,	600),
(2,	1,	2,	20),
(3,	1,	3,	30),
(4,	1,	4,	30),
(5,	1,	5,	300),
(6,	1,	6,	300),
(7,	1,	7,	300),
(8,	1,	23,	20),
(9,	1,	19,	5),
(10,	1,	20,	50),
(11,	1,	15,	40),
(12,	1,	24,	50),
(13,	1,	25,	50),
(14,	1,	13,	20),
(15,	2,	13,	10),
(16,	2,	21,	10),
(17,	2,	26,	10),
(18,	2,	14,	30),
(19,	2,	28,	10),
(20,	2,	27,	10),
(21,	2,	29,	10),
(22,	2,	16,	5),
(23,	2,	17,	5),
(24,	2,	8,	300),
(25,	2,	9,	100),
(26,	2,	10,	50),
(27,	2,	11,	100),
(28,	2,	12,	100),
(29,	2,	4,	50);

DROP TABLE IF EXISTS `shop_area`;
CREATE TABLE `shop_area` (
  `area_id` int NOT NULL COMMENT '區域編號',
  `area_name` varchar(10) NOT NULL COMMENT '區域名稱',
  PRIMARY KEY (`area_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='分店區域資料表';

INSERT INTO `shop_area` (`area_id`, `area_name`) VALUES
(1,	'北北基'),
(2,	'桃竹苗'),
(3,	'中彰投'),
(4,	'雲嘉南'),
(5,	'高屏');

DROP TABLE IF EXISTS `shop_info`;
CREATE TABLE `shop_info` (
  `shop_id` int NOT NULL COMMENT '門市編號',
  `area_id` int NOT NULL COMMENT '門市區域編號',
  `shop_name` varchar(50) NOT NULL COMMENT '門市名稱',
  `shop_address` varchar(100) NOT NULL COMMENT '門市地址',
  `shop_tel` varchar(50) NOT NULL COMMENT '門市電話',
  `day_id` int NOT NULL COMMENT '午間營業時間編號',
  `night_id` int NOT NULL COMMENT '晚間營業時間編號',
  `info_detail` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '門市詳述',
  `info_traffic` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '交通資訊',
  `info_parking` varchar(50) DEFAULT NULL COMMENT '停車資訊',
  PRIMARY KEY (`shop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='門市資訊資料表';

INSERT INTO `shop_info` (`shop_id`, `area_id`, `shop_name`, `shop_address`, `shop_tel`, `day_id`, `night_id`, `info_detail`, `info_traffic`, `info_parking`) VALUES
(1,	5,	'高雄左營店',	'高雄市左營區文守路196號',	'07-963-5566',	1,	1,	'牆面上的墨鏡與懸掛式冰塊燈，營造如繁星般光影變化，讓整體空間增添獨特寧靜感! 位處捷運巨蛋站，緊鄰「健康、休憩、購物」三合一多功能體育園區，不遠處即是熱鬧漢神巨蛋商圈及世運會主場地巨蛋，可欣賞建築藝術，或者不定期舉辦的演唱會活動。',	'捷運- 【巨蛋站2號出口】對面。',	'裕誠路472巷有私人收費停車場。'),
(2,	5,	'高雄前金店',	'高雄市前金區中正路250號',	'07-223-7755',	1,	1,	'鄰近河堤社區，座落在人文薈萃的文教區域，以和風雅緻的用餐環境，迎接每一位貴賓的蒞臨。用餐後還可以到河堤公園悠閒散步，感受住宅區靜懿悠閒的氣氛。',	'鄰近捷運紅線生態園區站',	'河堤路路邊收費停車格$30/H'),
(3,	5,	'高雄駁二店',	'高雄市鹽埕區大義街150號',	'07-223-7788',	1,	1,	'花園裡的餐桌，淺木紋點綴綠色元素，呈現簡約、溫馨自然氛圍，共享恬靜的餐桌響宴。鄰近的駁二藝術特區是您飯後散步的號好去處',	'鄰近捷運橘線鹽埕埔站',	'車堡寶停車場（平假日40/HR)'),
(4,	5,	'高雄鳳山店',	'高雄市鳳山區青年路211號',	'07-223-1122',	1,	1,	'周邊交通便利並備有捷運接駁車可到達。店內以人文和風的書香裝潢，打造舒適溫馨的用餐氛圍，是家庭聚餐及商務聚餐的最佳選擇！',	'鄰近捷運橘線鳳山站',	'路邊停車格'),
(5,	5,	'屏東站前店',	'屏東縣屏東市民族路850號',	'08-226-135',	1,	1,	'店內以舒適的木紋搭配書香風格的裝置藝術，讓這溫暖的城市，增添人文氣質。分店座落於熱鬧的太平洋百貨商圈，臨近屏東美術館、中正公園，讓您以綠光森林佐餐，細細品味美食饗宴。',	'公車- 搭乘市區公車於【警察局站】下車',	'中華路與林森路交接口樂活停車場汽車每小時收費20元。'),
(6,	4,	'台南忠義店',	'台南市中西區忠義路二段20號',	'06-221-7600',	1,	1,	'揉合幾何圖形剪影與垂直立線的美感表現，讓空間散發一股品味風格，位於台南府城藝文、人文薈萃聚集處，鄰近台灣文學館及孔廟，瀰漫濃濃學術氣息，與店內書櫃展示架相互呼應，有著如沐春風的輕鬆。',	'公車- 藍幹線/林百貨(忠義路)。',	'【美術館地下停車場】24小時對外營業。平日30元/時；假日40元/時'),
(7,	4,	'台南大學店',	'台南市東區大學路18號2樓',	'06-200-6189',	1,	1,	'座落於台南成大校區的成大綜合商場內，提供學生聚會或犒賞慶祝的最佳去處!空間設計以「一頁成大」為主軸，現代新和風的設計風格結合木質書櫃隔間，有如漫步書店，正巧與校區獨特的書卷、人文味相互呼應，處處可見的紫色薰衣草識別，增添時尚氣氛。',	'公車- 搭乘市區公車(6號線)於成大會館站下車',	'成大商場附設地下室【嘟嘟房停車場】，平日每小時收費30元，假日40元。'),
(8,	4,	'嘉義林森西店',	'嘉義市東區林森西路15號2樓',	'05-228-8239',	1,	1,	'簡雅的隔間，創造獨特文化品味，是約會、家庭聚餐的最佳選擇，腹地涵蓋著名的圓環及火車站周邊，可至附近的中正公園閒散走走或到噴水圓環盡情購物，享受餐後愜意時',	'火車- 嘉義火車站前站-往林森西路直走，經過地下道後，與國華街交叉口。',	'鄰近【中正公園地下停車場】及【中央廣場停車場】，每小時皆收費30元。'),
(9,	3,	'台中台灣大道店',	'台中市西區台灣大道二段36號2樓',	'04-2319-9323',	1,	1,	'地處台中市最舒適的綠園道路段，緊鄰科博館，遠眺可欣賞窗外綠意街景，溫暖明亮的採光，營造清新透明度，搭配沉穩的內裝家具，猶如散步美術館裡，讓人心曠神怡，是輕鬆減壓的好去處！',	'公車- 科學博物館站下。',	'科博館三中停車場\n。平日：40元 / 假日：50元'),
(10,	3,	'台中河南店',	'台中市西屯區河南路二段63號2樓',	'04-2452-5731',	1,	1,	'室內空間運用金屬線條，搭配溫暖木質書櫃，營造溫馨、現代氣氛，象徵品牌花的薰衣草方塊巧妙融入，展現時尚風華；寬廣的200多個位席，是約會、家庭聚餐、好友聚會最佳選擇，台中最熱鬧的逢甲商圈，又多了一處品嚐美味的好地方!',	'公車- 於【青海河南路口】下車，右轉往西屯路方向走。',	'【青海停車場】每小時皆收費30元。'),
(11,	3,	'彰化東民店',	'彰化縣彰化市東民街139號',	'04-727-9385',	1,	1,	'現代和風設計的獨棟餐廳，溫馨雅緻，讓人備感放鬆，緊臨八卦山風景區下，能直接欣賞八卦山大佛，結合著當地質樸熱情的人文采風，饗食間更能體驗書香人文氛圍。',	'公車- 彰化縣縣會、彰化縣文化局站。',	'鄰近【華陽立體停車場】及【縣府南郭路停車場】，每小時皆收費30元。'),
(12,	2,	'中壢中山店',	'桃園市中壢區中山路11號2樓',	'03-280-7070',	1,	1,	'鄰近中壢火車站以及潮流聖地中平商圈，店內設計以溫暖木色裝潢為主，傳遞人文書香的品牌精神，更成為繁忙都市中，與親友歡聚分享的好去處。',	'公車- 請於【農會站】下車，往建國路郵局方向走。',	'【中央地下停車場】299格車位：$30/hr'),
(13,	2,	'桃園八德店',	'桃園市八德區金和路27號2樓',	'03-218-2928',	1,	1,	'桃園八德的文創美學新據點「桃拾生活廣場」，地點位於介壽路、金和路口熱鬧的大潤發商圈，讓人在享用完和風饗宴後，還可以順道採買購物，或是在周邊公園綠蔭漫步，愜意度過餐後美好時光。',	'公車- 大湳辦事處下車，往大和路右轉共5-7分鐘路程。',	'桃拾生活廣場周邊附設停車格皆可停。'),
(14,	2,	'新竹光復店',	'新竹市東區光復路一段30號',	'03-561-7168',	1,	1,	'簡約書卷風格中帶有書香花園的氣息，有如家的溫暖與舒適感。',	'火車：新竹火車站下車後往後站方向東南街接食品路步行約 1.1 公里（15 分鐘左右）',	'頂竹圍停車場，步行約5-7分鐘，每小時收費20元。'),
(15,	2,	'竹北光明店',	'新竹縣竹北市光明六路東一段150號',	'03-550-0153',	1,	1,	'隔間設計以飛機機翼獨特的菱角線條，巧妙地營造視覺穿透感；摟空交錯的幾何書架、以簡單、溫馨裝置藝術妝點，若隱若現間，舒緩了都市專有的緊張、忙碌；光影折射灑落牆面，以科技聞名的竹塹風城，也柔軟地增添了人文的溫度。',	'竹北市免費公車: 搭乘至體育館站，往光明六路東一段及莊敬南路交叉口步行約5-10分鐘。',	'新竹縣體育館停車場每小時收費20元。'),
(16,	1,	'台北光復南店',	'台北市大安區光復南路28號B1',	'02-2741-1600  ',	1,	1,	'以溫暖木色為基調搭配柔和光線，打造明亮的人文書香空間，也讓人全然放鬆地徜徉在舒適的用餐氛圍中。 分店鄰近國父紀念館，沿著忠孝東路往信義區方向走，能遠眺101大樓，還有信義商圈，新光三越，華納威秀影城等，享受用餐後的休憩時光。',	'捷運- 【國父紀念館3號出口】出來直接左轉，分店位於斜對角的麥當勞隔壁。',	'【國父紀念館平面停車場】以及後方的【僑安地下室停車場】，皆為一小時40元。'),
(17,	1,	'台北南京東店',	'台北市中山區南京東路二段178號2樓',	'02-2504-1711',	1,	1,	'緊鄰南京金融商圈，位於二樓雅緻的面窗用餐環境，可一邊享受美食一邊觀賞大都會的車水馬龍。鄰近伊通商圈，巷弄間有各式飾品、服飾店，還可散步到充滿當代藝術氣息的伊通公園欣賞畫作。',	'捷運-【松江南京4號出口(手扶梯)】出來後至南京東路口右轉。',	'建國高架橋下收費停車場/1小時40元。'),
(18,	1,	'板橋新埔店',	'新北市板橋區文化路一段30號2F',	'02-2255-2900',	1,	1,	'位於板橋捷運新埔站「三猿廣場」2樓，地點便利，不管搭乘捷運或是開車皆十分方便。在享用完和風料理後，還可以順道鄰近商圈採買購物，或是在周邊優閒漫步，愜意度過餐後美好時光。',	'捷運新埔站4號出口無須出站，搭乘電梯往三猿廣場2F，即可抵達!',	'【三猿廣場停車場】\n\n周日~周四營業至晚間9:30。\n\n周五、周六及例假日前一日營業至晚間10:00'),
(19,	1,	'淡水市鎮店',	'新北市淡水區中山北路二段38號3樓',	'02-2623-7515',	1,	1,	'淡水新市鎮店，以淺木紋為主色，呈現主體自然色彩,用餐體驗希望提供最優質的餐點及有溫度的服務，寬廣舒適空間規劃，適合闔家聚餐同樂，一同享受閑靜的用餐時光。',	'淡水輕軌: 淡海輕軌綠山線到淡水行政中心站下車,步行往中山北路二段及濱海路交叉口即可抵達。',	'地點:淡新家樂福地下停車場,40元/小時'),
(20,	1,	'基隆信一店',	'基隆市中正區信一路177號',	'02-2425-5500',	1,	1,	'基隆分店座落於基隆市區最高的大樓中，店內充滿著書香人文氣息，享用美味同時眺望基隆港景色，最適合家庭用餐與朋友聚會，餐後可以散步到鄰近的基隆海港，享受生活的微加幸福。',	'公車– 循環站下車。',	'【東岸停車場】平假日$30元/H。');

DROP TABLE IF EXISTS `specialdates_coupon`;
CREATE TABLE `specialdates_coupon` (
  `Mname` varchar(50) NOT NULL COMMENT '會員姓名',
  `Mid` int NOT NULL COMMENT '會員編號',
  `Msex` enum('''男性''','''女性''') NOT NULL COMMENT '會員性別',
  `Mbirthday` date NOT NULL COMMENT '會員生日',
  `Memail` varchar(50) NOT NULL COMMENT '會員電子信箱',
  `Mphone` int NOT NULL COMMENT '會員手機號碼',
  `Mchild` enum('''有''','''無''') NOT NULL COMMENT '會員有無子女',
  `Mvocation` varchar(50) NOT NULL COMMENT '會員職業'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='特殊節日及生日優惠券(不公開顯示)';


DROP TABLE IF EXISTS `sub_class`;
CREATE TABLE `sub_class` (
  `sclass_id` varchar(10) NOT NULL COMMENT '次類別編號',
  `sclass_name` varchar(50) NOT NULL COMMENT '次類別名稱',
  PRIMARY KEY (`sclass_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='品號次類別';

INSERT INTO `sub_class` (`sclass_id`, `sclass_name`) VALUES
('0',	'(食材)其他'),
('1',	'(食材)海鮮'),
('2',	'(食材)家禽'),
('3',	'(食材)家畜'),
('4',	'(食材)蔬果植物'),
('5',	'(食材)調味料'),
('A',	'(產品)小菜/點心'),
('B',	'(產品)主食'),
('C',	'(產品)湯品'),
('D',	'(產品)飲料'),
('E',	'(產品)甜點'),
('F',	'(產品)冷凍包裝食品'),
('G',	'(產品)常溫包裝食品'),
('X',	'(產品)其他');

DROP TABLE IF EXISTS `vendor`;
CREATE TABLE `vendor` (
  `vendor_id` int NOT NULL AUTO_INCREMENT COMMENT '供應商編號',
  `vendor_name` varchar(50) DEFAULT NULL COMMENT '供應商名稱',
  `vendor_desc` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '供應商全名',
  `vendor_tel` varchar(50) DEFAULT NULL COMMENT '供應商電話',
  `vendor_address` varchar(100) DEFAULT NULL COMMENT '供應商地址',
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='供應商主檔';

INSERT INTO `vendor` (`vendor_id`, `vendor_name`, `vendor_desc`, `vendor_tel`, `vendor_address`) VALUES
(1,	'樂食町',	'樂食町餐飲有限公司',	'07-12345678',	'高雄市鹽埕區樂食町1番地'),
(2,	'源食',	'源食食品材料行',	'07-3358776',	'高雄市鳳山區勝利路999號'),
(3,	'達昌',	'達昌肉舖行',	'07-3535762',	'高雄市岡山區岡興路256巷7號'),
(4,	'莘農',	'莘農蔬果批發有限公司',	'07-5566331',	'高雄市阿蓮區蓮池路66號'),
(5,	'勝餘',	'勝餘水產批發行',	'07-8763325',	'高雄市永安區永達路28號');

DROP VIEW IF EXISTS `view_orderdetail`;
CREATE TABLE `view_orderdetail` (`ID` int, `ORDER_ID` int, `PRODUCT_ID` varchar(10), `PRODUCT_NAME` varchar(50), `PRODUCT_PRICE` int, `QUANTITY` int);


DROP VIEW IF EXISTS `view_product`;
CREATE TABLE `view_product` (`product_id` varchar(10), `product_name` varchar(50), `product_desc` varchar(100), `product_price` int, `period_name` varchar(10), `product_cal` int, `product_image` varchar(100));


DROP VIEW IF EXISTS `view_shop`;
CREATE TABLE `view_shop` (`area_name` varchar(10), `shop_id` int, `shop_name` varchar(50), `shop_address` varchar(100), `shop_tel` varchar(50), `day_content` varchar(100), `night_content` varchar(100), `info_detail` varchar(150), `info_traffic` varchar(50), `info_parking` varchar(50));


DROP TABLE IF EXISTS `voting_results`;
CREATE TABLE `voting_results` (
  `UserID` int NOT NULL COMMENT '會員ID(投票數)',
  `MealID1` varchar(30) NOT NULL COMMENT '餐點ID(最高票)',
  `Meal_img1` int NOT NULL COMMENT '餐點照片(最高票)',
  `MealID2` varchar(30) NOT NULL COMMENT '餐點ID(票數第二名)',
  `Meal_img2` int NOT NULL COMMENT '餐點照片(票數第二名)',
  `MealID3` varchar(30) NOT NULL COMMENT '餐點ID(票數第三名)',
  `Meal_img3` int NOT NULL COMMENT '餐點照片(票數第三名)',
  `MealID4` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '餐點ID(票數第四名)',
  `Meal_img4` int NOT NULL COMMENT '餐點照片(票數第四名)',
  `time` datetime NOT NULL COMMENT '時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='投票結果資料表';


DROP TABLE IF EXISTS `view_orderdetail`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `view_orderdetail` AS select `o`.`id` AS `ID`,`o`.`order_id` AS `ORDER_ID`,`p`.`product_id` AS `PRODUCT_ID`,`p`.`product_name` AS `PRODUCT_NAME`,`p`.`product_price` AS `PRODUCT_PRICE`,`o`.`quantity` AS `QUANTITY` from (`product` `p` join `orderdetail` `o` on((`p`.`product_id` = `o`.`product_id`)));

DROP TABLE IF EXISTS `view_product`;
CREATE ALGORITHM=UNDEFINED DEFINER=`John`@`%` SQL SECURITY DEFINER VIEW `view_product` AS select `product`.`product_id` AS `product_id`,`product`.`product_name` AS `product_name`,`product`.`product_desc` AS `product_desc`,`product`.`product_price` AS `product_price`,`period`.`period_name` AS `period_name`,`product`.`product_cal` AS `product_cal`,`product`.`product_image` AS `product_image` from (`product` join `period` on((`product`.`period_id` = `period`.`period_id`))) where (`product`.`product_id` like 'M%');

DROP TABLE IF EXISTS `view_shop`;
CREATE ALGORITHM=UNDEFINED DEFINER=`John`@`%` SQL SECURITY DEFINER VIEW `view_shop` AS select `area`.`area_name` AS `area_name`,`sh`.`shop_id` AS `shop_id`,`sh`.`shop_name` AS `shop_name`,`sh`.`shop_address` AS `shop_address`,`sh`.`shop_tel` AS `shop_tel`,`day`.`day_content` AS `day_content`,`night`.`night_content` AS `night_content`,`sh`.`info_detail` AS `info_detail`,`sh`.`info_traffic` AS `info_traffic`,`sh`.`info_parking` AS `info_parking` from (((`shop_info` `sh` join `hour_day` `day` on((`sh`.`day_id` = `day`.`day_id`))) join `hour_night` `night` on((`sh`.`night_id` = `night`.`night_id`))) join `shop_area` `area` on((`sh`.`area_id` = `area`.`area_id`)));

-- 2022-06-02 07:06:43
