USE exampledb;
CREATE TABLE posts (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    animal_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    caption VARCHAR(255) NOT NULL,
    time_stamp DATETIME,
    by_user VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL);