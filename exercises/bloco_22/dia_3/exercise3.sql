-- Task 1
ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);

-- Task 2
ALTER TABLE locations CHANGE COLUMN region_name region VARCHAR(25);

-- Task 3
ALTER TABLE locations CHANGE COLUMN country_name country VARCHAR(40);