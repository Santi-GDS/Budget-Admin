CREATE DATABASE budget;

USE budget;

CREATE TABLE operations (
id INT UNSIGNED PRIMARY KEY auto_increment,
concept VARCHAR(100) NOT NULL,
amount INT NOT NULL,
type VARCHAR(20) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
deleted_at DATETIME -- Fecha de borrado del registro completo
);