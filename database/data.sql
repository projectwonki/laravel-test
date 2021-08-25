-- Adminer 4.7.2 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE TABLE `configs` (
  `module` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `val` text COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `configs_module_key_lang_unique` (`module`,`key`,`lang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `email_templates` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `purpose` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_admin` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bcc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subject_admin` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `body_admin` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_templates_purpose_unique` (`purpose`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `email_templates_lang` (
  `base_id` int(10) unsigned NOT NULL,
  `lang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `subject_end_user` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `body_end_user` text COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `email_templates_lang_base_id_lang_unique` (`base_id`,`lang`),
  KEY `email_templates_lang_lang_index` (`lang`),
  CONSTRAINT `email_templates_lang_base_id_foreign` FOREIGN KEY (`base_id`) REFERENCES `email_templates` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8_unicode_ci NOT NULL,
  `queue` text COLLATE utf8_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `logs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_display_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `module` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `act` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `unique_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `unique_label` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `logs_user_id_foreign` (`user_id`),
  CONSTRAINT `logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `logs` (`id`, `user_id`, `username`, `user_display_name`, `module`, `act`, `unique_id`, `unique_label`, `post`, `created_at`, `updated_at`) VALUES
(1,	1,	'root',	'root',	'',	'Login',	NULL,	NULL,	'{\"username\":\"root\",\"password\":\"\"}',	'2021-08-23 21:34:38',	'2021-08-23 21:34:38'),
(2,	1,	'root',	'root',	'',	'Login',	NULL,	NULL,	'{\"username\":\"root\",\"password\":\"\",\"redirect\":\"privilege\\/edit?unique=3\"}',	'2021-08-24 08:20:48',	'2021-08-24 08:20:48'),
(3,	1,	'root',	'root',	'master-store',	'create',	'1',	'Toko Alpha',	'{\"name\":\"Toko Alpha\",\"is_active\":\"1\"}',	'2021-08-24 08:38:59',	'2021-08-24 08:38:59'),
(4,	1,	'root',	'root',	'master-store',	'create',	'2',	'Toko Beta',	'{\"name\":\"Toko Beta\",\"is_active\":\"1\"}',	'2021-08-24 08:39:05',	'2021-08-24 08:39:05'),
(5,	1,	'root',	'root',	'master-store',	'unpublish',	'2',	'Toko Beta',	'{\"publish\":\"0\",\"unique\":\"2\"}',	'2021-08-24 08:50:43',	'2021-08-24 08:50:43'),
(6,	1,	'root',	'root',	'master-store',	'publish',	'2',	'Toko Beta',	'{\"publish\":\"1\",\"unique\":\"2\"}',	'2021-08-24 08:50:45',	'2021-08-24 08:50:45'),
(7,	1,	'root',	'root',	'master-store',	'unpublish',	'1',	'Toko Alpha',	'{\"publish\":\"0\",\"unique\":\"1\"}',	'2021-08-24 08:50:46',	'2021-08-24 08:50:46'),
(8,	1,	'root',	'root',	'master-store',	'publish',	'1',	'Toko Alpha',	'{\"publish\":\"1\",\"unique\":\"1\"}',	'2021-08-24 08:50:48',	'2021-08-24 08:50:48'),
(9,	1,	'root',	'root',	'master-supplier',	'unpublish',	'2',	'supplier 2',	'{\"publish\":\"0\",\"unique\":\"2\"}',	'2021-08-24 08:51:14',	'2021-08-24 08:51:14'),
(10,	1,	'root',	'root',	'master-supplier',	'publish',	'2',	'supplier 2',	'{\"publish\":\"1\",\"unique\":\"2\"}',	'2021-08-24 08:51:16',	'2021-08-24 08:51:16'),
(11,	1,	'root',	'root',	'master-supplier',	'edit',	'2',	'supplier 2',	'{\"name\":\"supplier 2\",\"email\":\"nanda.giw@gmail.com\",\"is_active\":\"1\",\"unique\":\"2\"}',	'2021-08-24 08:55:46',	'2021-08-24 08:55:46'),
(12,	1,	'root',	'root',	'master-product',	'create',	'1',	'product A',	'{\"supplier_id\":\"1\",\"name\":\"product A\",\"stock\":\"10\",\"is_active\":\"1\"}',	'2021-08-24 09:01:20',	'2021-08-24 09:01:20'),
(13,	1,	'root',	'root',	'master-product',	'create',	'2',	'produk B',	'{\"supplier_id\":\"1\",\"name\":\"produk B\",\"stock\":\"20\",\"is_active\":\"1\"}',	'2021-08-24 09:01:35',	'2021-08-24 09:01:35'),
(14,	1,	'root',	'root',	'master-product',	'create',	'3',	'produk C',	'{\"supplier_id\":\"2\",\"name\":\"produk C\",\"stock\":\"15\",\"is_active\":\"1\"}',	'2021-08-24 09:01:44',	'2021-08-24 09:01:44'),
(15,	1,	'root',	'root',	'master-product',	'create',	'4',	'produk D',	'{\"supplier_id\":\"2\",\"name\":\"produk D\",\"stock\":\"25\",\"is_active\":\"1\"}',	'2021-08-24 09:01:52',	'2021-08-24 09:01:52'),
(16,	1,	'root',	'root',	'master-product',	'unpublish',	'4',	'produk D',	'{\"publish\":\"0\",\"unique\":\"4\"}',	'2021-08-24 09:02:51',	'2021-08-24 09:02:51'),
(17,	1,	'root',	'root',	'master-product',	'publish',	'4',	'produk D',	'{\"publish\":\"1\",\"unique\":\"4\"}',	'2021-08-24 09:02:53',	'2021-08-24 09:02:53'),
(18,	1,	'root',	'root',	'transction-order',	'create',	'1',	NULL,	'{\"store_id\":\"1\",\"product_id\":\"1\",\"order\":\"1\",\"is_approve\":\"1\"}',	'2021-08-24 09:21:20',	'2021-08-24 09:21:20'),
(19,	1,	'root',	'root',	'transction-order',	'edit',	'1',	NULL,	'{\"store_id\":\"1\",\"product_id\":\"1\",\"order\":\"2\",\"is_approve\":\"0\",\"unique\":\"1\"}',	'2021-08-24 09:22:35',	'2021-08-24 09:22:35'),
(20,	1,	'root',	'root',	'transction-order',	'edit',	'1',	NULL,	'{\"store_id\":\"2\",\"product_id\":\"3\",\"order\":\"2\",\"is_approve\":\"0\",\"unique\":\"1\"}',	'2021-08-24 09:22:46',	'2021-08-24 09:22:46'),
(21,	1,	'root',	'root',	'transction-order',	'edit',	'1',	NULL,	'{\"store_id\":\"1\",\"product_id\":\"1\",\"order\":\"1\",\"is_approve\":\"0\",\"unique\":\"1\"}',	'2021-08-24 09:23:45',	'2021-08-24 09:23:45'),
(22,	1,	'root',	'root',	'transction-order',	'create',	'2',	NULL,	'{\"store_id\":\"1\",\"product_id\":\"2\",\"order\":\"2\",\"is_approve\":\"0\"}',	'2021-08-24 09:23:55',	'2021-08-24 09:23:55'),
(23,	1,	'root',	'root',	'transction-order',	'create',	'3',	NULL,	'{\"store_id\":\"2\",\"product_id\":\"3\",\"order\":\"3\",\"is_approve\":\"0\"}',	'2021-08-24 09:24:14',	'2021-08-24 09:24:14'),
(24,	1,	'root',	'root',	'transction-order',	'create',	'4',	NULL,	'{\"store_id\":\"2\",\"product_id\":\"4\",\"order\":\"4\",\"is_approve\":\"0\"}',	'2021-08-24 09:24:25',	'2021-08-24 09:24:25'),
(25,	1,	'root',	'root',	'',	'Login',	NULL,	NULL,	'{\"username\":\"root\",\"password\":\"\"}',	'2021-08-24 17:10:16',	'2021-08-24 17:10:16'),
(26,	4,	'admin',	'admin testing',	'',	'Login',	NULL,	NULL,	'{\"username\":\"admin\",\"password\":\"\"}',	'2021-08-24 20:41:49',	'2021-08-24 20:41:49'),
(27,	1,	'root',	'root',	'',	'Login',	NULL,	NULL,	'{\"username\":\"root\",\"password\":\"\"}',	'2021-08-24 20:42:01',	'2021-08-24 20:42:01'),
(28,	4,	'admin',	'admin testing',	'',	'Login',	NULL,	NULL,	'{\"username\":\"admin\",\"password\":\"\"}',	'2021-08-24 20:46:43',	'2021-08-24 20:46:43'),
(29,	5,	'toko',	'Toko',	'',	'Login',	NULL,	NULL,	'{\"username\":\"toko\",\"password\":\"\"}',	'2021-08-24 20:47:02',	'2021-08-24 20:47:02'),
(30,	6,	'supplier',	'Supplier',	'',	'Login',	NULL,	NULL,	'{\"username\":\"supplier\",\"password\":\"\"}',	'2021-08-24 20:48:37',	'2021-08-24 20:48:37'),
(31,	6,	'supplier',	'Supplier',	'',	'Login',	NULL,	NULL,	'{\"username\":\"supplier\",\"password\":\"\"}',	'2021-08-24 20:49:07',	'2021-08-24 20:49:07'),
(32,	4,	'admin',	'admin testing',	'',	'Login',	NULL,	NULL,	'{\"username\":\"admin\",\"password\":\"\"}',	'2021-08-24 20:49:22',	'2021-08-24 20:49:22'),
(33,	1,	'root',	'root',	'',	'Login',	NULL,	NULL,	'{\"username\":\"root\",\"password\":\"\"}',	'2021-08-24 20:49:29',	'2021-08-24 20:49:29');

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1,	'2014_10_12_000000_create_users_table',	1),
(2,	'2014_10_12_100000_create_password_resets_table',	1),
(3,	'2016_11_15_072530_reconstruct_user',	1),
(4,	'2016_11_15_072531_configs',	1),
(5,	'2016_11_15_072600_widgets',	1),
(6,	'2016_11_15_072610_relateds',	1),
(7,	'2016_11_15_074512_privilege',	1),
(8,	'2016_11_15_075108_logs',	1),
(9,	'2016_11_15_080003_create_root_user',	1),
(10,	'2016_12_01_065104_email_templates',	1),
(11,	'2019_08_19_000000_create_failed_jobs_table',	1),
(13,	'2021_08_24_055932_create_suppliers_table',	2),
(14,	'2021_08_24_055939_create_products_table',	2),
(16,	'2021_08_24_055924_create_stores_table',	3),
(17,	'2021_08_24_061101_create_orders_table',	3),
(18,	'2021_08_25_002125_add_column_email_at_stores_table',	4),
(19,	'2021_08_25_002253_add_column_password_at_stores_table',	5),
(20,	'2021_08_25_002704_add_column_random_code_at_stores_table',	6),
(21,	'2021_08_25_010632_add_column_email_verified_at_at_stores_table',	7),
(22,	'2021_08_25_012048_add_column_email_verified_at_and_random_code_at_suppliers_table',	8);

CREATE TABLE `module_privileges` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `privilege_id` int(10) unsigned NOT NULL,
  `module` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `act` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `module_privileges_privilege_id_foreign` (`privilege_id`),
  CONSTRAINT `module_privileges_privilege_id_foreign` FOREIGN KEY (`privilege_id`) REFERENCES `privileges` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `module_privileges` (`id`, `privilege_id`, `module`, `act`, `created_at`, `updated_at`) VALUES
(44,	1,	'site-setting',	'config',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(45,	1,	'master-store',	'index',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(46,	1,	'master-store',	'edit',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(47,	1,	'master-store',	'create',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(48,	1,	'master-store',	'publish',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(49,	1,	'master-supplier',	'index',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(50,	1,	'master-supplier',	'edit',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(51,	1,	'master-supplier',	'create',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(52,	1,	'master-supplier',	'publish',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(53,	1,	'master-product',	'index',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(54,	1,	'master-product',	'edit',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(55,	1,	'master-product',	'create',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(56,	1,	'master-product',	'publish',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(57,	1,	'transction-order',	'index',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(58,	1,	'transction-order',	'edit',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(59,	1,	'transction-order',	'create',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(60,	1,	'admin-log',	'index',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(61,	1,	'admin-log',	'download',	'2021-08-24 20:42:24',	'2021-08-24 20:42:24'),
(62,	2,	'master-store',	'index',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(63,	2,	'master-store',	'edit',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(64,	2,	'master-store',	'create',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(65,	2,	'master-store',	'publish',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(66,	2,	'master-supplier',	'index',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(67,	2,	'master-product',	'index',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(68,	2,	'transction-order',	'index',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(69,	2,	'transction-order',	'edit',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(70,	2,	'transction-order',	'create',	'2021-08-24 20:44:34',	'2021-08-24 20:44:34'),
(71,	3,	'master-store',	'index',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(72,	3,	'master-supplier',	'index',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(73,	3,	'master-supplier',	'edit',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(74,	3,	'master-supplier',	'create',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(75,	3,	'master-supplier',	'publish',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(76,	3,	'master-product',	'index',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(77,	3,	'master-product',	'edit',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(78,	3,	'master-product',	'create',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(79,	3,	'master-product',	'publish',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(80,	3,	'transction-order',	'index',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(81,	3,	'admin-log',	'index',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38'),
(82,	3,	'admin-log',	'download',	'2021-08-24 20:45:38',	'2021-08-24 20:45:38');

CREATE TABLE `orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `store_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `order` int(11) NOT NULL,
  `is_approve` enum('0','1') COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_store_id_foreign` (`store_id`),
  KEY `orders_product_id_foreign` (`product_id`),
  CONSTRAINT `orders_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `orders_store_id_foreign` FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `orders` (`id`, `store_id`, `product_id`, `order`, `is_approve`, `created_at`, `updated_at`) VALUES
(1,	1,	1,	1,	'0',	'2021-08-24 09:21:20',	'2021-08-24 09:23:45'),
(2,	1,	2,	2,	'0',	'2021-08-24 09:23:55',	'2021-08-24 09:23:55'),
(3,	2,	3,	3,	'0',	'2021-08-24 09:24:14',	'2021-08-24 09:24:14'),
(4,	2,	4,	4,	'0',	'2021-08-24 09:24:25',	'2021-08-24 09:24:25');

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `privileges` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `label` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `privileges` (`id`, `label`, `created_at`, `updated_at`) VALUES
(1,	'admin',	'2021-08-23 21:35:11',	'2021-08-23 21:35:11'),
(2,	'toko',	'2021-08-23 21:35:28',	'2021-08-23 21:35:28'),
(3,	'supplier',	'2021-08-23 21:35:43',	'2021-08-23 21:35:43');

CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `supplier_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_supplier_id_foreign` (`supplier_id`),
  KEY `products_is_active_index` (`is_active`),
  CONSTRAINT `products_supplier_id_foreign` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `products` (`id`, `supplier_id`, `name`, `stock`, `is_active`, `created_at`, `updated_at`) VALUES
(1,	1,	'product A',	10,	1,	'2021-08-24 09:01:20',	'2021-08-24 09:01:20'),
(2,	1,	'produk B',	20,	1,	'2021-08-24 09:01:35',	'2021-08-24 09:01:35'),
(3,	2,	'produk C',	15,	1,	'2021-08-24 09:01:44',	'2021-08-24 09:01:44'),
(4,	2,	'produk D',	25,	1,	'2021-08-24 09:01:52',	'2021-08-24 09:02:53');

CREATE TABLE `relateds` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uniqid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `module` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `related` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `related_uniqid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `stores` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `random_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email_verified_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stores_is_active_index` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `stores` (`id`, `name`, `email`, `password`, `random_code`, `is_active`, `created_at`, `updated_at`, `email_verified_at`) VALUES
(1,	'Toko Alpha',	'',	'',	'',	1,	'2021-08-24 08:38:59',	'2021-08-24 08:50:48',	NULL),
(2,	'Toko Beta',	'',	'',	'',	1,	'2021-08-24 08:39:05',	'2021-08-24 08:50:45',	NULL),
(7,	'nanda.giw',	'nanda.giw@gmail.com',	'$2y$10$VJwFWmCwz7B9jMnsG7WR9e.vkhhuy3tWoxDrn6st86VCxy/0IBu6i',	'w471q',	1,	'2021-08-24 21:04:54',	'2021-08-24 21:47:29',	NULL);

CREATE TABLE `suppliers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `random_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email_verified_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `suppliers_is_active_index` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `suppliers` (`id`, `name`, `email`, `password`, `random_code`, `is_active`, `created_at`, `updated_at`, `email_verified_at`) VALUES
(1,	'supplier 1',	'nanda.giw@gmail.com',	'$2y$10$BEP4DZUwhwbfRshHlcV7zu30tZJUlAZvN2vmnj3M6OZgSNLi9mQOm',	'',	1,	'2021-08-24 15:49:24',	NULL,	NULL),
(2,	'supplier 2',	'nanda.giw@gmail.com',	'$2y$10$BEP4DZUwhwbfRshHlcV7zu30tZJUlAZvN2vmnj3M6OZgSNLi9mQOm',	'',	1,	'2021-08-24 15:49:46',	'2021-08-24 08:55:46',	NULL);

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `forgot_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `forgot_token_expired` datetime DEFAULT NULL,
  `is_enable` enum('Yes','No') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'No',
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `privilege_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`),
  UNIQUE KEY `users_forgot_token_unique` (`forgot_token`),
  KEY `users_privilege_id_foreign` (`privilege_id`),
  CONSTRAINT `users_privilege_id_foreign` FOREIGN KEY (`privilege_id`) REFERENCES `privileges` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `users` (`id`, `name`, `display_name`, `email`, `password`, `forgot_token`, `forgot_token_expired`, `is_enable`, `remember_token`, `created_at`, `updated_at`, `privilege_id`) VALUES
(1,	'root',	'root',	'root@root.com',	'$2y$10$ugl9MxCQlN2FNlF1Me/GlerFWkmeUNF4ujUZWUFRjsQHAFc54KeN2',	NULL,	NULL,	'Yes',	'KspoUAwy0jiaSPDG6XX2MTfmdUfMhxCO9W5RpSdHUkzk7QJBnTPiJLJ64YLM',	'2021-08-23 21:24:47',	'2021-08-23 21:24:47',	NULL),
(2,	'superadmin',	'superadmin',	'superadmin@webadmin.com',	'$2y$10$ENzrJ.m7WJotwwcoiqpfTeL7WivtlXTtBX/a1P9TC0onSw.G09h1u',	NULL,	NULL,	'Yes',	'TaTUUFDLCHsFNQO99RLr2Cr7zbha4dav78EcsWVHcmuOvwV5QUsP2qkt3ogQ',	'2021-08-23 21:24:47',	'2021-08-23 21:24:47',	NULL),
(4,	'admin',	'admin testing',	'laravel.test@gmail.com',	'$2y$10$5Hrzx0vCJRdQlICBIv3V0.EjvVvw/Au03npjXtgVaxQ8Pt4OQxacG',	NULL,	NULL,	'Yes',	NULL,	'2021-08-24 20:38:46',	NULL,	1),
(5,	'toko',	'Toko',	'nanda.giw@gmail.com',	'$2y$10$Xf/D.ThjoWPJj8qwuZRbQOGmwFfXxjdXFARsVlQVgm3uRGjWWUTEO',	NULL,	NULL,	'Yes',	NULL,	'2021-08-24 20:43:42',	'2021-08-24 20:43:42',	2),
(6,	'supplier',	'Supplier',	'nanda.giw@gmail.com',	'$2y$10$LZ.vr9jhM9t2gQrhFDdZteEK/zSzwa.siMjJeYXKyL89mJuOEMlcm',	NULL,	NULL,	'Yes',	NULL,	'2021-08-24 20:46:33',	'2021-08-24 20:46:33',	3);

CREATE TABLE `user_password_histories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `action` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_password_histories_user_id_foreign` (`user_id`),
  CONSTRAINT `user_password_histories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `user_password_histories` (`id`, `user_id`, `password`, `action`, `created_at`, `updated_at`) VALUES
(1,	1,	'$2y$10$mjK.AtvAgzL9YiGh.aA0FemWI919GgfxiVQnju80PZYWAIzZ8ht3.',	'migration',	'2021-08-23 21:24:47',	'2021-08-23 21:24:47'),
(2,	2,	'$2y$10$CX7Ddppf1aFbofMES0Buqef/8J.NI3bsSq8J/YMIRvYa7maPvd1JC',	'migration',	'2021-08-23 21:24:47',	'2021-08-23 21:24:47'),
(3,	5,	'$2y$10$Xf/D.ThjoWPJj8qwuZRbQOGmwFfXxjdXFARsVlQVgm3uRGjWWUTEO',	'crud',	'2021-08-24 20:43:42',	'2021-08-24 20:43:42'),
(4,	6,	'$2y$10$LZ.vr9jhM9t2gQrhFDdZteEK/zSzwa.siMjJeYXKyL89mJuOEMlcm',	'crud',	'2021-08-24 20:46:33',	'2021-08-24 20:46:33');

CREATE TABLE `widgets` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uniqid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `module` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `widget_detail` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `widget_id` bigint(20) unsigned NOT NULL,
  `lang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `field_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `val` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `widget_detail_widget_id_lang_field_name_unique` (`widget_id`,`lang`,`field_name`),
  CONSTRAINT `widget_detail_widget_id_foreign` FOREIGN KEY (`widget_id`) REFERENCES `widgets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- 2021-08-25 05:44:08
