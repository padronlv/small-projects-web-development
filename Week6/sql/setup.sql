DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    age INTEGER,
    number_of_oscars INTEGER
);

INSERT INTO actors (name, age, number_of_oscars) VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (name, age, number_of_oscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (name, age, number_of_oscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (name, age, number_of_oscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (name, age, number_of_oscars) VALUES ('John Cho', 43, 0);
