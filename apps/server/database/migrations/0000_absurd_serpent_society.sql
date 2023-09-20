CREATE TABLE `users` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`full_name` varchar(255),
	`email` varchar(100),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
