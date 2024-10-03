-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2024 a las 20:21:30
-- Versión del servidor: 9.0.1
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `skills_bank`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills_a`
--

CREATE TABLE `skills_a` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `effect` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `skills_a`
--

INSERT INTO `skills_a` (`id`, `name`, `effect`) VALUES
(1, 'Attack +3', 'Grants Atk+3.'),
(2, 'Defense +3', 'Grants Def+3.'),
(3, 'Speed +3', 'Grants Spd+3.'),
(4, 'Death Blow 4', 'If unit initiates combat, grants Atk+8 during combat.'),
(5, 'Fury 3', 'Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.'),
(6, 'Life and Death 3', 'Grants Atk/Spd+5. Inflicts Def/Res-5.'),
(7, 'Brazen Atk/Spd 3', 'If unit’s HP ≤ 80% at start of combat, grants Atk/Spd+7 during combat.'),
(8, 'Brazen Atk/Def 3', 'If unit’s HP ≤ 80% at start of combat, grants Atk/Def+7 during combat.'),
(9, 'Brazen Atk/Res 3', 'If unit’s HP ≤ 80% at start of combat, grants Atk/Res+7 during combat.'),
(10, 'Atk/Spd Solo 4', 'If unit is not adjacent to an ally, grants Atk/Spd+7 during combat.'),
(11, 'Atk/Def Solo 4', 'If unit is not adjacent to an ally, grants Atk/Def+7 during combat.'),
(12, 'Atk/Res Solo 4', 'If unit is not adjacent to an ally, grants Atk/Res+7 during combat.'),
(13, 'Sturdy Impact', 'If unit initiates combat, grants Atk+6 and Def+10 during combat and foe cannot make a follow-up attack.'),
(14, 'Mirror Impact', 'If unit initiates combat, grants Atk+6 and Res+10 during combat and foe cannot make a follow-up attack.'),
(15, 'Swift Impact', 'If unit initiates combat, grants Spd+7 and Res+10 during combat and foe cannot make a follow-up attack.'),
(16, 'Death Blow 3', 'If unit initiates combat, grants Atk+6 during combat.'),
(17, 'Atk/Spd Push 4', 'At start of combat, if unit’s HP ≥ 25%, grants Atk/Spd+7, but after combat, if unit attacked, deals 5 damage to unit.'),
(18, 'Atk/Def Push 4', 'At start of combat, if unit’s HP ≥ 25%, grants Atk/Def+7, but after combat, if unit attacked, deals 5 damage to unit.'),
(19, 'Atk/Res Push 4', 'At start of combat, if unit’s HP ≥ 25%, grants Atk/Res+7, but after combat, if unit attacked, deals 5 damage to unit.'),
(20, 'Fury 4', 'Grants Atk/Spd/Def/Res+4. After combat, deals 8 damage to unit.'),
(21, 'Swift Sparrow 3', 'If unit initiates combat, grants Atk/Spd+6 during combat.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills_b`
--

CREATE TABLE `skills_b` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `effect` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `skills_b`
--

