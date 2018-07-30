DROP DATABASE moviesdb;
CREATE DATABASE moviesdb;

\c moviesdb

DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  year INT,
  rated TEXT NOT NULL,
  runtime TEXT NOT NULL,
  genre TEXT NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  year INT,
  rated TEXT NOT NULL,
  runtime TEXT NOT NULL,
  genre TEXT NOT NULL
);


