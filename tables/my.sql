-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Дек 02 2020 г., 08:57
-- Версия сервера: 5.5.25
-- Версия PHP: 5.2.12

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `my`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `title` varchar(100) NOT NULL,
  `title_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`title_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`title`, `title_id`) VALUES
('Процессоры', 1),
('Клавиатуры', 2),
('Смартфоны', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `title` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- Дамп данных таблицы `items`
--

INSERT INTO `items` (`title`, `id`, `price`, `description`, `item_id`) VALUES
('Ryzen 5 3500', 1, 120, 'Описание Ryzen 5 3500.', 1),
('Logitech K280e', 2, 20, 'Описание Logitech K280e.', 2),
('Realme 6', 3, 200, 'Описание Realme 6.', 3),
('Intel Core i3 10100', 1, 150, 'Описание i3 10100.', 4),
('Logitech Illuminated Keyboard K800', 2, 100, 'Описание Logitech Illuminated Keyboard K800.', 5),
('Xiaomi POCO X3', 3, 180, 'Описание POCO X3.', 6),
('Ryzen 7 3700', 1, 280, 'Описание Ryzen 7 3700.', 7),
('Intel core i7 10700F', 1, 360, 'Описание Intel core i7 10700F.', 8),
('Intel Core i5 8400', 1, 190, 'Описание Intel Core i5 8400.', 9),
('Ryzen 5 3600', 1, 230, 'Описание Ryzen 5 3600.', 10),
('Intel core i9 10900F', 1, 500, 'Описание Intel core i9 10900F.', 11),
('Intel core i5 10400F', 1, 180, 'Описание Intel core i5 10400F.', 12),
('Клавиатура LENOVO 300', 2, 13, 'Описание Клавиатура LENOVO 300.', 13),
('LENOVO Legion K500 RGB', 2, 75, 'Описание LENOVO Legion K500 RGB.', 14),
('HP Pavilion Gaming 500', 2, 33, 'Описание HP Pavilion Gaming 500.', 15),
('HYPERX Alloy FPS Pro CherryMX Red', 2, 110, 'Описание HYPERX Alloy FPS Pro CherryMX Red.', 16),
('HP Pavilion 600', 2, 45, 'Описание HP Pavilion 600.', 17),
('HYPERX Alloy Origins', 2, 145, 'Описание HYPERX Alloy Origins.', 18),
('Xiaomi Redmi Note 8 Pro', 3, 200, 'Описание Xiaomi Redmi Note 8 Pro.', 19),
('SAMSUNG Galaxy A51', 3, 240, 'Описание SAMSUNG Galaxy A51.', 20),
('SAMSUNG Galaxy M21', 3, 200, 'Описание SAMSUNG Galaxy M21.', 21),
('XIAOMI Mi 10', 3, 770, 'Описание XIAOMI Mi 10.', 22),
('XIAOMI Mi Note 10 Lite', 3, 360, 'Описание XIAOMI Mi Note 10 Lite.', 23),
('REALME C3', 3, 130, 'Описание REALME C3.', 24);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
