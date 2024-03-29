

CREATE TABLE `heroku_c15972f22ac9d85`.`tipo_usuario` (
  `ID_TIPO_USUARIO` INT NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` VARCHAR(100) NULL,
  `ESTADO` DECIMAL(1) NULL,
  `FECHA_REGISTRO` DATE NULL,
  PRIMARY KEY (`ID_TIPO_USUARIO`));


CREATE TABLE `heroku_c15972f22ac9d85`.`usuario` (
  `ID_USUARIO` int(11) NOT NULL,
  `TIPO_USUARIO` int(11) DEFAULT NULL,
  `USUARIO` varchar(100) DEFAULT NULL,
  `PASS` varchar(10) DEFAULT NULL,
  `NOMBRE` varchar(45) DEFAULT NULL,
  `APELLIDO` varchar(45) DEFAULT NULL,
  `TELEFONO` varchar(45) DEFAULT NULL,
  `CORREO` varchar(45) DEFAULT NULL,
  `FECHA_NACIMIENTO` date DEFAULT NULL,
  `ESTADO` int(1) DEFAULT NULL,
  `FECHA_REGISTRO` date DEFAULT NULL,
  PRIMARY KEY (`ID_USUARIO`),
  UNIQUE KEY `ID_USUARIO_UNIQUE` (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;



CREATE TABLE MEDICO 
(
ID_MEDICO INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
NOMBRE VARCHAR(100),
APELLIDO VARCHAR(100),
TELEFONO VARCHAR(100),
CORREO VARCHAR(100),
FECHA_NACIMIENTO DATE,
FECHA_REGISTRO TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE CLIENTE 
(
ID_CLIENTE INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
NOMBRE VARCHAR(100),
APELLIDO VARCHAR(100),
TELEFONO VARCHAR(100),
CORREO VARCHAR(100),
FECHA_NACIMIENTO DATE,
FECHA_REGISTRO TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);