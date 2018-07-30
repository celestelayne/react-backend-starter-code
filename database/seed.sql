-- \c moviesdb

DELETE FROM movies;
DELETE FROM favorites;

INSERT INTO movies VALUES (DEFAULT, 'Guardians of the Galaxy Volume 2', 2017, 'PG-13', '136 min', 'Action');
INSERT INTO movies VALUES (DEFAULT, '12 Angry Men', 1957, 'PG-13', '96 min', 'Drama');
INSERT INTO movies VALUES (DEFAULT, 'Inception', 2010, 'PG-13', '148 min', 'Action');
INSERT INTO movies VALUES (DEFAULT, 'The Matrix', 1999, 'PG-13', '136 min', 'Sci-Fi');

INSERT INTO favorites VALUES(DEFAULT, true);
INSERT INTO favorites VALUES(DEFAULT, false);
