CREATE database sharing_meal;
USE sharing_meal;
SET NAMES utf8mb4;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar(255) NULL,
  `when_event` DATETIME NOT NULL,
  `max_reservations` int(10) NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  `created_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `stars` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  CONSTRAINT `fk_meal_res` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- meal
insert into meal (title, description, location, when_event, max_reservations, price, created_date) values ('Chicken Curry', 'A delicious indian food with gravy', 'Copenhagen', '2021-12-11 17:16:50', 5, 99.99, '2021-11-10');
insert into meal (title, description, location, when_event, max_reservations, price, created_date) values ('Butter Chicken', 'A delicious curry with blend of herbs', 'Copenhagen', '2021-12-18 18:16:50', 5, 149.99, '2021-11-17');
insert into meal (title, description, location, when_event, max_reservations, price, created_date) values ('Tikka Masala', 'Classic indian curry with lime and corriander', 'Farum', '2022-01-13 13:16:50', 6, 149.99, '2021-12-10');
insert into meal (title, description, location, when_event, max_reservations, price, created_date) values ('Korma', 'Mild curry dish with meat and almonds', 'Gladsaxe', '2022-02-11 12:16:50', 7, 199.99, '2022-01-10');
insert into meal (title, description, location, when_event, max_reservations, price, created_date) values ('Chicken Mughlai', 'Chicken dish with honey yoghurt and cashews', 'Copenhagen', '2022-03-11 19:16:50', 5, 189.99, '2022-01-25');
insert into meal (title, description, location, when_event, max_reservations, price, created_date) values ('Biryani', 'Rice with meat and blend of herbs', 'Frederiksberg', '2022-04-13 20:16:50', 8, 179.99, '2022-03-22');

-- review
insert into review (title, description, stars, created_date, meal_id) values ('Excellent taste', 'it taste really nice a delicious treat', '5', '2022-01-10', 2);
insert into review (title, description, stars, created_date, meal_id) values ('Nice experience', 'had a very good experience food flavours are nice', '4', '2022-01-22', 2);
insert into review (title, description, stars, created_date, meal_id) values ('Small portion', 'Food was ok but served in small portion', '3', '2022-02-08', 3);
insert into review (title, description, stars, created_date, meal_id) values ('Taste faboulus', 'This dish is very tasty enjoyed it', '5', '2022-12-16', 6);
insert into review (title, description, stars, created_date, meal_id) values ('Warm delicious food', 'the serving was warm and delicious', '5', '2022-03-10', 4);
insert into review (title, description, stars, created_date, meal_id) values ('Lack of Herbs', 'the dish was missing adequate herbs', '2', '2021-12-10', 2);
insert into review (title, description, stars, created_date, meal_id) values ('Wonderful experience', 'Had really nice time the food smell nice', '5', '2021-12-22', 1);
insert into review (title, description, stars, created_date, meal_id) values ('Old food', 'did not like the food was not fresh', '2', '2022-02-16', 5);
insert into review (title, description, stars, created_date, meal_id) values ('Yummy Dish', 'Such a Yummy dish with fresh serving', '5', '2022-03-10', 6);
insert into review (title, description, stars, created_date, meal_id) values ('High price', 'the food is ok but the price is high', '3', '2021-12-19', 1);



-- reservations
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('3', '2', '2022-01-10', 'Babu Baraal', '37378224', 'babu123@gmail.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('2', '3', '2022-02-10', 'Erika smith', '42373224', 'esmith@gmail.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('4', '4', '2022-03-01', 'Shaun Tait', '38978224', 'shauntait@gmail.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('3', '1', '2021-12-10', 'Tim Seafort', '35758224', 'tseafort@hotmail.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('5', '5', '2021-12-22', 'Josh Hazel', '87750924', 'jhazel@yahoo.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('3', '1', '2022-02-28', 'Tony Gilbert', '98438212', 'tgilbert@hotmail.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('4', '6', '2022-03-10', 'Ricky Bahl', '43540524', 'rbahl@gmail.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_name, contact_phonenumber, contact_email) values ('2', '4', '2021-12-15', 'Darren Sammy', '35013209', 'dsammy@yahoo.com');

