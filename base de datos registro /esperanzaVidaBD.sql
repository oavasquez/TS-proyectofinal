-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-11-2017 a las 03:31:13
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `esperanzaVidaBD`
--
CREATE DATABASE IF NOT EXISTS `esperanzaVidaBD` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `esperanzaVidaBD`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblNatalidad`
--

CREATE TABLE `tblNatalidad` (
  `anioNatalidad` int(11) NOT NULL,
  `tasaNatalidad` int(11) DEFAULT NULL,
  `totalPoblacion` int(11) DEFAULT NULL,
  `idPais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncar tablas antes de insertar `tblNatalidad`
--

TRUNCATE TABLE `tblNatalidad`;
--
-- Volcado de datos para la tabla `tblNatalidad`
--

INSERT INTO `tblNatalidad` (`anioNatalidad`, `tasaNatalidad`, `totalPoblacion`, `idPais`) VALUES
(1960, 50, 2038637, 1),
(1960, 45, 1333040, 2),
(1960, 48, 4210747, 3),
(1960, 47, 2762899, 4),
(1961, 50, 2096407, 1),
(1961, 44, 1381917, 2),
(1961, 48, 4336143, 3),
(1961, 47, 2843240, 4),
(1962, 49, 2155652, 1),
(1962, 43, 1432585, 2),
(1962, 47, 4464249, 3),
(1962, 47, 2927857, 4),
(1963, 49, 2216707, 1),
(1963, 43, 1484510, 2),
(1963, 47, 4595510, 3),
(1963, 46, 3015887, 4),
(1964, 49, 2280045, 1),
(1964, 42, 1537041, 2),
(1964, 47, 4730540, 3),
(1964, 46, 3106186, 4),
(1965, 49, 2346010, 1),
(1965, 40, 1589621, 2),
(1965, 46, 4869716, 3),
(1965, 45, 3197863, 4),
(1966, 49, 2414807, 1),
(1966, 39, 1642186, 2),
(1966, 46, 5013153, 3),
(1966, 45, 3290411, 4),
(1967, 49, 2486414, 1),
(1967, 37, 1694710, 2),
(1967, 46, 5160609, 3),
(1967, 44, 3383701, 4),
(1968, 48, 2560727, 1),
(1968, 36, 1746869, 2),
(1968, 46, 5311615, 3),
(1968, 44, 3477742, 4),
(1969, 48, 2637517, 1),
(1969, 34, 1798311, 2),
(1969, 45, 5465512, 3),
(1969, 43, 3572707, 4),
(1970, 48, 2716659, 1),
(1970, 33, 1848866, 2),
(1970, 45, 5621792, 3),
(1970, 43, 3668595, 4),
(1971, 47, 2798125, 1),
(1971, 32, 1898360, 2),
(1971, 45, 5780480, 3),
(1971, 42, 3765166, 4),
(1972, 47, 2882113, 1),
(1972, 31, 1947048, 2),
(1972, 45, 5941567, 3),
(1972, 42, 3861931, 4),
(1973, 47, 2968994, 1),
(1973, 30, 1995743, 2),
(1973, 45, 6104530, 3),
(1973, 42, 3958323, 4),
(1974, 46, 3059254, 1),
(1974, 29, 2045580, 2),
(1974, 45, 6268707, 3),
(1974, 41, 4053713, 4),
(1975, 46, 3153261, 1),
(1975, 29, 2097407, 2),
(1975, 45, 6433728, 3),
(1975, 41, 4147525, 4),
(1976, 46, 3251158, 1),
(1976, 29, 2151497, 2),
(1976, 45, 6599214, 3),
(1976, 40, 4239675, 4),
(1977, 45, 3352835, 1),
(1977, 29, 2207725, 2),
(1977, 45, 6765516, 3),
(1977, 40, 4329964, 4),
(1978, 45, 3458104, 1),
(1978, 29, 2266154, 2),
(1978, 44, 6933906, 3),
(1978, 39, 4417516, 4),
(1979, 44, 3566665, 1),
(1979, 30, 2326704, 2),
(1979, 44, 7106145, 3),
(1979, 38, 4501316, 4),
(1980, 44, 3678286, 1),
(1980, 30, 2389310, 2),
(1980, 44, 7283459, 3),
(1980, 37, 4580704, 4),
(1981, 43, 3792938, 1),
(1981, 30, 2454129, 2),
(1981, 43, 7466488, 3),
(1981, 37, 4655364, 4),
(1982, 43, 3910657, 1),
(1982, 30, 2521168, 2),
(1982, 43, 7654819, 3),
(1982, 36, 4725720, 4),
(1983, 42, 4031349, 1),
(1983, 29, 2589930, 2),
(1983, 42, 7847472, 3),
(1983, 35, 4792903, 4),
(1984, 42, 4154887, 1),
(1984, 29, 2659781, 2),
(1984, 42, 8042897, 3),
(1984, 34, 4858532, 4),
(1985, 41, 4281189, 1),
(1985, 29, 2730233, 2),
(1985, 41, 8240060, 3),
(1985, 34, 4923860, 4),
(1986, 41, 4410158, 1),
(1986, 29, 2800986, 2),
(1986, 40, 8438604, 3),
(1986, 33, 4988943, 4),
(1987, 40, 4541804, 1),
(1987, 28, 2872211, 2),
(1987, 40, 8639108, 3),
(1987, 33, 5053714, 4),
(1988, 40, 4676361, 1),
(1988, 28, 2944557, 2),
(1988, 39, 8842575, 3),
(1988, 32, 5119035, 4),
(1989, 39, 4814137, 1),
(1989, 27, 3018955, 2),
(1989, 39, 9050465, 3),
(1989, 32, 5185943, 4),
(1990, 39, 4955328, 1),
(1990, 27, 3095995, 2),
(1990, 39, 9263813, 3),
(1990, 31, 5254984, 4),
(1991, 38, 5099951, 1),
(1991, 26, 3175649, 2),
(1991, 39, 9483270, 3),
(1991, 31, 5326657, 4),
(1992, 38, 5247836, 1),
(1992, 25, 3257466, 2),
(1992, 39, 9708544, 3),
(1992, 30, 5400331, 4),
(1993, 37, 5398805, 1),
(1993, 25, 3341004, 2),
(1993, 38, 9938692, 3),
(1993, 30, 5474000, 4),
(1994, 37, 5552625, 1),
(1994, 24, 3425690, 2),
(1994, 38, 10172297, 3),
(1994, 30, 5544945, 4),
(1995, 36, 5709051, 1),
(1995, 23, 3510926, 2),
(1995, 38, 10408489, 3),
(1995, 29, 5611115, 4),
(1996, 35, 5867849, 1),
(1996, 23, 3596732, 2),
(1996, 37, 10646674, 3),
(1996, 28, 5671925, 4),
(1997, 35, 6028882, 1),
(1997, 22, 3682725, 2),
(1997, 37, 10887634, 3),
(1997, 28, 5727755, 4),
(1998, 34, 6192026, 1),
(1998, 21, 3767373, 2),
(1998, 36, 11133501, 3),
(1998, 27, 5778706, 4),
(1999, 33, 6357221, 1),
(1999, 20, 3848723, 2),
(1999, 36, 11387203, 3),
(1999, 26, 5825187, 4),
(2000, 33, 6524283, 1),
(2000, 19, 3925443, 2),
(2000, 35, 11650743, 3),
(2000, 25, 5867626, 4),
(2001, 32, 6693061, 1),
(2001, 19, 3996798, 2),
(2001, 35, 11924946, 3),
(2001, 24, 5905962, 4),
(2002, 31, 6863157, 1),
(2002, 18, 4063204, 2),
(2002, 34, 12208848, 3),
(2002, 23, 5940303, 4),
(2003, 30, 7033821, 1),
(2003, 18, 4125971, 2),
(2003, 33, 12500478, 3),
(2003, 22, 5971535, 4),
(2004, 30, 7204153, 1),
(2004, 17, 4187038, 2),
(2004, 32, 12796925, 3),
(2004, 22, 6000775, 4),
(2005, 29, 7373430, 1),
(2005, 17, 4247841, 2),
(2005, 31, 13096028, 3),
(2005, 21, 6028961, 4),
(2006, 28, 7541406, 1),
(2006, 17, 4308794, 2),
(2006, 31, 13397008, 3),
(2006, 21, 6056478, 4),
(2007, 27, 7707972, 1),
(2007, 17, 4369469, 2),
(2007, 30, 13700286, 3),
(2007, 20, 6083475, 4),
(2008, 26, 7872658, 1),
(2008, 16, 4429508, 2),
(2008, 29, 14006366, 3),
(2008, 20, 6110301, 4),
(2009, 25, 8035021, 1),
(2009, 16, 4488263, 2),
(2009, 28, 14316208, 3),
(2009, 20, 6137276, 4),
(2010, 25, 8194778, 1),
(2010, 16, 4545280, 2),
(2010, 28, 14630417, 3),
(2010, 20, 6164626, 4),
(2011, 24, 8351600, 1),
(2011, 16, 4600474, 2),
(2011, 27, 14948919, 3),
(2011, 19, 6192560, 4),
(2012, 23, 8505646, 1),
(2012, 15, 4654122, 2),
(2012, 27, 15271056, 3),
(2012, 19, 6221246, 4),
(2013, 23, 8657785, 1),
(2013, 15, 4706401, 2),
(2013, 26, 15596214, 3),
(2013, 19, 6250777, 4),
(2014, 22, 8809216, 1),
(2014, 15, 4757575, 2),
(2014, 26, 15923559, 3),
(2014, 19, 6281189, 4),
(2015, 22, 8960829, 1),
(2015, 15, 4807852, 2),
(2015, 26, 16252429, 3),
(2015, 19, 6312478, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblPais`
--

CREATE TABLE `tblPais` (
  `idPais` int(11) NOT NULL,
  `nombrePais` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncar tablas antes de insertar `tblPais`
--

TRUNCATE TABLE `tblPais`;
--
-- Volcado de datos para la tabla `tblPais`
--

INSERT INTO `tblPais` (`idPais`, `nombrePais`) VALUES
(1, 'Honduras'),
(2, 'Costa Rica'),
(3, 'Guatemala'),
(4, 'El Salvador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tblNatalidad`
--
ALTER TABLE `tblNatalidad`
  ADD PRIMARY KEY (`anioNatalidad`,`idPais`),
  ADD KEY `fk_table1_tblPais_idx` (`idPais`);

--
-- Indices de la tabla `tblPais`
--
ALTER TABLE `tblPais`
  ADD PRIMARY KEY (`idPais`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tblPais`
--
ALTER TABLE `tblPais`
  MODIFY `idPais` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tblNatalidad`
--
ALTER TABLE `tblNatalidad`
  ADD CONSTRAINT `fk_table1_tblPais` FOREIGN KEY (`idPais`) REFERENCES `tblPais` (`idPais`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;