CREATE DATABASE practiceTask;

-- \c into practiceTask 

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL
);

--inserting users example

INSERT INTO users (firstName, lastName, email) VALUES ('kathy', 'xayasomloth', 'kathyxaya17@gmail.com');


