CREATE DATABASE account_managers;

CREATE TABLE account_managers.accounts (
	id INT auto_increment NOT NULL,
	account_name VARCHAR(255) NOT NULL,
	price DOUBLE NOT NULL,
	phone_number VARCHAR(100) NOT NULL,
	CONSTRAINT accounts_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE account_managers.accounts ADD phone_number varchar(100) NOT NULL;
ALTER TABLE account_managers.accounts CHANGE phone_number phone_number varchar(100) NOT NULL AFTER description;