INSERT INTO `skills_b` (`id`, `name`, `effect`) VALUES
(1, 'Quick Riposte 3', 'If unit’s HP ≥ 70% and foe initiates combat, unit makes a guaranteed follow-up attack.'),
(2, 'Vantage 3', 'If unit’s HP ≤ 75%, unit can counterattack before foe’s first attack.'),
(3, 'Desperation 3', 'If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit’s attack.'),
(4, 'Guard 3', 'If unit’s HP ≥ 80%, inflicts Special cooldown charge -1 on foe per attack during combat.'),
(5, 'Wrath 3', 'If unit’s HP ≤ 75%, Special cooldown count -1 at start of turn, and grants +10 damage when Special triggers.'),
(6, 'Lull Atk/Spd 3', 'Inflicts Atk/Spd-3 on foe and neutralizes foe’s bonuses to Atk/Spd (from skills like Fortify, Rally, etc.) during combat.'),
(7, 'Lull Atk/Def 3', 'Inflicts Atk/Def-3 on foe and neutralizes foe’s bonuses to Atk/Def (from skills like Fortify, Rally, etc.) during combat.'),
(8, 'Lull Spd/Def 3', 'Inflicts Spd/Def-3 on foe and neutralizes foe’s bonuses to Spd/Def (from skills like Fortify, Rally, etc.) during combat.'),
(9, 'Lull Spd/Res 3', 'Inflicts Spd/Res-3 on foe and neutralizes foe’s bonuses to Spd/Res (from skills like Fortify, Rally, etc.) during combat.'),
(10, 'Special Spiral 3', 'If Special triggers before or during combat, grants Special cooldown count -2 after combat.'),
(11, 'Null Follow-Up 3', 'Neutralizes effects that guarantee foe’s follow-up attacks or prevent unit’s follow-up attacks during combat.'),
(12, 'Mystic Boost 3', 'Disables foe’s skills that “calculate damage using the lower of foe’s Def or Res” and restores 6 HP after combat.'),
(13, 'Windsweep 3', 'If unit initiates combat, unit can prevent counterattacks from sword, lance, axe, dragonstone, and beast damage foes.'),
(14, 'Watersweep 3', 'If unit initiates combat, unit can prevent counterattacks from tome, staff, and dragonstone foes.'),
(15, 'Hit and Run', 'After combat, unit moves 1 space away.'),
(16, 'Drag Back', 'If unit initiates combat, unit and foe move 1 space toward the opposite side after combat.'),
(17, 'Lancebreaker 3', 'If unit’s HP ≥ 50%, unit makes a guaranteed follow-up attack and foe cannot follow up if using a lance.'),
(18, 'Swordbreaker 3', 'If unit’s HP ≥ 50%, unit makes a guaranteed follow-up attack and foe cannot follow up if using a sword.'),
(19, 'Axebreaker 3', 'If unit’s HP ≥ 50%, unit makes a guaranteed follow-up attack and foe cannot follow up if using an axe.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills_c`
--

CREATE TABLE `skills_c` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `effect` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `skills_c`
--

INSERT INTO `skills_c` (`id`, `name`, `effect`) VALUES
(1, 'Spur Atk 3', 'Grants adjacent allies Atk+4 during combat.'),
(2, 'Drive Def 2', 'Grants allies within 2 spaces Def+3 during combat.'),
(3, 'Threaten Atk 3', 'At start of turn, inflicts Atk-5 on foes within 2 spaces through their next actions.'),
(4, 'Hone Speed 4', 'Grants Spd+7 to adjacent allies at start of turn.'),
(5, 'Fortify Res 3', 'Grants Res+4 to adjacent allies at start of turn.'),
(6, 'Joint Drive Atk', 'Grants Atk+4 to allies within 2 spaces during combat. If unit is within 2 spaces of an ally, grants Atk+4 to unit during combat.'),
(7, 'Joint Drive Spd', 'Grants Spd+4 to allies within 2 spaces during combat. If unit is within 2 spaces of an ally, grants Spd+4 to unit during combat.'),
(8, 'Panic Ploy 3', 'At start of turn, converts bonuses on foes in cardinal directions with HP ≤ unit’s HP - 3 into penalties through their next actions.'),
(9, 'Fortify Def 3', 'Grants Def+4 to adjacent allies at start of turn.'),
(10, 'Fortify Res 3', 'Grants Res+4 to adjacent allies at start of turn.'),
(11, 'Spur Atk 3', 'Grants adjacent allies Atk+4 during combat.'),
(12, 'Drive Def 2', 'Grants allies within 2 spaces Def+3 during combat.'),
(13, 'Drive Res 2', 'Grants allies within 2 spaces Res+3 during combat.'),
(14, 'Threaten Atk 3', 'At start of turn, inflicts Atk-5 on foes within 2 spaces through their next actions.'),
(15, 'Threaten Spd 3', 'At start of turn, inflicts Spd-5 on foes within 2 spaces through their next actions.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `skills_a`
--
ALTER TABLE `skills_a`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `skills_b`
--
ALTER TABLE `skills_b`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `skills_c`
--
ALTER TABLE `skills_c`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `skills_a`
--
ALTER TABLE `skills_a`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `skills_b`
--
ALTER TABLE `skills_b`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `skills_c`
--
ALTER TABLE `skills_c`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
