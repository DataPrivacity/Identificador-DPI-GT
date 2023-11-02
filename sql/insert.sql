-- -------------------------------------------------------------------------------------------- --
-- Insertamos datos a la tabla departamento
-- -------------------------------------------------------------------------------------------- --

INSERT INTO departamento (departamento_codigo, departamento_nombre)
VALUES (01, 'Guatemala'),
(02, 'El Progreso'),
(03, 'Sacatepéquez'),
(04, 'Chimaltenango'),
(05, 'Escuintla'),
(06, 'Santa Rosa'),
(07, 'Sololá'),
(08, 'Totonicapán'),
(09, 'Quetzaltenango'),
(10, 'Suchitepéquez'),
(11, 'Retalhuleu'),
(12, 'San Marcos'),
(13, 'Huehuetenango'),
(14, 'Quiché'),
(15, 'Baja Verapaz'),
(16, 'Alta Verapaz'),
(17, 'Petén'),
(18, 'Izabal'),
(19, 'Zacapa'),
(20, 'Chiquimula'),
(21, 'Jalapa'),
(22, 'Jutiapa');

-- -------------------------------------------------------------------------------------------- --
-- Insertamos datos a la tabla municipio
-- -------------------------------------------------------------------------------------------- --

INSERT INTO municipio (departamento_id, municipio_nombre)
VALUES (1, 'Santa Catarina Pinula'),
(1, 'San José Pinula'),
(1, 'San José del Golfo'),
(1, 'Palencia'),
(1, 'Chinautla'),
(1, 'San Pedro Ayampuc'),
(1, 'Mixco'),
(1, 'San Pedro Sacatepequez'),
(1, 'San Juan Sacatepequez'),
(1, 'San Raymundo'),
(1, 'Chuarrancho'),
(1, 'Fraijanes'),
(1, 'Amatitlán'),
(1, 'Villa Nueva'),
(1, 'Villa Canales'),
(1, 'San Miguel Petapa'),
(2, 'Guastatoya'),
(2, 'Morazán'),
(2, 'San Agustín Acasaguastlán'),
(2, 'San Cristóbal Acasaguastlán'),
(2, 'El Jícaro'),
(2, 'Sansare'),
(2, 'Sanarate'),
(2, 'San Antonio La Paz');