DROP DATABASE IF EXISTS identificador_dpi_gt;

CREATE DATABASE identificador_dpi_gt;

USE identificador_dpi_gt;

-- -------------------------------------------------------------------------------------------- --
-- Estructura de la tabla departamento
-- -------------------------------------------------------------------------------------------- --

DROP TABLE IF EXISTS departamento;
CREATE TABLE departamento(
    departamento_id INT NOT NULL AUTO_INCREMENT,
    departamento_codigo INT NOT NULL,
    departamento_nombre VARCHAR(45) NOT NULL,
    CONSTRAINT PK_departamento_id PRIMARY KEY (departamento_id)
);

-- -------------------------------------------------------------------------------------------- --
-- Estructura de la tabla municipio
-- -------------------------------------------------------------------------------------------- --

DROP TABLE IF EXISTS municipio;
CREATE TABLE municipio(
    departamento_id INT NOT NULL,
    municipio_id INT NOT NULL AUTO_INCREMENT,
    municipio_nombre VARCHAR(255) NOT NULL,
    CONSTRAINT PK_municipio_id PRIMARY KEY (municipio_id)
);