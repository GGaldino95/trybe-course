CREATE DATABASE IF NOT EXISTS Zoo;

USE Zoo;
CREATE TABLE Manager(
MANAGER_ID INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(30) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE Caretaker(
CARETAKER_ID INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(20) NOT NULL,
MANAGER_ID INT NOT NULL,
FOREIGN KEY (MANAGER_ID) REFERENCES Manager(MANAGER_ID)
) ENGINE = InnoDB;

CREATE TABLE Animal(
ANIMAL_ID INT PRIMARY KEY AUTO_INCREMENT,
`NAME` VARCHAR(50) NOT NULL,
SPECIES VARCHAR(25) NOT NULL,
AGE INT NOT NULL,
SEX VARCHAR(10) NOT NULL,
LOCATION VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE Caretaker_has_Animal(
ANIMAL_ID INT NOT NULL,
CARETAKER_ID INT NOT NULL,
CONSTRAINT PRIMARY KEY(ANIMAL_ID, CARETAKER_ID),
FOREIGN KEY (ANIMAL_ID) REFERENCES Animal (ANIMAL_ID),
FOREIGN KEY (CARETAKER_ID) REFERENCES Caretaker (CARETAKER_ID)
) ENGINE = InnoDB;
