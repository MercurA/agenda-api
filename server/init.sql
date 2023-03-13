CREATE TABLE users(user_id SERIAL UNIQUE NOT NULL PRIMARY KEY);

-- Finaces will be created from the begining in the DB and should not be altered unless needed to generate new IDs
CREATE TABLE finances(finance_id SERIAL UNIQUE NOT NULL PRIMARY KEY);

CREATE TABLE groceries(grocery_id SERIAL UNIQUE NOT NULL PRIMARY KEY);

CREATE TABLE photos(photo_id SERIAL UNIQUE NOT NULL PRIMARY KEY);

CREATE TABLE finances_groceries(
    finance_id INT REFERENCES finances(finance_id) ON UPDATE CASCADE ON DELETE CASCADE,
    grocery_id INT REFERENCES groceries(grocery_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE users_finances(
    finance_id INT REFERENCES finances(finance_id) ON UPDATE CASCADE ON DELETE CASCADE,
    user_id INT REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE
);

ALTER TABLE users ADD COLUMN first_name VARCHAR(100);
ALTER TABLE users ADD COLUMN last_name VARCHAR(100);
ALTER TABLE users ADD COLUMN email VARCHAR(100);
ALTER TABLE users ADD COLUMN password VARCHAR(100);
ALTER TABLE users ADD COLUMN token VARCHAR(100);

ALTER TABLE finances ADD COLUMN type VARCHAR(30);
ALTER TABLE finances ADD COLUMN details VARCHAR(100);

ALTER TABLE groceries ADD COLUMN total_amount NUMERIC;
ALTER TABLE groceries ADD COLUMN created_at TIMESTAMP;
ALTER TABLE groceries ADD COLUMN details VARCHAR(100);

-- ALTER TABLE photos ADD COLUMN blob BYTEA;

INSERT INTO users(first_name,last_name,email,password,token) VALUES('Horea', 'C','asd@asd','asd','12asd1d1');
INSERT INTO finances(type) VALUES('food'),('bills'),('entertainment'),('misc');
INSERT INTO groceries(total_amount, details) VALUES(1.2,'test');
INSERT INTO finances_groceries(finance_id, grocery_id) VALUES(1,1);
INSERT INTO users_finances(finance_id, user_id) VALUES(1,1);
-- example of a join with the above relationship
-- SELECT * from users INNER JOIN users_finances uf ON uf.user_id=users.user_id INNER JOIN finances f ON f.finance_id=uf.finance_id INNER JOIN finances_groceries fg ON fg.finance_id=f.finance_id INNER JOIN groceries g ON g.grocery_id=fg.grocery_id