DROP DATABASE IF EXISTS
manifestations_dev;

CREATE DATABASE manifestations_dev;

\c manifestations_dev;

CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  description TEXT,
  price FLOAT(2),
  duration_minutes INTEGER,
  category VARCHAR(50),
  is_popular BOOLEAN
);