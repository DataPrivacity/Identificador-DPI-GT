DROP DATABASE IF EXISTS dpi;

CREATE DATABASE dpi;

USE dpi;

-- -------------------------------------------------------------------------------------------- --
-- Estructura de la tabla departamento
-- -------------------------------------------------------------------------------------------- --

DROP TABLE IF EXISTS departamento;
CREATE TABLE departamento(
    departamento_id INT NOT NULL AUTO_INCREMENT,
    departamento_codigo VARCHAR(2) NOT NULL,
    departamento_nombre VARCHAR(45) NOT NULL,
    CONSTRAINT PK_departamento_id PRIMARY KEY (departamento_id),
    CONSTRAINT UK_departamento_codigo UNIQUE KEY (departamento_codigo)
);

-- -------------------------------------------------------------------------------------------- --
-- Estructura de la tabla municipio
-- -------------------------------------------------------------------------------------------- --

DROP TABLE IF EXISTS municipio;
CREATE TABLE municipio(
    departamento_id INT NOT NULL,
    municipio_id INT NOT NULL AUTO_INCREMENT,
    municipio_codigo VARCHAR(4) NOT NULL,
    municipio_nombre VARCHAR(255) NOT NULL,
    CONSTRAINT PK_municipio_id PRIMARY KEY (municipio_id),
    CONSTRAINT UK_municipio_codigo UNIQUE KEY (municipio_codigo)
);