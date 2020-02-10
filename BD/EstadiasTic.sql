-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-02-2020 a las 22:50:19
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `EstadiasTic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Alumno`
--

CREATE TABLE `Alumno` (
  `id_alumno` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `numseguro` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `nivel` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `carrera` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `sede` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `estatus` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `id_asesorin` int(11) DEFAULT NULL,
  `id_asesoraca` int(11) DEFAULT NULL,
  `id_proyecto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Alumno`
--

INSERT INTO `Alumno` (`id_alumno`, `nombre`, `numseguro`, `nivel`, `carrera`, `sede`, `estatus`, `id_asesorin`, `id_asesoraca`, `id_proyecto`) VALUES
(3, '1', '1', '1', '1', '1', 'activo', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Area`
--

CREATE TABLE `Area` (
  `id_area` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `id_empresa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Area`
--

INSERT INTO `Area` (`id_area`, `nombre`, `id_empresa`) VALUES
(1, 'prueba', 1),
(2, 'postman', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `AsesorAcademico`
--

CREATE TABLE `AsesorAcademico` (
  `id_asesoraca` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `carrera` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `turno` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `estatus` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `AsesorAcademico`
--

INSERT INTO `AsesorAcademico` (`id_asesoraca`, `nombre`, `correo`, `telefono`, `carrera`, `turno`, `estatus`) VALUES
(1, 'prueba', 'prueba', 'prueba', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `AsesorIndustrial`
--

CREATE TABLE `AsesorIndustrial` (
  `id_asesorin` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `estatus` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `AsesorIndustrial`
--

INSERT INTO `AsesorIndustrial` (`id_asesorin`, `nombre`, `correo`, `telefono`, `id_empresa`, `estatus`) VALUES
(3, '1', '1', '1', 1, 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Empresa`
--

CREATE TABLE `Empresa` (
  `id_empresa` int(11) NOT NULL,
  `nombrecomercial` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `razonsocial` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `numempleados` int(11) DEFAULT NULL,
  `domicilio` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `giro` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `calificacion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `estatus` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Empresa`
--

INSERT INTO `Empresa` (`id_empresa`, `nombrecomercial`, `razonsocial`, `numempleados`, `domicilio`, `giro`, `calificacion`, `descripcion`, `estatus`) VALUES
(1, 'prueba', 'prueba', 240, 'prueba', 'prueba', '10', 'prueba', ''),
(3, '1', '1', 1, '1', '1', '1', '1', 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Proyecto`
--

CREATE TABLE `Proyecto` (
  `id_proyecto` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `responsable` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `calificacion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `comentarios` varchar(500) COLLATE utf8_spanish_ci DEFAULT NULL,
  `estatus` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `id_area` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Proyecto`
--

INSERT INTO `Proyecto` (`id_proyecto`, `nombre`, `responsable`, `calificacion`, `comentarios`, `estatus`, `id_area`) VALUES
(1, '1', '1', '1', '1', 'activo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE `Usuario` (
  `id` int(11) NOT NULL,
  `usuario` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `contraseña` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `tipo` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `estatus` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `Usuario`
--

INSERT INTO `Usuario` (`id`, `usuario`, `contraseña`, `tipo`, `estatus`) VALUES
(1, 'prueba', 'prueba', 'normal', ''),
(3, 'postman', 'postman', 'postman', 'activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Alumno`
--
ALTER TABLE `Alumno`
  ADD PRIMARY KEY (`id_alumno`),
  ADD KEY `id_asesorin` (`id_asesorin`),
  ADD KEY `id_asesoraca` (`id_asesoraca`),
  ADD KEY `id_proyecto` (`id_proyecto`);

--
-- Indices de la tabla `Area`
--
ALTER TABLE `Area`
  ADD PRIMARY KEY (`id_area`),
  ADD KEY `FK_area_empresa` (`id_empresa`);

--
-- Indices de la tabla `AsesorAcademico`
--
ALTER TABLE `AsesorAcademico`
  ADD PRIMARY KEY (`id_asesoraca`);

--
-- Indices de la tabla `AsesorIndustrial`
--
ALTER TABLE `AsesorIndustrial`
  ADD PRIMARY KEY (`id_asesorin`),
  ADD KEY `id_empresa` (`id_empresa`);

--
-- Indices de la tabla `Empresa`
--
ALTER TABLE `Empresa`
  ADD PRIMARY KEY (`id_empresa`);

--
-- Indices de la tabla `Proyecto`
--
ALTER TABLE `Proyecto`
  ADD PRIMARY KEY (`id_proyecto`),
  ADD KEY `fk-proyecto-area` (`id_area`);

--
-- Indices de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Alumno`
--
ALTER TABLE `Alumno`
  MODIFY `id_alumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `Area`
--
ALTER TABLE `Area`
  MODIFY `id_area` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `AsesorAcademico`
--
ALTER TABLE `AsesorAcademico`
  MODIFY `id_asesoraca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `AsesorIndustrial`
--
ALTER TABLE `AsesorIndustrial`
  MODIFY `id_asesorin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `Empresa`
--
ALTER TABLE `Empresa`
  MODIFY `id_empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `Proyecto`
--
ALTER TABLE `Proyecto`
  MODIFY `id_proyecto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Alumno`
--
ALTER TABLE `Alumno`
  ADD CONSTRAINT `fk_alumno_asesorIn` FOREIGN KEY (`id_asesorin`) REFERENCES `AsesorIndustrial` (`id_asesorin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_alumno_asesoraca` FOREIGN KEY (`id_asesoraca`) REFERENCES `AsesorAcademico` (`id_asesoraca`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_alumno_proyecto` FOREIGN KEY (`id_proyecto`) REFERENCES `Proyecto` (`id_proyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Area`
--
ALTER TABLE `Area`
  ADD CONSTRAINT `fk_area_empresa` FOREIGN KEY (`id_empresa`) REFERENCES `Empresa` (`id_empresa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `AsesorIndustrial`
--
ALTER TABLE `AsesorIndustrial`
  ADD CONSTRAINT `fk_asesorIn_empresa` FOREIGN KEY (`id_empresa`) REFERENCES `Empresa` (`id_empresa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Proyecto`
--
ALTER TABLE `Proyecto`
  ADD CONSTRAINT `fk_proyecto_area` FOREIGN KEY (`id_area`) REFERENCES `Area` (`id_area`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
